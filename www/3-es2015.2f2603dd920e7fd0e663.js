(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{jroN:function(t,e,n){"use strict";n.r(e),n.d(e,"ReviewListPageModule",(function(){return j}));var i=n("tyNb"),o=n("mrSG"),r=n("oV1I"),a=n("62S+"),s=n("NV1z"),c=n("TEn/"),l=n("XNiG"),b=n("VRyK"),d=n("R0Ic"),h=n("fXoL"),g=n("ofXK"),m=n("4ro/"),p=n("xJkR"),u=n("wf0l"),f=n("MKfq"),w=n("sYmb"),v=n("eiOl");function V(t,e){1&t&&(h.Qb(0,"empty-view",13),h.hc(1,"translate")),2&t&&h.mc("text",h.ic(1,1,"ERROR_REVIEWS"))}function x(t,e){1&t&&(h.Qb(0,"empty-view",14),h.hc(1,"translate")),2&t&&h.mc("text",h.ic(1,1,"EMPTY_REVIEWS"))}const O=function(){return{width:"80px",height:"80px"}},C=function(){return{width:"30%","border-radius":"0",height:"15px","margin-bottom":"10px"}},y=function(){return{width:"70%","border-radius":"0",height:"15px"}};function U(t,e){1&t&&(h.Vb(0,"div",16),h.Vb(1,"div",17),h.Vb(2,"div",18),h.Qb(3,"ngx-skeleton-loader",19),h.Ub(),h.Vb(4,"div",20),h.Vb(5,"div"),h.Qb(6,"ngx-skeleton-loader",21),h.Ub(),h.Vb(7,"div"),h.Qb(8,"ngx-skeleton-loader",21),h.Ub(),h.Ub(),h.Ub(),h.Ub()),2&t&&(h.Cb(3),h.mc("theme",h.pc(3,O)),h.Cb(3),h.mc("theme",h.pc(4,C)),h.Cb(2),h.mc("theme",h.pc(5,y)))}function k(t,e){if(1&t&&(h.Vb(0,"section"),h.Dc(1,U,9,6,"div",15),h.Ub()),2&t){const t=h.gc();h.Cb(1),h.mc("ngForOf",t.skeletonReviews)}}function R(t,e){if(1&t&&(h.Vb(0,"div",24),h.Vb(1,"ion-item",25),h.Vb(2,"ion-avatar",2),h.Qb(3,"img",26),h.Ub(),h.Vb(4,"ion-label"),h.Vb(5,"ion-text",27),h.Vb(6,"p",28),h.Fc(7),h.hc(8,"translate"),h.Ub(),h.Ub(),h.Vb(9,"ion-text",29),h.Vb(10,"p",30),h.Fc(11),h.hc(12,"dateGlobal"),h.Ub(),h.Ub(),h.Qb(13,"bar-rating",31),h.Ub(),h.Ub(),h.Vb(14,"div"),h.Vb(15,"ion-text",27),h.Vb(16,"p",28),h.Fc(17),h.Ub(),h.Ub(),h.Ub(),h.Ub()),2&t){const t=e.$implicit,n=h.gc(2);h.Cb(3),h.mc("lazyLoad",null==t.user||null==t.user.photo?null:t.user.photo.url())("customObservable",n.loadAndScroll),h.Cb(4),h.Hc(" ",(null==t.user?null:t.user.name)||h.ic(8,9,"GUEST")," "),h.Cb(4),h.Hc(" ",h.jc(12,11,t.createdAt,"mediumDate")," "),h.Cb(2),h.mc("rate",t.rating)("readOnly",!0)("max",5)("theme","stars"),h.Cb(4),h.Gc(t.comment)}}function I(t,e){if(1&t&&(h.Vb(0,"ion-list",22),h.Dc(1,R,18,14,"div",23),h.Ub()),2&t){const t=h.gc();h.mc("@staggerIn",t.reviews.length),h.Cb(1),h.mc("ngForOf",t.reviews)("ngForTrackBy",t.trackByFn)}}function E(t,e){if(1&t){const t=h.Wb();h.Vb(0,"ion-infinite-scroll",32),h.dc("ionInfinite",(function(e){return h.wc(t),h.gc().onLoadMore(e)})),h.Qb(1,"ion-infinite-scroll-content"),h.Ub()}}let M=(()=>{class t extends s.a{constructor(t,e){super(t),this.reviewService=e,this.reviews=[],this.params={},this.params=Object.assign({},this.getParams()),this.params.limit=20,this.params.page=0,this.skeletonReviews=Array(10)}enableMenuSwipe(){return!1}onContentLoaded(){setTimeout(()=>{this.contentLoaded.next()},400)}ionViewDidEnter(){return Object(o.a)(this,void 0,void 0,(function*(){if(this.contentLoaded=new l.a,this.loadAndScroll=Object(b.a)(this.content.ionScroll,this.contentLoaded),yield this.showLoadingView({showOverlay:!1}),this.params.itemId){this.params.item=yield this.loadItem();const t=yield this.getTrans("REVIEWS"),e=this.params.item.name+" - "+t;this.setPageTitle(e),this.setMetaTags({title:e})}this.loadData()}))}loadItem(){return Object(o.a)(this,void 0,void 0,(function*(){const t=new a.a;return t.id=this.params.itemId,yield t.fetch()}))}loadData(){return Object(o.a)(this,void 0,void 0,(function*(){try{const t=yield this.reviewService.load(this.params);for(let e of t)this.reviews.push(e);this.reviews.length?this.showContentView():this.showEmptyView(),this.onContentLoaded(),this.onRefreshComplete(t)}catch(t){this.reviews.length?this.showContentView():this.showErrorView(),this.onRefreshComplete();let e=yield this.getTrans("ERROR_NETWORK");this.showToast(e)}}))}onLoadMore(t={}){this.infiniteScroll=t.target,this.params.page++,this.loadData()}onReload(t={}){this.refresher=t.target,this.reviews=[],this.params.page=0,this.loadData()}trackByFn(t,e){return e?e.id:null}}return t.\u0275fac=function(e){return new(e||t)(h.Pb(h.r),h.Pb(r.a))},t.\u0275cmp=h.Jb({type:t,selectors:[["page-review-list"]],viewQuery:function(t,e){var n;1&t&&h.Lc(c.p,!0),2&t&&h.tc(n=h.ec())&&(e.content=n.first)},features:[h.zb],decls:17,vars:11,consts:[[1,"ion-no-border"],["fixed",""],["slot","start"],["scrollEvents","true"],["slot","fixed",3,"ionRefresh"],[3,"pullingText","refreshingText"],["icon","alert-circle-outline",3,"text",4,"ngIf"],["icon","star",3,"text",4,"ngIf"],[1,"ion-justify-content-center"],["size-xs","12","size-lg","10"],[4,"ngIf"],["lines","none",4,"ngIf"],[3,"ionInfinite",4,"ngIf"],["icon","alert-circle-outline",3,"text"],["icon","star",3,"text"],["class","skeleton-item light-bg radius",4,"ngFor","ngForOf"],[1,"skeleton-item","light-bg","radius"],[1,"wrapper"],[1,"avatar"],["appearance","circle",3,"theme"],[1,"title"],[3,"theme"],["lines","none"],["class","ion-margin-bottom ion-padding",4,"ngFor","ngForOf","ngForTrackBy"],[1,"ion-margin-bottom","ion-padding"],[1,"ion-no-padding"],["defaultImage","./assets/imgs/avatar.png",3,"lazyLoad","customObservable"],["color","dark"],[1,"no-margin"],["color","medium"],[1,"text-medium"],[3,"rate","readOnly","max","theme"],[3,"ionInfinite"]],template:function(t,e){1&t&&(h.Vb(0,"ion-header",0),h.Vb(1,"ion-toolbar",1),h.Vb(2,"ion-buttons",2),h.Qb(3,"ion-back-button"),h.Ub(),h.Ub(),h.Ub(),h.Vb(4,"ion-content",3),h.Vb(5,"ion-refresher",4),h.dc("ionRefresh",(function(t){return e.onReload(t)})),h.Qb(6,"ion-refresher-content",5),h.hc(7,"translate"),h.hc(8,"translate"),h.Ub(),h.Vb(9,"ion-grid",1),h.Dc(10,V,2,3,"empty-view",6),h.Dc(11,x,2,3,"empty-view",7),h.Vb(12,"ion-row",8),h.Vb(13,"ion-col",9),h.Dc(14,k,2,1,"section",10),h.Dc(15,I,2,3,"ion-list",11),h.Ub(),h.Ub(),h.Ub(),h.Dc(16,E,2,0,"ion-infinite-scroll",12),h.Ub()),2&t&&(h.Cb(6),h.nc("pullingText",h.ic(7,7,"PULL_TO_REFRESH")),h.nc("refreshingText",h.ic(8,9,"REFRESHING")),h.Cb(4),h.mc("ngIf",e.isErrorViewVisible),h.Cb(1),h.mc("ngIf",e.isEmptyViewVisible),h.Cb(3),h.mc("ngIf",e.isLoadingViewVisible),h.Cb(1),h.mc("ngIf",e.isContentViewVisible),h.Cb(1),h.mc("ngIf",e.isContentViewVisible))},directives:[c.s,c.Y,c.k,c.g,c.h,c.p,c.F,c.G,c.r,g.l,c.J,c.o,m.a,g.k,p.a,c.A,c.x,c.f,u.a,c.z,c.T,f.a,c.u,c.v],pipes:[w.c,v.a],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-grid[_ngcontent-%COMP%]{background:#fff}ion-avatar[_ngcontent-%COMP%]{margin:0 12px 0 0!important}ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background:var(--ion-color-dark)}.skeleton-item[_ngcontent-%COMP%]{width:auto;height:auto;margin:10px auto;padding:10px}.skeleton-item[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:inline-flex;width:100%;height:auto;flex:1}.skeleton-item[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:100px;height:90px}.skeleton-item[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;padding:10px;height:80px}"],data:{animation:[Object(d.l)("staggerIn",[Object(d.k)("* => *",[Object(d.f)(":enter",Object(d.j)({opacity:0,transform:"translate3d(0,10px,0)"}),{optional:!0}),Object(d.f)(":enter",Object(d.h)("100ms",[Object(d.e)("300ms",Object(d.j)({opacity:1,transform:"translate3d(0,0,0)"}))]),{optional:!0})])])]}}),t})();var P=n("d2mR");let j=(()=>{class t{}return t.\u0275mod=h.Nb({type:t}),t.\u0275inj=h.Mb({factory:function(e){return new(e||t)},imports:[[P.a,i.i.forChild([{path:"",component:M}])]]}),t})()}}]);