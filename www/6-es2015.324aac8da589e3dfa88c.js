(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{gNTI:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("v0iw"),o=n("fXoL");let c=(()=>{class t extends i.Object{constructor(){super("AppConfig")}load(){return i.Cloud.run("getAppConfig")}get about(){return this.get("about")}get admin(){return this.get("admin")}get layout(){return this.get("layout")}get auth(){return this.get("auth")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();i.Object.registerSubclass("AppConfig",c)},u7ds:function(t,e,n){"use strict";n.r(e),n.d(e,"CategoryListPageModule",(function(){return F}));var i=n("tyNb"),o=n("mrSG"),c=n("TEn/"),a=n("4+uF"),r=n("NV1z"),s=n("eijT"),l=n("XNiG"),g=n("VRyK"),u=n("62S+"),b=n("R0Ic"),d=n("gNTI"),h=n("fXoL"),m=n("ofXK"),f=n("4ro/"),p=n("wf0l"),y=n("sYmb");function v(t,e){if(1&t){const t=h.Wb();h.Vb(0,"ion-item",18),h.dc("click",(function(){h.wc(t);const n=e.$implicit;return h.gc(3).onSuggestionTouched(n)})),h.Vb(1,"ion-label"),h.Vb(2,"ion-text",19),h.Vb(3,"span",20),h.Fc(4),h.Ub(),h.Ub(),h.Ub(),h.Ub()}if(2&t){const t=e.$implicit;h.Cb(4),h.Hc(" ",t.name," ")}}function C(t,e){if(1&t&&(h.Vb(0,"ion-list",16),h.Dc(1,v,5,1,"ion-item",17),h.Ub()),2&t){const t=h.gc(2);h.mc("@staggerIn",t.suggestions.length),h.Cb(1),h.mc("ngForOf",t.suggestions)}}function w(t,e){if(1&t&&(h.Vb(0,"ion-grid",14),h.Dc(1,C,2,2,"ion-list",15),h.Ub()),2&t){const t=h.gc();h.Cb(1),h.mc("ngIf",t.suggestions.length)}}function O(t,e){1&t&&(h.Vb(0,"div",21),h.Qb(1,"ion-spinner"),h.Ub())}function V(t,e){1&t&&(h.Qb(0,"empty-view",22),h.hc(1,"translate")),2&t&&h.mc("text",h.ic(1,1,"ERROR_DATA"))}function x(t,e){1&t&&(h.Qb(0,"empty-view",22),h.hc(1,"translate")),2&t&&h.mc("text",h.ic(1,1,"EMPTY_DATA"))}function T(t,e){if(1&t){const t=h.Wb();h.Vb(0,"ion-col",29),h.dc("click",(function(){h.wc(t);const n=e.$implicit;return h.gc(2).goToSubCategoryPage(n)})),h.Qb(1,"div",30),h.Vb(2,"ion-text",19),h.Vb(3,"p",31),h.Fc(4),h.Ub(),h.Ub(),h.Ub()}if(2&t){const t=e.$implicit,n=h.gc(2);h.Cb(1),h.mc("lazyLoad",null==t.imageThumb?null:t.imageThumb.url())("customObservable",n.loadAndScroll),h.Cb(3),h.Hc(" ",t.name," ")}}function k(t,e){if(1&t){const t=h.Wb();h.Vb(0,"ion-row",23),h.Vb(1,"ion-col",24),h.Vb(2,"div",25),h.dc("click",(function(){return h.wc(t),h.gc().onViewAll()})),h.Vb(3,"div",26),h.Vb(4,"p",27),h.Fc(5),h.hc(6,"translate"),h.Ub(),h.Ub(),h.Ub(),h.Ub(),h.Dc(7,T,5,3,"ion-col",28),h.Ub()}if(2&t){const t=h.gc();h.mc("@staggerIn",t.categories.length),h.Cb(5),h.Gc(h.ic(6,4,"VIEW_ALL")),h.Cb(2),h.mc("ngForOf",t.categories)("ngForTrackBy",t.trackByFn)}}function P(t,e){if(1&t&&(h.Vb(0,"ion-text",40),h.Vb(1,"h5",27),h.Fc(2),h.Ub(),h.Ub()),2&t){const t=h.gc().$implicit,e=h.gc(2);h.Cb(1),h.Cc("font-size",null==e.layout||null==e.layout.item?null:e.layout.item.fontSize),h.Cb(1),h.Hc(" ",t.name," ")}}function U(t,e){if(1&t){const t=h.Wb();h.Vb(0,"ion-col"),h.Vb(1,"div",34),h.dc("click",(function(){h.wc(t);const n=e.$implicit;return h.gc(2).goToSubCategoryPage(n)})),h.Vb(2,"div",35),h.Qb(3,"div",36),h.Vb(4,"div",37),h.Dc(5,P,3,3,"ion-text",38),h.Ub(),h.Ub(),h.Qb(6,"ion-ripple-effect",39),h.Ub(),h.Ub()}if(2&t){const t=e.$implicit,n=h.gc(2);h.Db("size-xs",12/(null==n.layout||null==n.layout.item?null:n.layout.item.columnsXs))("size-md",12/(null==n.layout||null==n.layout.item?null:n.layout.item.columnsMd))("size-lg",12/(null==n.layout||null==n.layout.item?null:n.layout.item.columnsLg)),h.Cb(2),h.Cc("box-shadow",null==n.layout||null==n.layout.item?null:n.layout.item.boxShadow)("margin",null==n.layout||null==n.layout.item?null:n.layout.item.margin)("height",null==n.layout||null==n.layout.item?null:n.layout.item.height)("border-radius",null==n.layout||null==n.layout.item?null:n.layout.item.radius),h.Cb(1),h.mc("lazyLoad",null==t.image?null:t.image.url())("customObservable",n.loadAndScroll),h.Cb(2),h.mc("ngIf",!(null!=n.layout&&null!=n.layout.item&&n.layout.item.hideTitle))}}function I(t,e){if(1&t&&(h.Vb(0,"ion-row",32),h.Dc(1,U,7,14,"ion-col",33),h.Ub()),2&t){const t=h.gc();h.mc("@staggerIn",t.categories.length),h.Cb(1),h.mc("ngForOf",t.categories)("ngForTrackBy",t.trackByFn)}}let R=(()=>{class t extends r.a{constructor(t,e,n,i,o){super(t),this.categoryService=e,this.itemService=n,this.appConfigService=i,this.subCategoryService=o,this.categories=[],this.params={},this.skeletonArray=Array(32),this.suggestions=[]}onFocus(){this.onContentLoaded()}enableMenuSwipe(){return!1}ngOnInit(){this.setupObservable()}ionViewWillEnter(){this.container&&this.container.scrollToTop()}ionViewDidEnter(){return Object(o.a)(this,void 0,void 0,(function*(){this.categories.length?this.onContentLoaded():(yield this.showLoadingView({showOverlay:!1}),this.loadData());const t=yield this.getTrans("CATEGORIES");this.setPageTitle(t),this.setMetaTags({title:t})}))}setupObservable(){this.contentLoaded=new l.a,this.loadAndScroll=Object(g.a)(this.container.ionScroll,this.contentLoaded)}onContentLoaded(){setTimeout(()=>{this.contentLoaded.next()},400)}loadData(t={}){var e;return Object(o.a)(this,void 0,void 0,(function*(){this.refresher=t.target;try{const t=yield this.appConfigService.load();this.layout=null===(e=null==t?void 0:t.layout)||void 0===e?void 0:e.categoryList,this.categories=yield this.categoryService.load(this.params),this.categories.length?this.showContentView():this.showEmptyView(),this.onRefreshComplete(),this.onContentLoaded()}catch(n){this.translate.get("ERROR_NETWORK").subscribe(t=>this.showToast(t)),this.onRefreshComplete(),this.showErrorView()}}))}isPathFromHome(){return"/1/home/categories"===this.router.url}onViewAll(){const t=this.isPathFromHome()?"../":"./";this.navigateToRelative(t+"items")}onSuggestionTouched(t){this.suggestions=[];const e=this.isPathFromHome()?"../":"./";this.navigateToRelative(e+"items/"+t.slug)}goToSubCategoryPage(t){return Object(o.a)(this,void 0,void 0,(function*(){const e=this.isPathFromHome()?"../":"./";try{t.subCategoryCount>0?this.navigateToRelative(e+"subcategories",{categoryId:t.id}):0===t.subCategoryCount?this.navigateToRelative(e+"items",{cat:t.id}):(yield this.showLoadingView({showOverlay:!1}),(yield this.subCategoryService.count({category:t}))?this.navigateToRelative(e+"subcategories",{categoryId:t.id}):this.navigateToRelative(e+"items",{cat:t.id}),this.showContentView())}catch(n){this.showContentView(),this.translate.get("ERROR_NETWORK").subscribe(t=>this.showToast(t))}}))}onSearch(t={}){return Object(o.a)(this,void 0,void 0,(function*(){const e=t.target.value;if(e)try{this.suggestions=yield this.itemService.load({tag:e.toLowerCase(),limit:10})}catch(n){console.log(n.message)}}))}onClearSearch(){return Object(o.a)(this,void 0,void 0,(function*(){this.suggestions=[]}))}trackByFn(t,e){return e?e.id:null}}return t.\u0275fac=function(e){return new(e||t)(h.Pb(h.r),h.Pb(a.a),h.Pb(u.a),h.Pb(d.a),h.Pb(s.a))},t.\u0275cmp=h.Jb({type:t,selectors:[["page-category-list"]],viewQuery:function(t,e){var n;1&t&&h.Bc(c.p,!0),2&t&&h.tc(n=h.ec())&&(e.container=n.first)},hostBindings:function(t,e){1&t&&h.dc("focus",(function(){return e.onFocus()}),!1,h.vc)},features:[h.zb],decls:21,vars:15,consts:[[1,"ion-no-border"],["fixed",""],["slot","start"],["mode","ios",3,"placeholder","ionClear","ionChange"],["scrollEvents","true"],["container",""],["slot","fixed",3,"ionRefresh"],[3,"pullingText","refreshingText"],["slot","fixed",2,"left","16px","right","16px"],["class","relative","fixed","",4,"ngIf"],["class","ion-text-center",4,"ngIf"],["icon","alert-circle-outline",3,"text",4,"ngIf"],["class","ion-margin-vertical",4,"ngIf"],["class","ion-margin-vertical ion-padding",4,"ngIf"],["fixed","",1,"relative"],["lines","none","class","ion-no-margin","class","shadow autocomplete",4,"ngIf"],["lines","none",1,"shadow","autocomplete"],["class","hover","button","","detail","false","style","--min-height: 70px;",3,"click",4,"ngFor","ngForOf"],["button","","detail","false",1,"hover",2,"--min-height","70px",3,"click"],["color","dark"],[1,"link","bold","text-medium"],[1,"ion-text-center"],["icon","alert-circle-outline",3,"text"],[1,"ion-margin-vertical"],["size-xs","3",1,"ion-text-center"],[1,"circle","dark-bg",3,"click"],[1,"circle-inner"],[1,"bold","link"],["size-xs","3","class","ion-text-center",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],["size-xs","3",1,"ion-text-center",3,"click"],["defaultImage","./assets/imgs/placeholder.png",1,"circle","bg-img",3,"lazyLoad","customObservable"],[1,"link","margin-6","text-medium"],[1,"ion-margin-vertical","ion-padding"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"ion-activatable","full-width",3,"click"],[1,"card"],["defaultImage","./assets/imgs/placeholder.png",1,"bg-img",3,"lazyLoad","customObservable"],[1,"content"],["color","light",4,"ngIf"],["type","bounded"],["color","light"]],template:function(t,e){1&t&&(h.Vb(0,"ion-header",0),h.Vb(1,"ion-toolbar",1),h.Vb(2,"ion-buttons",2),h.Qb(3,"ion-back-button"),h.Ub(),h.Vb(4,"div"),h.Vb(5,"ion-searchbar",3),h.dc("ionClear",(function(){return e.onClearSearch()}))("ionChange",(function(t){return e.onSearch(t)})),h.hc(6,"translate"),h.Ub(),h.Ub(),h.Ub(),h.Ub(),h.Vb(7,"ion-content",4,5),h.Vb(9,"ion-refresher",6),h.dc("ionRefresh",(function(t){return e.loadData(t)})),h.Qb(10,"ion-refresher-content",7),h.hc(11,"translate"),h.hc(12,"translate"),h.Ub(),h.Vb(13,"div",8),h.Dc(14,w,2,1,"ion-grid",9),h.Ub(),h.Vb(15,"ion-grid",1),h.Dc(16,O,2,0,"div",10),h.Dc(17,V,2,3,"empty-view",11),h.Dc(18,x,2,3,"empty-view",11),h.Dc(19,k,8,6,"ion-row",12),h.Dc(20,I,2,3,"ion-row",13),h.Ub(),h.Ub()),2&t&&(h.Cb(5),h.mc("placeholder",h.ic(6,9,"SEARCH_PLACEHOLDER")),h.Cb(5),h.nc("pullingText",h.ic(11,11,"PULL_TO_REFRESH")),h.nc("refreshingText",h.ic(12,13,"REFRESHING")),h.Cb(4),h.mc("ngIf",e.suggestions.length),h.Cb(2),h.mc("ngIf",e.isLoadingViewVisible),h.Cb(1),h.mc("ngIf",e.isErrorViewVisible),h.Cb(1),h.mc("ngIf",e.isEmptyViewVisible),h.Cb(1),h.mc("ngIf",e.isContentViewVisible&&!(null!=e.layout&&e.layout.enabled)),h.Cb(1),h.mc("ngIf",e.isContentViewVisible&&(null==e.layout?null:e.layout.enabled)))},directives:[c.s,c.Y,c.k,c.g,c.h,c.K,c.ib,c.p,c.F,c.G,m.l,c.r,c.A,m.k,c.x,c.z,c.T,c.P,f.a,c.J,c.o,p.a,c.H],pipes:[y.c],styles:['ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-grid[_ngcontent-%COMP%]{background:#fff}ion-searchbar[_ngcontent-%COMP%]{padding:0 8px!important}ion-buttons[_ngcontent-%COMP%]{align-self:center}.card[_ngcontent-%COMP%]{height:200px;position:relative;overflow:hidden}.card[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]{background-size:cover;background-position:50%;position:absolute;top:0;bottom:0;left:0;right:0}.card[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]:after{content:"";position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.3)}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;align-self:center;justify-content:center;padding:10px;text-align:center;height:100%}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{z-index:1}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--ion-color-primary),var(--ion-color-primary-tint));border-radius:16px;padding:4px 16px}@media (min-width:992px){ion-col[_ngcontent-%COMP%]{margin:16px 0}}'],data:{animation:[Object(b.l)("staggerIn",[Object(b.k)("* => *",[Object(b.f)(":enter",Object(b.j)({opacity:0,transform:"translate3d(0,10px,0)"}),{optional:!0}),Object(b.f)(":enter",Object(b.h)("40ms",[Object(b.e)("100ms",Object(b.j)({opacity:1,transform:"translate3d(0,0,0)"}))]),{optional:!0})])])]}}),t})();var S=n("d2mR");let F=(()=>{class t{}return t.\u0275mod=h.Nb({type:t}),t.\u0275inj=h.Mb({factory:function(e){return new(e||t)},imports:[[i.i.forChild([{path:"",component:R}]),S.a]]}),t})()}}]);