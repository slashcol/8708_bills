(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{vuQK:function(t,e,n){"use strict";n.r(e),n.d(e,"SearchPageModule",(function(){return E}));var i=n("tyNb"),o=n("mrSG"),s=n("TEn/"),r=n("NV1z"),c=n("62S+"),a=n("XNiG"),b=n("VRyK"),l=n("R0Ic"),h=n("fXoL"),u=n("ofXK"),m=n("4ro/"),g=n("v5se"),d=n("xJkR"),f=n("sYmb");function p(t,e){if(1&t){const t=h.Wb();h.Vb(0,"ion-buttons",11),h.Vb(1,"ion-button",12),h.dc("click",(function(){return h.wc(t),h.gc().goToCartPage()})),h.Qb(2,"ion-icon",13),h.Vb(3,"span"),h.Fc(4),h.Ub(),h.Ub(),h.Ub()}if(2&t){const t=h.gc();h.Cb(4),h.Gc(t.preference.cartCount)}}function w(t,e){1&t&&(h.Qb(0,"empty-view",14),h.hc(1,"translate")),2&t&&h.mc("text",h.ic(1,1,"ERROR_DATA"))}function v(t,e){1&t&&(h.Qb(0,"empty-view",15),h.hc(1,"translate")),2&t&&h.mc("text",h.ic(1,1,"EMPTY_DATA"))}const y=function(t){return[t]};function C(t,e){if(1&t&&(h.Vb(0,"ion-col",17),h.Qb(1,"app-shop-item",18),h.Ub()),2&t){const t=e.$implicit,n=h.gc(2);h.Cb(1),h.mc("item",t)("customObservable",n.loadAndScroll)("routerLink",h.qc(3,y,"/1/home/items/"+t.slug))}}function O(t,e){if(1&t&&(h.Vb(0,"ion-list"),h.Vb(1,"ion-row"),h.Dc(2,C,2,5,"ion-col",16),h.Ub(),h.Ub()),2&t){const t=h.gc();h.mc("@staggerIn",t.items.length),h.Cb(2),h.mc("ngForOf",t.items)("ngForTrackBy",t.trackByFn)}}const V=function(){return{width:"100%",height:"240px","border-radius":"0"}};function R(t,e){1&t&&(h.Vb(0,"ion-col",17),h.Qb(1,"ngx-skeleton-loader",20),h.Ub()),2&t&&(h.Cb(1),h.mc("theme",h.pc(1,V)))}function k(t,e){if(1&t&&(h.Vb(0,"ion-row"),h.Dc(1,R,2,2,"ion-col",19),h.Ub()),2&t){const t=h.gc();h.Cb(1),h.mc("ngForOf",t.skeletonArray)}}let T=(()=>{class t extends r.a{constructor(t,e){super(t),this.itemService=e,this.items=[],this.params={limit:100},this.skeletonArray=Array(32)}enableMenuSwipe(){return!1}ngOnInit(){this.setupObservable(),this.subscribeToQueryParams()}subscribeToQueryParams(){this.activatedRoute.queryParams.subscribe(t=>{const e=t.q;e&&(this.searchTerm=e,this.params.tag=e.toLowerCase(),this.items=[],this.showLoadingView({showOverlay:!1}),this.loadData())})}setupObservable(){this.contentLoaded=new a.a,this.loadAndScroll=Object(b.a)(this.container.ionScroll,this.contentLoaded)}onContentLoaded(){setTimeout(()=>{this.contentLoaded.next()},600)}ionViewDidEnter(){return Object(o.a)(this,void 0,void 0,(function*(){const t=yield this.getTrans("SEARCH");this.setPageTitle(t),this.setMetaTags({title:t})}))}loadData(t={}){return Object(o.a)(this,void 0,void 0,(function*(){try{this.refresher=t.target,this.items=yield this.itemService.load(this.params),this.items.length?this.showContentView():this.showEmptyView(),this.onContentLoaded(),this.onRefreshComplete(this.items)}catch(e){this.showContentView(),this.onRefreshComplete(),this.translate.get("ERROR_NETWORK").subscribe(t=>this.showToast(t))}}))}onSearch(t={}){"Enter"===t.key&&this.navigateToRelative("./",{q:t.target.value})}trackByFn(t,e){return e?e.id:null}}return t.\u0275fac=function(e){return new(e||t)(h.Pb(h.r),h.Pb(c.a))},t.\u0275cmp=h.Jb({type:t,selectors:[["page-search"]],viewQuery:function(t,e){var n;1&t&&h.Bc(s.p,!0),2&t&&h.tc(n=h.ec())&&(e.container=n.first)},features:[h.zb],decls:17,vars:15,consts:[[1,"ion-no-border"],["fixed",""],["slot","start"],["mode","ios","showCancelButton","never",3,"placeholder","value","keyup"],["slot","end",4,"ngIf"],["scrollEvents","true"],["slot","fixed",3,"ionRefresh"],[3,"pullingText","refreshingText"],["icon","alert-circle-outline",3,"text",4,"ngIf"],["image","./assets/imgs/undraw_search.svg","imageWidth","100",3,"text",4,"ngIf"],[4,"ngIf"],["slot","end"],["fill","clear",3,"click"],["slot","start","name","cart"],["icon","alert-circle-outline",3,"text"],["image","./assets/imgs/undraw_search.svg","imageWidth","100",3,"text"],["size-xs","6","size-sm","4","size-md","4","size-lg","3",4,"ngFor","ngForOf","ngForTrackBy"],["size-xs","6","size-sm","4","size-md","4","size-lg","3"],[3,"item","customObservable","routerLink"],["size-xs","6","size-sm","4","size-md","4","size-lg","3",4,"ngFor","ngForOf"],["count","1","appearance","circle",3,"theme"]],template:function(t,e){1&t&&(h.Vb(0,"ion-header",0),h.Vb(1,"ion-toolbar",1),h.Vb(2,"ion-buttons",2),h.Qb(3,"ion-back-button"),h.Ub(),h.Vb(4,"ion-searchbar",3),h.dc("keyup",(function(t){return e.onSearch(t)})),h.hc(5,"translate"),h.Ub(),h.Dc(6,p,5,1,"ion-buttons",4),h.Ub(),h.Ub(),h.Vb(7,"ion-content",5),h.Vb(8,"ion-refresher",6),h.dc("ionRefresh",(function(t){return e.loadData(t)})),h.Qb(9,"ion-refresher-content",7),h.hc(10,"translate"),h.hc(11,"translate"),h.Ub(),h.Vb(12,"ion-grid",1),h.Dc(13,w,2,3,"empty-view",8),h.Dc(14,v,2,3,"empty-view",9),h.Dc(15,O,3,3,"ion-list",10),h.Dc(16,k,2,1,"ion-row",10),h.Ub(),h.Ub()),2&t&&(h.Cb(4),h.mc("placeholder",h.ic(5,9,"SEARCH_PLACEHOLDER"))("value",e.searchTerm),h.Cb(2),h.mc("ngIf",e.preference.cartCount),h.Cb(3),h.nc("pullingText",h.ic(10,11,"PULL_TO_REFRESH")),h.nc("refreshingText",h.ic(11,13,"REFRESHING")),h.Cb(4),h.mc("ngIf",e.isErrorViewVisible),h.Cb(1),h.mc("ngIf",e.isEmptyViewVisible),h.Cb(1),h.mc("ngIf",e.isContentViewVisible),h.Cb(1),h.mc("ngIf",e.isLoadingViewVisible))},directives:[s.s,s.Y,s.k,s.g,s.h,s.K,s.ib,u.l,s.p,s.F,s.G,s.r,s.j,s.t,m.a,s.A,s.J,u.k,s.o,g.a,i.h,s.gb,d.a],pipes:[f.c],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-grid[_ngcontent-%COMP%]{background:#fff}ion-searchbar[_ngcontent-%COMP%]{padding:0 8px!important}ion-buttons[_ngcontent-%COMP%]{align-self:center}"],data:{animation:[Object(l.l)("staggerIn",[Object(l.k)("* => *",[Object(l.f)(":enter",Object(l.j)({opacity:0,transform:"translate3d(0,10px,0)"}),{optional:!0}),Object(l.f)(":enter",Object(l.h)("100ms",[Object(l.e)("300ms",Object(l.j)({opacity:1,transform:"translate3d(0,0,0)"}))]),{optional:!0})])])]}}),t})();var x=n("d2mR");let E=(()=>{class t{}return t.\u0275mod=h.Nb({type:t}),t.\u0275inj=h.Mb({factory:function(e){return new(e||t)},imports:[[i.i.forChild([{path:"",component:T}]),x.a]]}),t})()}}]);