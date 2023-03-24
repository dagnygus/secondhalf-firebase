"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=25,exports.ids=[25],exports.modules={78025:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SignInModule:()=>SignInModule});var router=__webpack_require__(14195),shared_module=__webpack_require__(26922),operators=__webpack_require__(51138),form_helper=__webpack_require__(37513),page_component=__webpack_require__(44125),ng_animations=__webpack_require__(33324),auth_actions=__webpack_require__(57928),cjs=__webpack_require__(25095),dist=__webpack_require__(89233),animations=__webpack_require__(21097),utils=__webpack_require__(52849),core=__webpack_require__(40305),sign_in_service=__webpack_require__(13017),validation_service=__webpack_require__(41346),auth_effects=__webpack_require__(5082),global_loading_spinner_service=__webpack_require__(80316),ngrx_store=__webpack_require__(7776),async_validation_on_blur_directive=__webpack_require__(46098),first_key_of_directive=__webpack_require__(54222),common=__webpack_require__(89318),fesm2020_button=__webpack_require__(12161),icon=__webpack_require__(6373),form_field=__webpack_require__(69041),input=__webpack_require__(41764),fesm2020_forms=__webpack_require__(43070);function SignInFormComponent_div_8_span_2_Template(rf,ctx){1&rf&&(core.TgZ(0,"span"),core._uU(1," Failed to sign in. Wrong password. "),core.qZA())}function SignInFormComponent_div_8_span_3_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"span"),core._uU(1),core.qZA()),2&rf){const ctx_r5=core.oxw(2);core.xp6(1),core.hij(' E-mail address "',ctx_r5.currentWrittenEmail,'" is not registered! ')}}function SignInFormComponent_div_8_span_4_Template(rf,ctx){1&rf&&(core.TgZ(0,"span"),core._uU(1," An internal server error accour. Please try again later. "),core.qZA())}function SignInFormComponent_div_8_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",14),core.ynx(1,15),core.YNc(2,SignInFormComponent_div_8_span_2_Template,2,0,"span",16),core.YNc(3,SignInFormComponent_div_8_span_3_Template,2,1,"span",16),core.YNc(4,SignInFormComponent_div_8_span_4_Template,2,0,"span",17),core.BQk(),core.qZA()),2&rf){const error_r3=ctx.ngIf;core.xp6(1),core.Q6J("ngSwitch",error_r3.code),core.xp6(1),core.Q6J("ngSwitchCase","auth/wrong-password"),core.xp6(1),core.Q6J("ngSwitchCase","auth/user-not-found")}}function SignInFormComponent_mat_error_15_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"mat-error"),core._uU(1),core.qZA()),2&rf){const error_r7=ctx.$implicit;core.xp6(1),core.Oqu(error_r7)}}function SignInFormComponent_mat_error_23_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"mat-error"),core._uU(1),core.qZA()),2&rf){const error_r8=ctx.$implicit;core.xp6(1),core.Oqu(error_r8)}}__name(SignInFormComponent_div_8_span_2_Template,"SignInFormComponent_div_8_span_2_Template"),__name(SignInFormComponent_div_8_span_3_Template,"SignInFormComponent_div_8_span_3_Template"),__name(SignInFormComponent_div_8_span_4_Template,"SignInFormComponent_div_8_span_4_Template"),__name(SignInFormComponent_div_8_Template,"SignInFormComponent_div_8_Template"),__name(SignInFormComponent_mat_error_15_Template,"SignInFormComponent_mat_error_15_Template"),__name(SignInFormComponent_mat_error_23_Template,"SignInFormComponent_mat_error_23_Template");const formAnimationMetadata=(0,animations.X$)("form",[(0,animations.eR)(":enter",[(0,animations.ru)([(0,animations.IO)("mat-form-field:nth-of-type(odd)",[ng_animations.PYX.startState,(0,animations.EY)(150,[(0,ng_animations.PYX)("300ms","300ms")])],{optional:!0}),(0,animations.IO)("mat-form-field:nth-of-type(even)",[ng_animations.MeT.startState,(0,animations.EY)(150,[(0,ng_animations.MeT)("300ms","450ms")])],{optional:!0}),(0,animations.IO)("@*",(0,animations.pV)())])]),(0,animations.eR)(":leave",[(0,animations.ru)([(0,animations.IO)("mat-form-field:nth-of-type(odd)",(0,ng_animations.qUF)("300ms","0ms"),{optional:!0}),(0,animations.IO)("mat-form-field:nth-of-type(even)",(0,ng_animations.Gzh)("300ms","0ms"),{optional:!0}),(0,animations.IO)("@*",(0,animations.pV)())])])]),btnGroupAnimationMetadata=(0,animations.X$)("btnGroup",[(0,animations.eR)(":enter",[ng_animations.ubD.startState,(0,ng_animations.ubD)("600ms","400ms")]),(0,animations.eR)(":leave",[(0,ng_animations.Krt)("600ms","400ms")])]),formHeaderAnimationMetadata=(0,animations.X$)("formHeader",[(0,animations.eR)(":enter",[ng_animations.BX9.startState,(0,ng_animations.BX9)("400ms","800ms")]),(0,animations.eR)(":leave",[(0,ng_animations.SEG)("400ms","0ms")])]);class SignInFormComponent extends page_component.I{constructor(signInService,asyncValidationService,authStateEvents,spinnerService,_store){super(),this._store=_store,this._pickError=!1,this._subscription=new cjs.Subscription,this.currentWrittenEmail="",this.passwordHidden=!0;const{formGroup,dispose}=signInService.getFormGroup();this.formGroup=formGroup,this.formGroup.controls.email.addAsyncValidators(asyncValidationService.hasEmail()),this._subscription.add(dispose),this.formSubmitter=new form_helper.dT(this.formGroup),this._subscription.add(()=>this.formSubmitter.dispose()),this.submitDisabled$=(0,cjs.merge)(this.formSubmitter.submitDisabled$,authStateEvents.signingIn$.pipe((0,cjs.map)(status=>status===utils.XS.awaiting),(0,cjs.tap)(value=>{value?spinnerService.attach():spinnerService.detach()}))),this.error$=authStateEvents.signingIn$.pipe((0,cjs.map)(status=>status===utils.XS.rejected?authStateEvents.getError():null),(0,cjs.filter)(error=>this._pickError&&error&&error instanceof dist.ZR),(0,cjs.tap)(()=>{this.currentWrittenEmail=this.formGroup.controls.email.value,this._pickError=!1}),(0,operators.BN)())}onSubmit(){this._pickError=!0,this.formSubmitter.trySubmit(()=>{this._store.dispatch((0,auth_actions.zB)({signInModel:this.formGroup.getRawValue(),info:"Sign in from app-sign-in-form component."}))})}ngOnDestroy(){this._subscription.unsubscribe()}static#_=this.\u0275fac=__name(function(t){return new(t||SignInFormComponent)(core.Y36(sign_in_service.y),core.Y36(validation_service.D),core.Y36(auth_effects.f),core.Y36(global_loading_spinner_service.j),core.Y36(ngrx_store.yh))},"SignInFormComponent_Factory");static#_2=this.\u0275cmp=core.Xpm({type:SignInFormComponent,selectors:[["app-sign-in-form"]],features:[core.qOj],decls:30,vars:20,consts:[[1,"grid","min-h-[85vh]","grid-rows-[1fr_auto_1fr]",3,"formGroup","ngSubmit"],[1,"text-center","self-end"],[1,"mb-[32px]"],["routerLink","/signup"],["class","border border-red-400 text-[14px] color-warn rounded-[16px] place-self-center\n              w-[95%] p-[16px_8px] mb-[16px] text-center mat-elevation-z6",4,"ngIf"],[1,"grid","gap-[16px]"],["floatLabel","auto","appearance","fill","color","accent"],["matInput","","type","text","name","email","formControlName","email","inputmode","email","async-validation-on-blur",""],[4,"appFirstKeyOf"],["matInput","","name","password","formControlName","password",3,"type"],["type","button","mat-icon-button","","tabindex","-1","matSuffix","",3,"click"],[1,"grid","grid-flow-col","auto-cols-fr","gap-[8px]","mt-[16px]","self-start"],["type","submit","mat-raised-button","","color","primary",1,"py-[8px_!important]",3,"disabled"],["type","button","mat-raised-button","","color","warn",1,"py-[8px_!important]"],[1,"border","border-red-400","text-[14px]","color-warn","rounded-[16px]","place-self-center","w-[95%]","p-[16px_8px]","mb-[16px]","text-center","mat-elevation-z6"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"form",0),core.NdJ("ngSubmit",__name(function(){return ctx.onSubmit()},"SignInFormComponent_Template_form_ngSubmit_0_listener")),core.ALo(1,"async"),core.TgZ(2,"div",1)(3,"p",2),core._uU(4,"Complete the form to Sign-In. If you not have account, please "),core.TgZ(5,"a",3),core._uU(6,"register"),core.qZA(),core._uU(7,"."),core.qZA()(),core.YNc(8,SignInFormComponent_div_8_Template,5,3,"div",4),core.ALo(9,"async"),core.TgZ(10,"div",5)(11,"mat-form-field",6)(12,"mat-label"),core._uU(13,"Address E-mail"),core.qZA(),core._UZ(14,"input",7),core.YNc(15,SignInFormComponent_mat_error_15_Template,2,1,"mat-error",8),core.qZA(),core.TgZ(16,"mat-form-field",6)(17,"mat-label"),core._uU(18,"Password"),core.qZA(),core._UZ(19,"input",9),core.TgZ(20,"button",10),core.NdJ("click",__name(function(){return ctx.passwordHidden=!ctx.passwordHidden},"SignInFormComponent_Template_button_click_20_listener")),core.TgZ(21,"mat-icon"),core._uU(22),core.qZA()(),core.YNc(23,SignInFormComponent_mat_error_23_Template,2,1,"mat-error",8),core.qZA()(),core.TgZ(24,"div",11)(25,"button",12),core.ALo(26,"async"),core._uU(27,"Sign-In"),core.qZA(),core.TgZ(28,"button",13),core._uU(29,"Cancel"),core.qZA()()()),2&rf&&(core.ekj("with-error",core.lcZ(1,14,ctx.error$)),core.Q6J("formGroup",ctx.formGroup)("@form",void 0),core.xp6(2),core.Q6J("@formHeader",void 0),core.xp6(1),core.ekj("with-error",!0),core.xp6(5),core.Q6J("ngIf",core.lcZ(9,16,ctx.error$)),core.xp6(7),core.Q6J("appFirstKeyOf",ctx.formGroup.controls.email.errors),core.xp6(4),core.Q6J("type",ctx.passwordHidden?"password":"text"),core.xp6(3),core.hij(" ",ctx.passwordHidden?"visibility":"visibility_off"," "),core.xp6(1),core.Q6J("appFirstKeyOf",ctx.formGroup.controls.password.errors),core.xp6(1),core.Q6J("@btnGroup",void 0),core.xp6(1),core.Q6J("disabled",core.lcZ(26,18,ctx.submitDisabled$)))},"SignInFormComponent_Template"),dependencies:[async_validation_on_blur_directive.A,first_key_of_directive.E,common.O5,common.RF,common.n9,common.ED,router.rH,fesm2020_button.lW,fesm2020_button.RK,icon.Hw,form_field.KE,form_field.hX,form_field.TO,form_field.R9,input.Nt,fesm2020_forms._Y,fesm2020_forms.Fj,fesm2020_forms.JJ,fesm2020_forms.JL,fesm2020_forms.sg,fesm2020_forms.u,common.Ov],styles:["[_nghost-%COMP%]{display:block;margin:0 auto;width:100%;max-width:400px}p.with-error[_ngcontent-%COMP%]{margin-bottom:16px}form.with-error[_ngcontent-%COMP%]{grid-template-rows:1fr auto auto 1fr}"],data:{animation:[formAnimationMetadata,btnGroupAnimationMetadata,formHeaderAnimationMetadata]},changeDetection:0})}__name(SignInFormComponent,"SignInFormComponent");var unauth_guard=__webpack_require__(99122),sign_in_guard=__webpack_require__(43665);class SignInModule{static#_=this.\u0275fac=__name(function(t){return new(t||SignInModule)},"SignInModule_Factory");static#_2=this.\u0275mod=core.oAB({type:SignInModule});static#_3=this.\u0275inj=core.cJS({imports:[shared_module.m,router.Bz.forChild([{path:"",component:SignInFormComponent,canActivate:[unauth_guard.B,sign_in_guard.$]}])]})}__name(SignInModule,"SignInModule")}};