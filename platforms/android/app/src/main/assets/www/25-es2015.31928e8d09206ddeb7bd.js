(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"4cyc":function(t,e,n){"use strict";n.r(e),n.d(e,"FavoritePageModule",(function(){return z}));var i=n("tyNb"),o=n("mrSG"),s=n("62S+"),r=n("NV1z"),c=n("XNiG"),a=n("VRyK"),l=n("TEn/"),h=n("R0Ic"),b=n("fXoL"),f=n("ofXK"),m=n("4ro/"),u=n("v5se"),g=n("xJkR"),d=n("sYmb");function p(t,e){1&t&&(b.Qb(0,"empty-view",12),b.hc(1,"translate")),2&t&&b.mc("text",b.ic(1,1,"ERROR_DATA"))}function w(t,e){1&t&&(b.Qb(0,"empty-view",13),b.hc(1,"translate")),2&t&&b.mc("text",b.ic(1,1,"EMPTY_DATA"))}const y=function(t){return[t]};function V(t,e){if(1&t&&(b.Vb(0,"ion-col",16),b.Qb(1,"app-shop-item",17),b.Ub()),2&t){const t=e.$implicit,n=b.gc(2);b.Cb(1),b.mc("item",t)("customObservable",n.loadAndScroll)("routerLink",b.qc(3,y,"./"+t.slug))}}function v(t,e){if(1&t){const t=b.Wb();b.Vb(0,"div"),b.Vb(1,"ion-list"),b.Vb(2,"ion-row"),b.Dc(3,V,2,5,"ion-col",14),b.Ub(),b.Ub(),b.Vb(4,"ion-infinite-scroll",15),b.dc("ionInfinite",(function(e){return b.wc(t),b.gc().onLoadMore(e)})),b.Qb(5,"ion-infinite-scroll-content"),b.Ub(),b.Ub()}if(2&t){const t=b.gc();b.Cb(1),b.mc("@staggerIn",t.items.length),b.Cb(2),b.mc("ngForOf",t.items)("ngForTrackBy",t.trackByFn)}}const O=function(){return{width:"100%",height:"240px","border-radius":"0"}};function x(t,e){1&t&&(b.Vb(0,"ion-col",20),b.Qb(1,"ngx-skeleton-loader",21),b.Ub()),2&t&&(b.Cb(1),b.mc("theme",b.pc(1,O)))}function C(t,e){if(1&t&&(b.Vb(0,"ion-row",18),b.Dc(1,x,2,2,"ion-col",19),b.Ub()),2&t){const t=b.gc();b.Cb(1),b.mc("ngForOf",t.skeletonArray)}}let R=(()=>{class t extends r.a{constructor(t,e){super(t),this.itemService=e,this.params={likes:!0,page:0,limit:40},this.items=[],this.skeletonArray=Array(12)}enableMenuSwipe(){return!0}ngOnInit(){this.contentLoaded=new c.a,this.loadAndScroll=Object(a.a)(this.content.ionScroll,this.contentLoaded)}ionViewDidEnter(){return Object(o.a)(this,void 0,void 0,(function*(){this.items.length||(this.showLoadingView({showOverlay:!1}),this.loadData());const t=yield this.getTrans("FAVORITES");this.setPageTitle(t),this.setMetaTags({title:t})}))}loadData(){return Object(o.a)(this,void 0,void 0,(function*(){try{const t=yield this.itemService.load(this.params);for(const e of t)this.items.push(e);this.items.length?this.showContentView():this.showEmptyView(),this.onRefreshComplete(t),setTimeout(()=>{this.contentLoaded.next()},400)}catch(t){this.items.length?this.showContentView():this.showErrorView(),this.onRefreshComplete(),this.translate.get("ERROR_NETWORK").subscribe(t=>this.showToast(t))}}))}onSearch(t={}){const e=t.target.value,n=e&&""!=e.trim()?e.toLowerCase():null;this.params.tag=n,this.params.page=0,this.items=[],this.showLoadingView({showOverlay:!1}),this.loadData()}onSearchCleared(){this.params.canonical="",this.params.page=0,this.items=[],this.showLoadingView({showOverlay:!1}),this.loadData()}onRefresh(t={}){this.refresher=t.target,this.items=[],this.params.page=0,this.loadData()}onLoadMore(t={}){this.infiniteScroll=t.target,this.params.page++,this.loadData()}trackByFn(t,e){return e?e.id:null}}return t.\u0275fac=function(e){return new(e||t)(b.Pb(b.r),b.Pb(s.a))},t.\u0275cmp=b.Jb({type:t,selectors:[["page-favorite"]],viewQuery:function(t,e){var n;1&t&&b.Bc(l.p,!0),2&t&&b.tc(n=b.ec())&&(e.content=n.first)},features:[b.zb],decls:16,vars:10,consts:[[1,"ion-no-border"],["fixed",""],["slot","start"],["mode","ios","placeholder","",3,"ionClear","keyup.enter"],["scrollEvents","true"],["container",""],["slot","fixed",3,"ionRefresh"],[3,"pullingText","refreshingText"],["icon","alert-circle-outline",3,"text",4,"ngIf"],["icon","heart-outline",3,"text",4,"ngIf"],[4,"ngIf"],["class","ion-justify-content-center",4,"ngIf"],["icon","alert-circle-outline",3,"text"],["icon","heart-outline",3,"text"],["size-xs","6","size-sm","4","size-md","4","size-lg","3",4,"ngFor","ngForOf","ngForTrackBy"],[3,"ionInfinite"],["size-xs","6","size-sm","4","size-md","4","size-lg","3"],[3,"item","customObservable","routerLink"],[1,"ion-justify-content-center"],["class","ion-text-center","size-xs","6","size-sm","4","size-md","4","size-lg","3",4,"ngFor","ngForOf"],["size-xs","6","size-sm","4","size-md","4","size-lg","3",1,"ion-text-center"],["count","1","appearance","circle",3,"theme"]],template:function(t,e){1&t&&(b.Vb(0,"ion-header",0),b.Vb(1,"ion-toolbar",1),b.Vb(2,"ion-buttons",2),b.Qb(3,"ion-back-button"),b.Ub(),b.Vb(4,"ion-searchbar",3),b.dc("ionClear",(function(){return e.onSearchCleared()}))("keyup.enter",(function(t){return e.onSearch(t)})),b.Ub(),b.Ub(),b.Ub(),b.Vb(5,"ion-content",4,5),b.Vb(7,"ion-refresher",6),b.dc("ionRefresh",(function(t){return e.onRefresh(t)})),b.Qb(8,"ion-refresher-content",7),b.hc(9,"translate"),b.hc(10,"translate"),b.Ub(),b.Vb(11,"ion-grid",1),b.Dc(12,p,2,3,"empty-view",8),b.Dc(13,w,2,3,"empty-view",9),b.Dc(14,v,6,3,"div",10),b.Dc(15,C,2,1,"ion-row",11),b.Ub(),b.Ub()),2&t&&(b.Cb(8),b.nc("pullingText",b.ic(9,6,"PULL_TO_REFRESH")),b.nc("refreshingText",b.ic(10,8,"REFRESHING")),b.Cb(4),b.mc("ngIf",e.isErrorViewVisible),b.Cb(1),b.mc("ngIf",e.isEmptyViewVisible),b.Cb(1),b.mc("ngIf",e.isContentViewVisible),b.Cb(1),b.mc("ngIf",e.isLoadingViewVisible))},directives:[l.s,l.Y,l.k,l.g,l.h,l.K,l.ib,l.p,l.F,l.G,l.r,f.l,m.a,l.A,l.J,f.k,l.u,l.v,l.o,u.a,i.h,l.gb,g.a],pipes:[d.c],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-grid[_ngcontent-%COMP%]{background:#fff}ion-searchbar[_ngcontent-%COMP%]{padding:0 8px!important}ion-buttons[_ngcontent-%COMP%]{align-self:center}"],data:{animation:[Object(h.l)("staggerIn",[Object(h.k)("* => *",[Object(h.f)(":enter",Object(h.j)({opacity:0,transform:"translate3d(0,10px,0)"}),{optional:!0}),Object(h.f)(":enter",Object(h.h)("100ms",[Object(h.e)("300ms",Object(h.j)({opacity:1,transform:"translate3d(0,0,0)"}))]),{optional:!0})])])]}}),t})();var k=n("d2mR");let z=(()=>{class t{}return t.\u0275mod=b.Nb({type:t}),t.\u0275inj=b.Mb({factory:function(e){return new(e||t)},imports:[[i.i.forChild([{path:"",component:R}]),k.a]]}),t})()}}]);