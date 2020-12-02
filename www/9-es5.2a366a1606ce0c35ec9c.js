function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{vuQK:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchPageModule",(function(){return j}));var r=n("tyNb"),i=n("mrSG"),o=n("TEn/"),c=n("NV1z"),s=n("62S+"),a=n("XNiG"),u=n("VRyK"),l=n("R0Ic"),f=n("fXoL"),b=n("ofXK"),h=n("4ro/"),p=n("v5se"),g=n("xJkR"),m=n("sYmb");function d(e,t){if(1&e){var n=f.Wb();f.Vb(0,"ion-buttons",11),f.Vb(1,"ion-button",12),f.dc("click",(function(){return f.wc(n),f.gc().goToCartPage()})),f.Qb(2,"ion-icon",13),f.Vb(3,"span"),f.Fc(4),f.Ub(),f.Ub(),f.Ub()}if(2&e){var r=f.gc();f.Cb(4),f.Gc(r.preference.cartCount)}}function v(e,t){1&e&&(f.Qb(0,"empty-view",14),f.hc(1,"translate")),2&e&&f.mc("text",f.ic(1,1,"ERROR_DATA"))}function y(e,t){1&e&&(f.Qb(0,"empty-view",15),f.hc(1,"translate")),2&e&&f.mc("text",f.ic(1,1,"EMPTY_DATA"))}var w=function(e){return[e]};function O(e,t){if(1&e&&(f.Vb(0,"ion-col",17),f.Qb(1,"app-shop-item",18),f.Ub()),2&e){var n=t.$implicit,r=f.gc(2);f.Cb(1),f.mc("item",n)("customObservable",r.loadAndScroll)("routerLink",f.qc(3,w,"/1/home/items/"+n.slug))}}function C(e,t){if(1&e&&(f.Vb(0,"ion-list"),f.Vb(1,"ion-row"),f.Dc(2,O,2,5,"ion-col",16),f.Ub(),f.Ub()),2&e){var n=f.gc();f.mc("@staggerIn",n.items.length),f.Cb(2),f.mc("ngForOf",n.items)("ngForTrackBy",n.trackByFn)}}var _=function(){return{width:"100%",height:"240px","border-radius":"0"}};function k(e,t){1&e&&(f.Vb(0,"ion-col",17),f.Qb(1,"ngx-skeleton-loader",20),f.Ub()),2&e&&(f.Cb(1),f.mc("theme",f.pc(1,_)))}function R(e,t){if(1&e&&(f.Vb(0,"ion-row"),f.Dc(1,k,2,2,"ion-col",19),f.Ub()),2&e){var n=f.gc();f.Cb(1),f.mc("ngForOf",n.skeletonArray)}}var P,V,x=((P=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){var i;return _classCallCheck(this,n),(i=t.call(this,e)).itemService=r,i.items=[],i.params={limit:100},i.skeletonArray=Array(32),i}return _createClass(n,[{key:"enableMenuSwipe",value:function(){return!1}},{key:"ngOnInit",value:function(){this.setupObservable(),this.subscribeToQueryParams()}},{key:"subscribeToQueryParams",value:function(){var e=this;this.activatedRoute.queryParams.subscribe((function(t){var n=t.q;n&&(e.searchTerm=n,e.params.tag=n.toLowerCase(),e.items=[],e.showLoadingView({showOverlay:!1}),e.loadData())}))}},{key:"setupObservable",value:function(){this.contentLoaded=new a.a,this.loadAndScroll=Object(u.a)(this.container.ionScroll,this.contentLoaded)}},{key:"onContentLoaded",value:function(){var e=this;setTimeout((function(){e.contentLoaded.next()}),600)}},{key:"ionViewDidEnter",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTrans("SEARCH");case 2:t=e.sent,this.setPageTitle(t),this.setMetaTags({title:t});case 4:case"end":return e.stop()}}),e,this)})))}},{key:"loadData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.refresher=e.target,t.next=4,this.itemService.load(this.params);case 4:this.items=t.sent,this.items.length?this.showContentView():this.showEmptyView(),this.onContentLoaded(),this.onRefreshComplete(this.items),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),this.showContentView(),this.onRefreshComplete(),this.translate.get("ERROR_NETWORK").subscribe((function(e){return n.showToast(e)}));case 13:case"end":return t.stop()}}),t,this,[[0,10]])})))}},{key:"onSearch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"Enter"===e.key&&this.navigateToRelative("./",{q:e.target.value})}},{key:"trackByFn",value:function(e,t){return t?t.id:null}}]),n}(c.a)).\u0275fac=function(e){return new(e||P)(f.Pb(f.r),f.Pb(s.a))},P.\u0275cmp=f.Jb({type:P,selectors:[["page-search"]],viewQuery:function(e,t){var n;1&e&&f.Bc(o.p,!0),2&e&&f.tc(n=f.ec())&&(t.container=n.first)},features:[f.zb],decls:17,vars:15,consts:[[1,"ion-no-border"],["fixed",""],["slot","start"],["mode","ios","showCancelButton","never",3,"placeholder","value","keyup"],["slot","end",4,"ngIf"],["scrollEvents","true"],["slot","fixed",3,"ionRefresh"],[3,"pullingText","refreshingText"],["icon","alert-circle-outline",3,"text",4,"ngIf"],["image","./assets/imgs/undraw_search.svg","imageWidth","100",3,"text",4,"ngIf"],[4,"ngIf"],["slot","end"],["fill","clear",3,"click"],["slot","start","name","cart"],["icon","alert-circle-outline",3,"text"],["image","./assets/imgs/undraw_search.svg","imageWidth","100",3,"text"],["size-xs","6","size-sm","4","size-md","4","size-lg","3",4,"ngFor","ngForOf","ngForTrackBy"],["size-xs","6","size-sm","4","size-md","4","size-lg","3"],[3,"item","customObservable","routerLink"],["size-xs","6","size-sm","4","size-md","4","size-lg","3",4,"ngFor","ngForOf"],["count","1","appearance","circle",3,"theme"]],template:function(e,t){1&e&&(f.Vb(0,"ion-header",0),f.Vb(1,"ion-toolbar",1),f.Vb(2,"ion-buttons",2),f.Qb(3,"ion-back-button"),f.Ub(),f.Vb(4,"ion-searchbar",3),f.dc("keyup",(function(e){return t.onSearch(e)})),f.hc(5,"translate"),f.Ub(),f.Dc(6,d,5,1,"ion-buttons",4),f.Ub(),f.Ub(),f.Vb(7,"ion-content",5),f.Vb(8,"ion-refresher",6),f.dc("ionRefresh",(function(e){return t.loadData(e)})),f.Qb(9,"ion-refresher-content",7),f.hc(10,"translate"),f.hc(11,"translate"),f.Ub(),f.Vb(12,"ion-grid",1),f.Dc(13,v,2,3,"empty-view",8),f.Dc(14,y,2,3,"empty-view",9),f.Dc(15,C,3,3,"ion-list",10),f.Dc(16,R,2,1,"ion-row",10),f.Ub(),f.Ub()),2&e&&(f.Cb(4),f.mc("placeholder",f.ic(5,9,"SEARCH_PLACEHOLDER"))("value",t.searchTerm),f.Cb(2),f.mc("ngIf",t.preference.cartCount),f.Cb(3),f.nc("pullingText",f.ic(10,11,"PULL_TO_REFRESH")),f.nc("refreshingText",f.ic(11,13,"REFRESHING")),f.Cb(4),f.mc("ngIf",t.isErrorViewVisible),f.Cb(1),f.mc("ngIf",t.isEmptyViewVisible),f.Cb(1),f.mc("ngIf",t.isContentViewVisible),f.Cb(1),f.mc("ngIf",t.isLoadingViewVisible))},directives:[o.s,o.Y,o.k,o.g,o.h,o.K,o.ib,b.l,o.p,o.F,o.G,o.r,o.j,o.t,h.a,o.A,o.J,b.k,o.o,p.a,r.h,o.gb,g.a],pipes:[m.c],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-grid[_ngcontent-%COMP%]{background:#fff}ion-searchbar[_ngcontent-%COMP%]{padding:0 8px!important}ion-buttons[_ngcontent-%COMP%]{align-self:center}"],data:{animation:[Object(l.l)("staggerIn",[Object(l.k)("* => *",[Object(l.f)(":enter",Object(l.j)({opacity:0,transform:"translate3d(0,10px,0)"}),{optional:!0}),Object(l.f)(":enter",Object(l.h)("100ms",[Object(l.e)("300ms",Object(l.j)({opacity:1,transform:"translate3d(0,0,0)"}))]),{optional:!0})])])]}}),P),T=n("d2mR"),j=((V=function e(){_classCallCheck(this,e)}).\u0275mod=f.Nb({type:V}),V.\u0275inj=f.Mb({factory:function(e){return new(e||V)},imports:[[r.i.forChild([{path:"",component:x}]),T.a]]}),V)}}]);