(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{oGhl:function(t,e,n){"use strict";n.r(e),n.d(e,"PageViewModule",(function(){return T}));var i=n("ofXK"),o=n("3Pt+"),c=n("tyNb"),r=n("TEn/"),s=n("mrSG"),a=n("k/bs"),b=n("NV1z"),l=n("fXoL"),u=n("4ro/"),h=n("xJkR"),g=n("sYmb");function d(t,e){1&t&&(l.Qb(0,"empty-view",7),l.hc(1,"translate")),2&t&&l.mc("text",l.ic(1,1,"EMPTY_DATA"))}function p(t,e){1&t&&(l.Qb(0,"empty-view",7),l.hc(1,"translate")),2&t&&l.mc("text",l.ic(1,1,"ERROR_NETWORK"))}const f=function(){return{"border-radius":"0",margin:"0 0 16px",height:"250px",width:"100%"}},m=function(){return{"border-radius":"0",height:"10px"}};function w(t,e){1&t&&(l.Vb(0,"div"),l.Qb(1,"ngx-skeleton-loader",8),l.Qb(2,"ngx-skeleton-loader",9),l.Ub()),2&t&&(l.Cb(1),l.mc("theme",l.pc(2,f)),l.Cb(1),l.mc("theme",l.pc(3,m)))}function V(t,e){if(1&t){const t=l.Wb();l.Vb(0,"div",13),l.dc("click",(function(e){return l.wc(t),l.gc(2).onContentTouched(e)})),l.Ub()}if(2&t){const t=l.gc(2);l.mc("innerHTML",t.content,l.xc)}}function v(t,e){if(1&t&&(l.Vb(0,"div"),l.Vb(1,"div",10),l.Vb(2,"h3",11),l.Fc(3),l.Ub(),l.Dc(4,V,1,1,"div",12),l.Ub(),l.Ub()),2&t){const t=l.gc();l.Cb(3),l.Gc(null==t.page?null:t.page.title),l.Cb(1),l.mc("ngIf",t.content)}}let y=(()=>{class t extends b.a{constructor(t,e){super(t),this.pageService=e}enableMenuSwipe(){return!0}ngOnInit(){}ionViewDidEnter(){return Object(s.a)(this,void 0,void 0,(function*(){yield this.showLoadingView({showOverlay:!1}),this.loadPage()}))}loadPage(){return Object(s.a)(this,void 0,void 0,(function*(){try{this.page=yield this.pageService.loadOne(this.getParams().id),this.page.content&&(this.content=this.sanitizer.bypassSecurityTrustHtml(this.page.content)),this.setPageTitle(this.page.title),this.setMetaTags({title:this.page.title}),this.showContentView()}catch(t){101===t.code?this.showEmptyView():this.showErrorView(),this.translate.get("ERROR_NETWORK").subscribe(t=>this.showToast(t))}}))}onContentTouched(t={}){const e=t.target.getAttribute("href");e&&(t.preventDefault(),this.openUrl(e))}}return t.\u0275fac=function(e){return new(e||t)(l.Pb(l.r),l.Pb(a.a))},t.\u0275cmp=l.Jb({type:t,selectors:[["app-page"]],features:[l.zb],decls:14,vars:5,consts:[[1,"ion-no-border"],["fixed",""],["slot","start"],["icon","alert-circle-outline",3,"text",4,"ngIf"],[1,"ion-justify-content-center"],["size-xs","12","size-lg","8"],[4,"ngIf"],["icon","alert-circle-outline",3,"text"],["count","1","appearance","circle",3,"theme"],["count","16",3,"theme"],[1,"ion-margin-top"],[1,"bold"],["class","html-content",3,"innerHTML","click",4,"ngIf"],[1,"html-content",3,"innerHTML","click"]],template:function(t,e){1&t&&(l.Vb(0,"ion-header",0),l.Vb(1,"ion-toolbar",1),l.Vb(2,"ion-buttons",2),l.Qb(3,"ion-back-button"),l.Ub(),l.Vb(4,"ion-title"),l.Fc(5),l.Ub(),l.Ub(),l.Ub(),l.Vb(6,"ion-content"),l.Vb(7,"ion-grid",1),l.Dc(8,d,2,3,"empty-view",3),l.Dc(9,p,2,3,"empty-view",3),l.Vb(10,"ion-row",4),l.Vb(11,"ion-col",5),l.Dc(12,w,3,4,"div",6),l.Dc(13,v,5,2,"div",6),l.Ub(),l.Ub(),l.Ub(),l.Ub()),2&t&&(l.Cb(5),l.Gc(null==e.page?null:e.page.title),l.Cb(3),l.mc("ngIf",e.isEmptyViewVisible),l.Cb(1),l.mc("ngIf",e.isErrorViewVisible),l.Cb(3),l.mc("ngIf",e.isLoadingViewVisible),l.Cb(1),l.mc("ngIf",e.isContentViewVisible))},directives:[r.s,r.Y,r.k,r.g,r.h,r.W,r.p,r.r,i.l,r.J,r.o,u.a,h.a],pipes:[g.c],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-grid[_ngcontent-%COMP%]{background:#fff}"]}),t})();var C=n("d2mR");const x=[{path:"",component:y}];let T=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(e){return new(e||t)},imports:[[i.c,o.e,r.Z,C.a,c.i.forChild(x)]]}),t})()}}]);