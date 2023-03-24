import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
import authController from "./controllers/auth";
import * as express from 'express';
import userController from "./controllers/user";
import likeController from "./controllers/like";
import * as cloudFunctions from './functions/functions';
import chatController from "./controllers/chat";
import imageController from "./controllers/image";
import notificationController from './controllers/notification';
import * as slack from 'slack';
import { CloudBillingClient } from '@google-cloud/billing';
// import * as cors from 'cors';
const spa = require('../spa/secondhalf-spa/server/main');

admin.initializeApp();

const app = express();
const PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT ?? process.env.GCP_PROJECT ?? process.env.GCLOUD_PROJECT;
const PROJECT_NAME = `projects/${PROJECT_ID}`;
const EMULATOR_ENV = process.env.FUNCTIONS_EMULATOR === 'true'
const billingClient = new CloudBillingClient();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Expose-Headers', 'PAGINATION-TOTAL-PAGES');
	next();
});

// app.use(cors({ origin: true }))

app.use(authController);
app.use(userController);
app.use(likeController);
app.use(chatController);
app.use(imageController);
app.use(notificationController);


export const api = functions.https.onRequest(app);
export const ngssr = functions.https.onRequest(spa.app('functions/spa/secondhalf-spa/browser', EMULATOR_ENV))
export const onAuthCreate = cloudFunctions.onAuthCreate;
// export const userLogin = cloudFunctions.userLogin;
// export const userLogout = cloudFunctions.userLogout;
// export const onAuthDelete = cloudFunctions.onAuthDelete;

export const billing = functions.pubsub.topic('SHBudget').onPublish(async (arg) => {
	try {
		const pubsubData = arg.json;
		await slack.chat.postMessage({
			token: process.env.SLACK_OAUTH_TOKEN,
			channel: 'controling-expenses',
			text: `It looks like you spend ${pubsubData.constAmount}\$`
		})

		if (pubsubData.costAmount <= pubsubData.budgetAmount / 2) { return; }

		const isBillingEnabled = await _isBillingEnabled(PROJECT_NAME);

		if (!isBillingEnabled) { return; }

		await slack.chat.postMessage({
			token: process.env.SLACK_OAUTH_TOKEN,
			channel: 'controling-expenses',
			text: `Disabling billing for ${PROJECT_ID}`
		});

		await billingClient.updateProjectBillingInfo({
			name: PROJECT_NAME,
			projectBillingInfo: {
				billingAccountName: '',
			}
		})
	} catch (error) {
		console.error('Could not parse json message from pubsub billing!');
	}
});

async function _isBillingEnabled(projectName: string): Promise<boolean | null | undefined> {
	try {
		const [ res ] = await billingClient.getProjectBillingInfo({ name: projectName });
		return res.billingEnabled
	} catch {
		console.log('Unable to determine if billing is enabled on specified project, assuming billing is enabled')
		return true
	}
}