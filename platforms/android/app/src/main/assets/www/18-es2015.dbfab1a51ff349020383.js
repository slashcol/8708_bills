(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{UoYK:function(n,t,o){"use strict";o.r(t),o.d(t,"AboutPageModule",(function(){return y}));var i=o("tyNb"),e=o("mrSG"),c=o("NV1z"),a=o("uJRU"),b=o("gNTI"),r=o("k/bs"),s=o("fXoL"),l=o("TEn/"),u=o("ofXK"),p=o("sYmb");const g=function(n){return[n]};function f(n,t){if(1&n&&(s.Vb(0,"ion-item",15),s.Vb(1,"ion-label"),s.Vb(2,"p",16),s.Fc(3),s.Ub(),s.Ub(),s.Ub()),2&n){const n=t.$implicit;s.mc("routerLink",s.qc(2,g,"../pages/"+n.slug)),s.Cb(3),s.Gc(n.title)}}function h(n,t){if(1&n&&(s.Vb(0,"ion-col",9),s.Vb(1,"div",10),s.Vb(2,"h5",7),s.Fc(3),s.hc(4,"translate"),s.Ub(),s.Ub(),s.Dc(5,f,4,4,"ion-item",14),s.Ub()),2&n){const n=s.gc(2);s.Cb(3),s.Gc(s.ic(4,2,"HELP")),s.Cb(2),s.mc("ngForOf",n.pages)}}function d(n,t){if(1&n){const n=s.Wb();s.Vb(0,"ion-item",17),s.dc("click",(function(){s.wc(n);const t=s.gc(2);return t.openUrl("mailto:"+t.appConfig.about.email)})),s.Qb(1,"ion-icon",18),s.Vb(2,"ion-label"),s.Vb(3,"p",16),s.Fc(4),s.Ub(),s.Ub(),s.Ub()}if(2&n){const n=s.gc(2);s.Cb(4),s.Gc(null==n.appConfig||null==n.appConfig.about?null:n.appConfig.about.email)}}function C(n,t){if(1&n){const n=s.Wb();s.Vb(0,"ion-item",17),s.dc("click",(function(){s.wc(n);const t=s.gc(2);return t.openUrl("tel:"+t.appConfig.about.phone)})),s.Qb(1,"ion-icon",19),s.Vb(2,"ion-label"),s.Vb(3,"p",16),s.Fc(4),s.Ub(),s.Ub(),s.Ub()}if(2&n){const n=s.gc(2);s.Cb(4),s.Gc(null==n.appConfig||null==n.appConfig.about?null:n.appConfig.about.phone)}}function m(n,t){if(1&n){const n=s.Wb();s.Vb(0,"ion-item",17),s.dc("click",(function(){s.wc(n);const t=s.gc(2);return t.openUrl(t.appConfig.about.facebook)})),s.Qb(1,"ion-icon",20),s.Vb(2,"ion-label"),s.Vb(3,"p",16),s.Fc(4),s.hc(5,"translate"),s.Ub(),s.Ub(),s.Ub()}2&n&&(s.Cb(4),s.Gc(s.ic(5,1,"FACEBOOK")))}function U(n,t){if(1&n){const n=s.Wb();s.Vb(0,"ion-item",17),s.dc("click",(function(){s.wc(n);const t=s.gc(2);return t.openUrl(t.appConfig.about.youtube)})),s.Qb(1,"ion-icon",21),s.Vb(2,"ion-label"),s.Vb(3,"p",16),s.Fc(4),s.hc(5,"translate"),s.Ub(),s.Ub(),s.Ub()}2&n&&(s.Cb(4),s.Gc(s.ic(5,1,"YOUTUBE")))}function V(n,t){if(1&n){const n=s.Wb();s.Vb(0,"ion-item",17),s.dc("click",(function(){s.wc(n);const t=s.gc(2);return t.openUrl(t.appConfig.about.instagram)})),s.Qb(1,"ion-icon",22),s.Vb(2,"ion-label"),s.Vb(3,"p",16),s.Fc(4),s.hc(5,"translate"),s.Ub(),s.Ub(),s.Ub()}2&n&&(s.Cb(4),s.Gc(s.ic(5,1,"INSTAGRAM")))}function v(n,t){if(1&n&&(s.Vb(0,"ion-row"),s.Vb(1,"ion-col",9),s.Vb(2,"div",10),s.Vb(3,"h5",7),s.Fc(4),s.hc(5,"translate"),s.Ub(),s.Ub(),s.Qb(6,"div",11),s.Ub(),s.Dc(7,h,6,4,"ion-col",12),s.Vb(8,"ion-col",9),s.Vb(9,"div"),s.Vb(10,"div",10),s.Vb(11,"h5",7),s.Fc(12),s.hc(13,"translate"),s.Ub(),s.Ub(),s.Dc(14,d,5,1,"ion-item",13),s.Dc(15,C,5,1,"ion-item",13),s.Dc(16,m,6,3,"ion-item",13),s.Dc(17,U,6,3,"ion-item",13),s.Dc(18,V,6,3,"ion-item",13),s.Ub(),s.Ub(),s.Ub()),2&n){const n=s.gc();s.Cb(4),s.Gc(s.ic(5,9,"ABOUT_US")),s.Cb(2),s.mc("innerHTML",n.about,s.xc),s.Cb(1),s.mc("ngIf",n.pages.length),s.Cb(5),s.Gc(s.ic(13,11,"CONTACT_US")),s.Cb(2),s.mc("ngIf",null==n.appConfig||null==n.appConfig.about?null:n.appConfig.about.email),s.Cb(1),s.mc("ngIf",null==n.appConfig||null==n.appConfig.about?null:n.appConfig.about.phone),s.Cb(1),s.mc("ngIf",null==n.appConfig||null==n.appConfig.about?null:n.appConfig.about.facebook),s.Cb(1),s.mc("ngIf",null==n.appConfig||null==n.appConfig.about?null:n.appConfig.about.youtube),s.Cb(1),s.mc("ngIf",null==n.appConfig||null==n.appConfig.about?null:n.appConfig.about.instagram)}}let w=(()=>{class n extends c.a{constructor(n,t,o,i){super(n),this.appVersion=t,this.pageService=o,this.appConfigService=i,this.pages=[]}enableMenuSwipe(){return!1}ngOnInit(){this.showLoadingView({showOverlay:!1}),this.loadAppVersion(),this.loadData()}ionViewDidEnter(){return Object(e.a)(this,void 0,void 0,(function*(){const n=yield this.getTrans("SUPPORT");this.setPageTitle(n),this.setMetaTags({title:n})}))}loadAppVersion(){return Object(e.a)(this,void 0,void 0,(function*(){try{this.version=yield this.appVersion.getVersionNumber()}catch(n){console.log(n)}}))}loadData(){return Object(e.a)(this,void 0,void 0,(function*(){try{const n=this.appConfigService.load(),t=this.pageService.load(),[o,i]=yield Promise.all([n,t]);o.about&&o.about.description&&(this.about=this.sanitizer.bypassSecurityTrustHtml(o.about.description)),this.appConfig=o,this.pages=i,this.showContentView()}catch(n){this.translate.get("ERROR_NETWORK").subscribe(n=>this.showToast(n)),this.showContentView()}}))}}return n.\u0275fac=function(t){return new(t||n)(s.Pb(s.r),s.Pb(a.a),s.Pb(r.a),s.Pb(b.a))},n.\u0275cmp=s.Jb({type:n,selectors:[["page-about"]],features:[s.zb],decls:19,vars:8,consts:[[1,"ion-no-border"],["fixed",""],["slot","start"],[1,"ion-justify-content-center"],["size-xs","12"],[1,"flex","center","align-items-center","logo-container","ion-text-center"],["src","./assets/imgs/icon.png","width","120",1,"logo"],[1,"bold"],[4,"ngIf"],["size-xs","12","size-md","4",1,"ion-padding"],[1,"ion-text-center","ion-text-uppercase"],[1,"text-normal","ion-margin-vertical","ion-text-justify",2,"line-height","1.5",3,"innerHTML"],["size-xs","12","size-md","4","class","ion-padding",4,"ngIf"],["button","",3,"click",4,"ngIf"],["style","--background-hover: transparent",3,"routerLink",4,"ngFor","ngForOf"],[2,"--background-hover","transparent",3,"routerLink"],[1,"link"],["button","",3,"click"],["name","mail","slot","start"],["name","call","slot","start"],["name","logo-facebook","color","fb","slot","start"],["name","logo-youtube","color","youtube","slot","start"],["name","logo-instagram","color","instagram","slot","start"]],template:function(n,t){1&n&&(s.Vb(0,"ion-header",0),s.Vb(1,"ion-toolbar",1),s.Vb(2,"ion-buttons",2),s.Qb(3,"ion-back-button"),s.Ub(),s.Vb(4,"ion-title"),s.Fc(5),s.hc(6,"translate"),s.Ub(),s.Ub(),s.Ub(),s.Vb(7,"ion-content"),s.Vb(8,"ion-grid",1),s.Vb(9,"ion-row",3),s.Vb(10,"ion-col",4),s.Vb(11,"div",5),s.Qb(12,"img",6),s.Vb(13,"h1",7),s.Fc(14),s.hc(15,"translate"),s.Ub(),s.Vb(16,"h3"),s.Fc(17),s.Ub(),s.Ub(),s.Dc(18,v,19,13,"ion-row",8),s.Ub(),s.Ub(),s.Ub(),s.Ub()),2&n&&(s.Cb(5),s.Hc(" ",s.ic(6,4,"SUPPORT")," "),s.Cb(9),s.Gc(s.ic(15,6,"APP_NAME")),s.Cb(3),s.Gc(t.version),s.Cb(1),s.mc("ngIf",t.isContentViewVisible))},directives:[l.s,l.Y,l.k,l.g,l.h,l.W,l.p,l.r,l.J,l.o,u.l,u.k,l.x,l.gb,i.h,l.z,l.t],pipes:[p.c],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-grid[_ngcontent-%COMP%]{background:#fff}.logo-container[_ngcontent-%COMP%]{height:200px}"]}),n})();var k=o("d2mR");let y=(()=>{class n{}return n.\u0275mod=s.Nb({type:n}),n.\u0275inj=s.Mb({factory:function(t){return new(t||n)},imports:[[k.a,i.i.forChild([{path:"",component:w}])]]}),n})()},gNTI:function(n,t,o){"use strict";o.d(t,"a",(function(){return c}));var i=o("v0iw"),e=o("fXoL");let c=(()=>{class n extends i.Object{constructor(){super("AppConfig")}load(){return i.Cloud.run("getAppConfig")}get about(){return this.get("about")}get admin(){return this.get("admin")}get layout(){return this.get("layout")}get auth(){return this.get("auth")}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Lb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();i.Object.registerSubclass("AppConfig",c)}}]);