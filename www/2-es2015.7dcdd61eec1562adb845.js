(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{GvuD:function(i,n,o){"use strict";o.d(n,"a",(function(){return M}));var t=o("mrSG"),e=o("3Pt+"),s=o("NV1z"),c=o("jgsO"),a=o("GGTb"),r=o("fXoL"),b=o("TEn/"),l=o("ofXK"),g=o("sYmb");function u(i,n){1&i&&r.Qb(0,"ion-spinner",5)}function h(i,n){1&i&&(r.Vb(0,"span"),r.Fc(1),r.hc(2,"translate"),r.Ub()),2&i&&(r.Cb(1),r.Gc(r.ic(2,1,"SUBMIT")))}let d=(()=>{class i extends s.a{constructor(i,n){super(i),this.userService=n,this.form=new e.c({email:new e.a("",[e.m.required,e.m.email])})}enableMenuSwipe(){return!1}onDismiss(){this.modalCtrl.dismiss()}onSubmit(){return Object(t.a)(this,void 0,void 0,(function*(){if(this.form.invalid){const i=yield this.getTrans("INVALID_FORM");return this.showToast(i)}try{yield this.showLoadingView({showOverlay:!1});const i=this.form.value.email;yield this.userService.recoverPassword(i),this.showContentView(),this.translate.get("FORGOT_PASSWORD_SUCCESS").subscribe(i=>this.showAlert(i))}catch(i){205===i.code?this.translate.get("EMAIL_NOT_FOUND").subscribe(i=>this.showToast(i)):this.translate.get("ERROR_NETWORK").subscribe(i=>this.showToast(i)),this.showContentView()}}))}}return i.\u0275fac=function(n){return new(n||i)(r.Pb(r.r),r.Pb(c.a))},i.\u0275cmp=r.Jb({type:i,selectors:[["page-forgot-password"]],features:[r.zb],decls:27,vars:13,consts:[[1,"ion-no-border"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],[1,"ion-padding"],["color","dark"],["novalidate","",3,"formGroup","ngSubmit"],["forgotPasswordForm","ngForm"],["position","stacked","color","medium"],[1,"bold"],["lines","none","color","light",1,"ion-margin-vertical"],["type","email","formControlName","email",3,"keyup.enter"],[1,"ion-justify-content-center"],["size-xs","6","size-md","4",1,"ion-text-center"],["type","submit","shape","round","expand","block","color","light",3,"disabled"],["color","dark",4,"ngIf"],[4,"ngIf"]],template:function(i,n){if(1&i){const i=r.Wb();r.Vb(0,"ion-header",0),r.Vb(1,"ion-toolbar"),r.Vb(2,"ion-title"),r.Fc(3),r.hc(4,"translate"),r.Ub(),r.Vb(5,"ion-buttons",1),r.Vb(6,"ion-button",2),r.dc("click",(function(){return n.onDismiss()})),r.Qb(7,"ion-icon",3),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(8,"ion-content",4),r.Vb(9,"ion-text",5),r.Vb(10,"p"),r.Fc(11),r.hc(12,"translate"),r.Ub(),r.Qb(13,"p"),r.Ub(),r.Vb(14,"form",6,7),r.dc("ngSubmit",(function(){return n.onSubmit()})),r.Vb(16,"ion-label",8),r.Vb(17,"span",9),r.Fc(18),r.hc(19,"translate"),r.Ub(),r.Ub(),r.Vb(20,"ion-item",10),r.Vb(21,"ion-input",11),r.dc("keyup.enter",(function(){return r.wc(i),r.uc(15).ngSubmit.emit()})),r.Ub(),r.Ub(),r.Vb(22,"ion-row",12),r.Vb(23,"ion-col",13),r.Vb(24,"ion-button",14),r.Dc(25,u,1,0,"ion-spinner",15),r.Dc(26,h,3,3,"span",16),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub()}2&i&&(r.Cb(3),r.Gc(r.ic(4,7,"FORGOT_PASSWORD")),r.Cb(8),r.Gc(r.ic(12,9,"FORGOT_PASSWORD_HELP")),r.Cb(3),r.mc("formGroup",n.form),r.Cb(4),r.Gc(r.ic(19,11,"EMAIL")),r.Cb(6),r.mc("disabled",n.isLoadingViewVisible),r.Cb(1),r.mc("ngIf",n.isLoadingViewVisible),r.Cb(1),r.mc("ngIf",!n.isLoadingViewVisible))},directives:[b.s,b.Y,b.W,b.k,b.j,b.t,b.p,b.T,e.n,e.j,e.d,b.z,b.x,b.w,b.ib,e.i,e.b,b.J,b.o,l.l,b.P],pipes:[g.c],styles:["ion-content[_ngcontent-%COMP%]{--padding-top:40px}ion-item[_ngcontent-%COMP%]{--border-radius:4px}"]}),i})();var p=o("ahC7"),m=o("up+p"),f=o("3EM6"),w=o("xS7M"),V=o("AytR"),I=o("gNTI");function S(i,n){if(1&i){const i=r.Wb();r.Vb(0,"div",7),r.Vb(1,"div",8),r.Vb(2,"h3"),r.Fc(3),r.hc(4,"translate"),r.Ub(),r.Qb(5,"p",9),r.hc(6,"translate"),r.Vb(7,"ion-row"),r.Vb(8,"ion-col"),r.Vb(9,"ion-button",10),r.dc("click",(function(){return r.wc(i),r.gc().onLoginButtonTouched()})),r.Fc(10),r.hc(11,"translate"),r.Ub(),r.Ub(),r.Vb(12,"ion-col"),r.Vb(13,"ion-button",11),r.dc("click",(function(){return r.wc(i),r.gc().onSignUpButtonTouched()})),r.Fc(14),r.hc(15,"translate"),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub()}2&i&&(r.Cb(3),r.Gc(r.ic(4,4,"LOGIN")),r.Cb(2),r.mc("innerHTML",r.ic(6,6,"LOGIN_INFO"),r.xc),r.Cb(5),r.Hc(" ",r.ic(11,8,"LOGIN")," "),r.Cb(4),r.Hc(" ",r.ic(15,10,"SIGN_UP")," "))}function U(i,n){1&i&&r.Qb(0,"ion-spinner",28)}function C(i,n){1&i&&(r.Vb(0,"span"),r.Fc(1),r.hc(2,"translate"),r.Ub()),2&i&&(r.Cb(1),r.Gc(r.ic(2,1,"LOGIN")))}function v(i,n){1&i&&(r.Vb(0,"div",29),r.Qb(1,"ion-spinner"),r.Ub())}function k(i,n){1&i&&r.Qb(0,"ion-spinner",28)}function F(i,n){1&i&&(r.Vb(0,"span",34),r.Fc(1),r.hc(2,"translate"),r.Ub()),2&i&&(r.Cb(1),r.Hc(" ",r.ic(2,1,"FACEBOOK")," "))}function y(i,n){if(1&i){const i=r.Wb();r.Vb(0,"ion-col",30),r.Vb(1,"ion-button",31),r.dc("click",(function(){return r.wc(i),r.gc(2).onFacebookButtonTouched()})),r.Qb(2,"ion-icon",32),r.Dc(3,k,1,0,"ion-spinner",21),r.Dc(4,F,3,3,"span",33),r.Ub(),r.Ub()}if(2&i){const i=r.gc(2);r.Cb(1),r.mc("disabled",i.isSignInViaApple||i.isSignInViaGoogle||i.isSignInViaUsername||i.isSignInViaFacebook),r.Cb(2),r.mc("ngIf",i.isSignInViaFacebook),r.Cb(1),r.mc("ngIf",!i.isSignInViaFacebook)}}function L(i,n){1&i&&r.Qb(0,"ion-spinner",28)}function O(i,n){1&i&&(r.Vb(0,"span",34),r.Fc(1),r.hc(2,"translate"),r.Ub()),2&i&&(r.Cb(1),r.Hc(" ",r.ic(2,1,"GOOGLE_LOGIN")," "))}function A(i,n){if(1&i){const i=r.Wb();r.Vb(0,"ion-col",30),r.Vb(1,"ion-button",35),r.dc("click",(function(){return r.wc(i),r.gc(2).onGoogleButtonTouched()})),r.Qb(2,"ion-icon",36),r.Dc(3,L,1,0,"ion-spinner",21),r.Dc(4,O,3,3,"span",33),r.Ub(),r.Ub()}if(2&i){const i=r.gc(2);r.Cb(1),r.mc("disabled",i.isSignInViaApple||i.isSignInViaGoogle||i.isSignInViaUsername||i.isSignInViaFacebook),r.Cb(2),r.mc("ngIf",i.isSignInViaGoogle),r.Cb(1),r.mc("ngIf",!i.isSignInViaGoogle)}}function E(i,n){1&i&&r.Qb(0,"ion-spinner",28)}function T(i,n){1&i&&(r.Vb(0,"span",34),r.Fc(1),r.hc(2,"translate"),r.Ub()),2&i&&(r.Cb(1),r.Hc(" ",r.ic(2,1,"APPLE_LOGIN")," "))}function G(i,n){if(1&i){const i=r.Wb();r.Vb(0,"ion-button",38),r.dc("click",(function(){return r.wc(i),r.gc(3).onAppleButtonTouched()})),r.Qb(1,"ion-icon",39),r.Dc(2,E,1,0,"ion-spinner",21),r.Dc(3,T,3,3,"span",33),r.Ub()}if(2&i){const i=r.gc(3);r.mc("disabled",i.isSignInViaApple||i.isSignInViaGoogle||i.isSignInViaUsername||i.isSignInViaFacebook),r.Cb(2),r.mc("ngIf",i.isSignInViaApple),r.Cb(1),r.mc("ngIf",!i.isSignInViaApple)}}function D(i,n){if(1&i&&(r.Vb(0,"ion-col",30),r.Dc(1,G,4,3,"ion-button",37),r.Ub()),2&i){const i=r.gc(2);r.Cb(1),r.mc("ngIf",i.isAppleSignInAvailable)}}function N(i,n){if(1&i){const i=r.Wb();r.Vb(0,"div"),r.Vb(1,"div",8),r.Qb(2,"img",12),r.Ub(),r.Vb(3,"form",13,14),r.dc("ngSubmit",(function(){return r.wc(i),r.gc().onLogin()})),r.Vb(5,"ion-item",15),r.Qb(6,"ion-input",16),r.hc(7,"translate"),r.Ub(),r.Vb(8,"ion-item",15),r.Vb(9,"ion-input",17),r.dc("keyup.enter",(function(){return r.wc(i),r.uc(4).ngSubmit.emit()})),r.hc(10,"translate"),r.Ub(),r.Ub(),r.Vb(11,"ion-row",18),r.Vb(12,"ion-col",19),r.Vb(13,"ion-button",20),r.Dc(14,U,1,0,"ion-spinner",21),r.Dc(15,C,3,3,"span",6),r.Ub(),r.Ub(),r.Ub(),r.Dc(16,v,2,0,"div",22),r.Vb(17,"ion-row",23),r.Dc(18,y,5,3,"ion-col",24),r.Dc(19,A,5,3,"ion-col",24),r.Dc(20,D,2,1,"ion-col",24),r.Ub(),r.Ub(),r.Vb(21,"ion-row"),r.Vb(22,"ion-col",25),r.Vb(23,"ion-button",26),r.dc("click",(function(){return r.wc(i),r.gc().onForgotPasswordButtonTouched()})),r.Fc(24),r.hc(25,"translate"),r.Ub(),r.Ub(),r.Vb(26,"ion-col",27),r.Vb(27,"ion-button",26),r.dc("click",(function(){return r.wc(i),r.gc().onSignUpButtonTouched()})),r.Fc(28),r.hc(29,"translate"),r.Ub(),r.Ub(),r.Ub(),r.Ub()}if(2&i){const i=r.gc();r.Cb(3),r.mc("formGroup",i.form),r.Cb(3),r.mc("placeholder",r.ic(7,12,"USERNAME_OR_EMAIL")),r.Cb(3),r.mc("placeholder",r.ic(10,14,"PASSWORD")),r.Cb(4),r.mc("disabled",i.isSignInViaApple||i.isSignInViaGoogle||i.isSignInViaUsername||i.isSignInViaFacebook),r.Cb(1),r.mc("ngIf",i.isSignInViaUsername),r.Cb(1),r.mc("ngIf",!i.isSignInViaUsername),r.Cb(1),r.mc("ngIf",i.isLoadingConfig),r.Cb(2),r.mc("ngIf",i.isFacebookLoginEnabled),r.Cb(1),r.mc("ngIf",i.isGoogleLoginEnabled),r.Cb(1),r.mc("ngIf",i.isAppleLoginEnabled),r.Cb(4),r.Hc(" ",r.ic(25,16,"FORGOT_PASSWORD")," "),r.Cb(4),r.Hc(" ",r.ic(29,18,"NO_ACCOUNT_YET_CREATE_ONE")," ")}}function _(i,n){if(1&i){const i=r.Wb();r.Vb(0,"ion-button",48),r.dc("click",(function(){r.wc(i);const n=r.gc(2);return n.showPass=!n.showPass})),r.Qb(1,"ion-icon",49),r.Ub()}}function R(i,n){if(1&i){const i=r.Wb();r.Vb(0,"ion-button",48),r.dc("click",(function(){r.wc(i);const n=r.gc(2);return n.showPass=!n.showPass})),r.Qb(1,"ion-icon",50),r.Ub()}}function P(i,n){1&i&&r.Qb(0,"ion-spinner",28)}function x(i,n){1&i&&(r.Vb(0,"span"),r.Fc(1),r.hc(2,"translate"),r.Ub()),2&i&&(r.Cb(1),r.Gc(r.ic(2,1,"SIGN_UP")))}function W(i,n){if(1&i){const i=r.Wb();r.Vb(0,"div"),r.Vb(1,"div",8),r.Qb(2,"img",12),r.Ub(),r.Vb(3,"form",13,40),r.dc("ngSubmit",(function(){return r.wc(i),r.gc().onSignUp()})),r.Vb(5,"ion-item",15),r.Qb(6,"ion-input",41),r.hc(7,"translate"),r.Ub(),r.Vb(8,"ion-item",15),r.Qb(9,"ion-input",16),r.hc(10,"translate"),r.Ub(),r.Vb(11,"ion-item",15),r.Qb(12,"ion-input",42),r.hc(13,"translate"),r.Ub(),r.Vb(14,"ion-text",43),r.Vb(15,"p"),r.Vb(16,"small"),r.Fc(17),r.hc(18,"translate"),r.Ub(),r.Ub(),r.Ub(),r.Vb(19,"ion-item",15),r.Vb(20,"ion-input",44),r.dc("keyup.enter",(function(){return r.wc(i),r.uc(4).ngSubmit.emit()})),r.hc(21,"translate"),r.Ub(),r.Dc(22,_,2,0,"ion-button",45),r.Dc(23,R,2,0,"ion-button",45),r.Ub(),r.Vb(24,"ion-text",43),r.Vb(25,"p"),r.Vb(26,"small"),r.Fc(27),r.hc(28,"translate"),r.Ub(),r.Ub(),r.Ub(),r.Vb(29,"ion-row",23),r.Vb(30,"ion-col",19),r.Vb(31,"ion-button",20),r.Dc(32,P,1,0,"ion-spinner",21),r.Dc(33,x,3,3,"span",6),r.Ub(),r.Ub(),r.Ub(),r.Vb(34,"ion-row",23),r.Vb(35,"ion-col",46),r.Vb(36,"ion-button",47),r.dc("click",(function(){return r.wc(i),r.gc().onLoginButtonTouched()})),r.Fc(37),r.hc(38,"translate"),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub()}if(2&i){const i=r.gc();r.Cb(3),r.mc("formGroup",i.form),r.Cb(3),r.mc("placeholder",r.ic(7,14,"NAME")),r.Cb(3),r.mc("placeholder",r.ic(10,16,"USERNAME")),r.Cb(3),r.mc("placeholder",r.ic(13,18,"EMAIL")),r.Cb(5),r.Gc(r.ic(18,20,"EMAIL_FIELD_HELP")),r.Cb(3),r.mc("type",i.showPass?"text":"password")("placeholder",r.ic(21,22,"PASSWORD")),r.Cb(2),r.mc("ngIf",!i.showPass),r.Cb(1),r.mc("ngIf",i.showPass),r.Cb(4),r.Gc(r.ic(28,24,"PASSWORD_VALIDATION_MSG")),r.Cb(4),r.mc("disabled",i.isSignUpLoading),r.Cb(1),r.mc("ngIf",i.isSignUpLoading),r.Cb(1),r.mc("ngIf",!i.isSignUpLoading),r.Cb(4),r.Hc(" ",r.ic(38,26,"BACK_TO_LOGIN")," ")}}let M=(()=>{class i extends s.a{constructor(i,n,o,t,e,s,c,a){super(i),this.fb=n,this.authService=o,this.googlePlus=t,this.signInWithApple=e,this.device=s,this.appConfigService=c,this.userService=a,this.isSignInViaFacebook=!1,this.isSignInViaGoogle=!1,this.isSignInViaApple=!1,this.isSignInViaUsername=!1,this.isAppleSignInAvailable=!1,this.isSignUpLoading=!1}ngOnInit(){const i=parseInt(this.device.version);this.isAppleSignInAvailable=i>=13&&this.isCordova()&&this.isIos(),this.showLoginForm?this.setupLoginForm():this.showSignUpForm&&this.setupSignUpForm(),this.googleSubscription=this.authService.authState.subscribe(i=>{i&&this.loggedIntoGoogle(i)}),this.loadAppConfig()}ngOnDestroy(){this.googleSubscription.unsubscribe()}enableMenuSwipe(){return!1}onDismiss(){this.modalCtrl.dismiss()}loadAppConfig(){var i,n,o;return Object(t.a)(this,void 0,void 0,(function*(){try{this.isLoadingConfig=!0;const t=yield this.appConfigService.load();this.isFacebookLoginEnabled=null===(i=null==t?void 0:t.auth)||void 0===i?void 0:i.isFacebookLoginEnabled,this.isGoogleLoginEnabled=null===(n=null==t?void 0:t.auth)||void 0===n?void 0:n.isGoogleLoginEnabled,this.isAppleLoginEnabled=null===(o=null==t?void 0:t.auth)||void 0===o?void 0:o.isAppleLoginEnabled,this.isLoadingConfig=!1}catch(t){this.isLoadingConfig=!1}}))}onLoginButtonTouched(){this.showLoginForm=!0,this.showSignUpForm=!1,this.setupLoginForm()}onSignUpButtonTouched(){this.showLoginForm=!1,this.showSignUpForm=!0,this.setupSignUpForm()}setupLoginForm(){this.form=new e.c({username:new e.a("",e.m.required),password:new e.a("",e.m.required)})}setupSignUpForm(){this.form=new e.c({name:new e.a("",e.m.required),username:new e.a("",e.m.required),email:new e.a(""),password:new e.a("",[e.m.required,e.m.minLength(6)])})}onFacebookButtonTouched(){this.isHybrid()?this.fb.login(["public_profile"]).then(i=>this.loggedIntoFacebook(i)).catch(i=>console.log("Error logging into Facebook",i)):this.userService.loginViaFacebook().then(i=>this.loggedViaFacebook(i)).catch(i=>console.log("Error logging into Facebook",i))}loggedIntoFacebook(i){return Object(t.a)(this,void 0,void 0,(function*(){let n=new Date;n.setSeconds(n.getSeconds()+i.authResponse.expiresIn);const o=n.toISOString(),t={id:i.authResponse.userID,access_token:i.authResponse.accessToken,expiration_date:o};try{yield this.showLoadingView({showOverlay:!1}),this.isSignInViaFacebook=!0;const i=yield this.userService.loginWith("facebook",{authData:t});this.loggedViaFacebook(i),this.isSignInViaFacebook=!1}catch(e){this.loginViaFacebookFailure(e),this.isSignInViaFacebook=!1}}))}loginViaFacebookFailure(i){console.log("Error logging into Facebook",i),this.translate.get("ERROR_NETWORK").subscribe(i=>this.showToast(i)),this.showContentView()}loggedViaFacebook(i){this.showContentView(),this.translate.get("LOGGED_IN_AS",{name:i.attributes.name}).subscribe(i=>this.showToast(i)),window.dispatchEvent(new CustomEvent("user:login",{detail:i})),this.onDismiss()}onGoogleButtonTouched(){return Object(t.a)(this,void 0,void 0,(function*(){if(this.isHybrid())try{const i=yield this.googlePlus.login({webClientId:V.a.googleClientId});this.loggedIntoGoogle({id:i.userId,authToken:i.accessToken,idToken:i.idToken})}catch(i){console.error(i)}else this.authService.signIn(p.a.PROVIDER_ID)}))}loggedIntoGoogle(i){return Object(t.a)(this,void 0,void 0,(function*(){console.log("Logged into Google",i);try{this.isSignInViaGoogle=!0;const n={id:i.id,access_token:i.authToken,id_token:i.idToken},o=yield this.userService.loginWith("google",{authData:n});this.isSignInViaGoogle=!1,this.translate.get("LOGGED_IN_AS",{name:o.name}).subscribe(i=>this.showToast(i)),this.onDismiss(),window.dispatchEvent(new CustomEvent("user:login",{detail:o}))}catch(n){console.log("Error logging into Google",n),this.isSignInViaGoogle=!1,this.translate.get("ERROR_NETWORK").subscribe(i=>this.showToast(i)),this.showContentView()}}))}onAppleButtonTouched(){return Object(t.a)(this,void 0,void 0,(function*(){try{this.isSignInViaApple=!0;const i=yield this.signInWithApple.signin({requestedScopes:[f.a.ASAuthorizationScopeFullName,f.a.ASAuthorizationScopeEmail]}),n={id:i.user,token:i.identityToken},o={};i.fullName.givenName&&i.fullName.familyName&&(o.name=i.fullName.givenName+" "+i.fullName.familyName);const t=yield this.userService.loginWith("apple",{authData:n},o);this.isSignInViaApple=!1,this.translate.get("LOGGED_IN_AS",{name:t.name}).subscribe(i=>this.showToast(i)),this.onDismiss(),window.dispatchEvent(new CustomEvent("user:login",{detail:t}))}catch(i){this.isSignInViaApple=!1}}))}onLogin(){return Object(t.a)(this,void 0,void 0,(function*(){try{if(this.form.invalid){const i=yield this.getTrans("INVALID_FORM");return this.showToast(i)}yield this.showLoadingView({showOverlay:!1}),this.isSignInViaUsername=!0;const i=Object.assign({},this.form.value);i.username=i.username.trim(),i.password=i.password.trim();const n=yield this.userService.signIn(i);this.showContentView(),this.isSignInViaUsername=!1,this.translate.get("LOGGED_IN_AS",{name:n.name}).subscribe(i=>this.showToast(i)),this.onDismiss(),window.dispatchEvent(new CustomEvent("user:login",{detail:n}))}catch(i){101===i.code?this.translate.get("INVALID_CREDENTIALS").subscribe(i=>this.showToast(i)):this.translate.get("ERROR_NETWORK").subscribe(i=>this.showToast(i)),this.showContentView(),this.isSignInViaUsername=!1}}))}onSignUp(){return Object(t.a)(this,void 0,void 0,(function*(){try{if(this.form.invalid){const i=yield this.getTrans("INVALID_FORM");return this.showToast(i)}const i=Object.assign({},this.form.value);i.name=i.name.trim(),i.username=i.username.trim(),i.email=i.email.trim(),i.password=i.password.trim(),""===i.email&&delete i.email,yield this.showLoadingView({showOverlay:!1}),this.isSignUpLoading=!0;let n=null;const o=c.a.getCurrent();o&&o.attributes.authData&&void 0!==o.attributes.authData.anonymous?(o.setUsername(i.username),o.setPassword(i.password),delete i.username,delete i.password,n=yield o.signUp(i)):(n=new c.a,n.signUp(i)),this.showContentView(),this.isSignUpLoading=!1,this.translate.get("LOGGED_IN_AS",{name:n.name}).subscribe(i=>this.showToast(i)),this.onDismiss(),window.dispatchEvent(new CustomEvent("user:login",{detail:n}))}catch(i){this.showContentView(),this.isSignUpLoading=!1,202===i.code?this.translate.get("USERNAME_TAKEN").subscribe(i=>this.showToast(i)):203===i.code?this.translate.get("EMAIL_TAKEN").subscribe(i=>this.showToast(i)):125===i.code?this.translate.get("EMAIL_INVALID").subscribe(i=>this.showToast(i)):this.translate.get("ERROR_NETWORK").subscribe(i=>this.showToast(i))}}))}onForgotPasswordButtonTouched(){return Object(t.a)(this,void 0,void 0,(function*(){yield this.showLoadingView({showOverlay:!0});const i=yield this.modalCtrl.create({component:d});yield i.present(),this.showContentView()}))}}return i.\u0275fac=function(n){return new(n||i)(r.Pb(r.r),r.Pb(a.a),r.Pb(p.b),r.Pb(m.a),r.Pb(f.b),r.Pb(w.a),r.Pb(I.a),r.Pb(c.a))},i.\u0275cmp=r.Jb({type:i,selectors:[["page-sign-in"]],inputs:{showLoginForm:"showLoginForm",showSignUpForm:"showSignUpForm"},features:[r.zb],decls:10,vars:3,consts:[[1,"ion-no-border"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],[1,"ion-padding"],["class","center",4,"ngIf"],[4,"ngIf"],[1,"center"],[1,"ion-text-center"],[3,"innerHTML"],["color","primary","expand","block","fill","outline",3,"click"],["color","primary","expand","block",3,"click"],["width","60","src","./assets/imgs/icon.png"],["novalidate","",1,"ion-padding",3,"formGroup","ngSubmit"],["loginForm","ngForm"],["color","light","lines","none",1,"ion-margin-bottom"],["type","text","formControlName","username",3,"placeholder"],["type","password","formControlName","password",3,"placeholder","keyup.enter"],[1,"ion-margin-top","ion-justify-content-center"],["size-xs","8","size-md","6",1,"ion-text-center"],["strong","","type","submit","color","primary","expand","block","shape","round",1,"ion-margin-vertical",3,"disabled"],["color","light",4,"ngIf"],["class","ion-text-center ion-margin-vertical",4,"ngIf"],[1,"ion-justify-content-center"],["size-xs","12","size-md","6",4,"ngIf"],["size","6",1,"ion-text-start"],["strong","","fill","clear",3,"click"],["size","6",1,"ion-text-end"],["color","light"],[1,"ion-text-center","ion-margin-vertical"],["size-xs","12","size-md","6"],["strong","","type","button","color","fb","expand","block","shape","round",3,"disabled","click"],["slot","start","name","logo-facebook","color","light"],["class","ion-text-capitalize",4,"ngIf"],[1,"ion-text-capitalize"],["strong","","type","button","color","google","expand","block","shape","round",3,"disabled","click"],["slot","start","name","logo-google","color","light"],["strong","","type","button","color","dark","expand","block","shape","round",3,"disabled","click",4,"ngIf"],["strong","","type","button","color","dark","expand","block","shape","round",3,"disabled","click"],["slot","start","name","logo-apple","color","light"],["signupForm","ngForm"],["type","text","formControlName","name",3,"placeholder"],["type","email","formControlName","email",3,"placeholder"],["color","dark"],["formControlName","password",3,"type","placeholder","keyup.enter"],["fill","clear","color","dark","type","button","slot","end",3,"click",4,"ngIf"],["size","8",1,"ion-text-center"],["strong","","type","button","fill","clear","expand","block","color","dark",1,"ion-text-capitalize",3,"click"],["fill","clear","color","dark","type","button","slot","end",3,"click"],["name","eye-off"],["name","eye"]],template:function(i,n){1&i&&(r.Vb(0,"ion-header",0),r.Vb(1,"ion-toolbar"),r.Qb(2,"ion-title"),r.Vb(3,"ion-buttons",1),r.Vb(4,"ion-button",2),r.dc("click",(function(){return n.onDismiss()})),r.Qb(5,"ion-icon",3),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(6,"ion-content",4),r.Dc(7,S,16,12,"div",5),r.Dc(8,N,30,20,"div",6),r.Dc(9,W,39,28,"div",6),r.Ub()),2&i&&(r.Cb(7),r.mc("ngIf",!n.showLoginForm&&!n.showSignUpForm),r.Cb(1),r.mc("ngIf",n.showLoginForm),r.Cb(1),r.mc("ngIf",n.showSignUpForm))},directives:[b.s,b.Y,b.W,b.k,b.j,b.t,b.p,l.l,b.J,b.o,e.n,e.j,e.d,b.x,b.w,b.ib,e.i,e.b,b.P,b.T],pipes:[g.c],styles:[""]}),i})()},b8Qw:function(i,n,o){"use strict";o.d(n,"a",(function(){return a}));var t=o("d2mR"),e=o("3Pt+"),s=o("fXoL");let c=(()=>{class i{}return i.\u0275mod=s.Nb({type:i}),i.\u0275inj=s.Mb({factory:function(n){return new(n||i)},imports:[[t.a,e.e,e.l]]}),i})(),a=(()=>{class i{}return i.\u0275mod=s.Nb({type:i}),i.\u0275inj=s.Mb({factory:function(n){return new(n||i)},imports:[[t.a,e.e,e.l,c]]}),i})()},gNTI:function(i,n,o){"use strict";o.d(n,"a",(function(){return s}));var t=o("v0iw"),e=o("fXoL");let s=(()=>{class i extends t.Object{constructor(){super("AppConfig")}load(){return t.Cloud.run("getAppConfig")}get about(){return this.get("about")}get admin(){return this.get("admin")}get layout(){return this.get("layout")}get auth(){return this.get("auth")}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275prov=e.Lb({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();t.Object.registerSubclass("AppConfig",s)}}]);