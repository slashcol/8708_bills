function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"4cyc":function(e,t,n){"use strict";n.r(t),n.d(t,"FavoritePageModule",(function(){return j}));var r=n("tyNb"),i=n("mrSG"),o=n("62S+"),a=n("NV1z"),s=n("XNiG"),c=n("VRyK"),u=n("TEn/"),l=n("R0Ic"),f=n("fXoL"),h=n("ofXK"),p=n("4ro/"),b=n("v5se"),d=n("xJkR"),g=n("sYmb");function m(e,t){1&e&&(f.Qb(0,"empty-view",12),f.hc(1,"translate")),2&e&&f.mc("text",f.ic(1,1,"ERROR_DATA"))}function y(e,t){1&e&&(f.Qb(0,"empty-view",13),f.hc(1,"translate")),2&e&&f.mc("text",f.ic(1,1,"EMPTY_DATA"))}var v=function(e){return[e]};function w(e,t){if(1&e&&(f.Vb(0,"ion-col",16),f.Qb(1,"app-shop-item",17),f.Ub()),2&e){var n=t.$implicit,r=f.gc(2);f.Cb(1),f.mc("item",n)("customObservable",r.loadAndScroll)("routerLink",f.qc(3,v,"./"+n.slug))}}function O(e,t){if(1&e){var n=f.Wb();f.Vb(0,"div"),f.Vb(1,"ion-list"),f.Vb(2,"ion-row"),f.Dc(3,w,2,5,"ion-col",14),f.Ub(),f.Ub(),f.Vb(4,"ion-infinite-scroll",15),f.dc("ionInfinite",(function(e){return f.wc(n),f.gc().onLoadMore(e)})),f.Qb(5,"ion-infinite-scroll-content"),f.Ub(),f.Ub()}if(2&e){var r=f.gc();f.Cb(1),f.mc("@staggerIn",r.items.length),f.Cb(2),f.mc("ngForOf",r.items)("ngForTrackBy",r.trackByFn)}}var _=function(){return{width:"100%",height:"240px","border-radius":"0"}};function k(e,t){1&e&&(f.Vb(0,"ion-col",20),f.Qb(1,"ngx-skeleton-loader",21),f.Ub()),2&e&&(f.Cb(1),f.mc("theme",f.pc(1,_)))}function C(e,t){if(1&e&&(f.Vb(0,"ion-row",18),f.Dc(1,k,2,2,"ion-col",19),f.Ub()),2&e){var n=f.gc();f.Cb(1),f.mc("ngForOf",n.skeletonArray)}}var R,V,x=((R=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){var i;return _classCallCheck(this,n),(i=t.call(this,e)).itemService=r,i.params={likes:!0,page:0,limit:40},i.items=[],i.skeletonArray=Array(12),i}return _createClass(n,[{key:"enableMenuSwipe",value:function(){return!0}},{key:"ngOnInit",value:function(){this.contentLoaded=new s.a,this.loadAndScroll=Object(c.a)(this.content.ionScroll,this.contentLoaded)}},{key:"ionViewDidEnter",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.items.length||(this.showLoadingView({showOverlay:!1}),this.loadData()),e.next=3,this.getTrans("FAVORITES");case 3:t=e.sent,this.setPageTitle(t),this.setMetaTags({title:t});case 5:case"end":return e.stop()}}),e,this)})))}},{key:"loadData",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.itemService.load(this.params);case 3:t=e.sent,n=_createForOfIteratorHelper(t);try{for(n.s();!(r=n.n()).done;)i=r.value,this.items.push(i)}catch(a){n.e(a)}finally{n.f()}this.items.length?this.showContentView():this.showEmptyView(),this.onRefreshComplete(t),setTimeout((function(){o.contentLoaded.next()}),400),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.items.length?this.showContentView():this.showErrorView(),this.onRefreshComplete(),this.translate.get("ERROR_NETWORK").subscribe((function(e){return o.showToast(e)}));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})))}},{key:"onSearch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target.value,n=t&&""!=t.trim()?t.toLowerCase():null;this.params.tag=n,this.params.page=0,this.items=[],this.showLoadingView({showOverlay:!1}),this.loadData()}},{key:"onSearchCleared",value:function(){this.params.canonical="",this.params.page=0,this.items=[],this.showLoadingView({showOverlay:!1}),this.loadData()}},{key:"onRefresh",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.refresher=e.target,this.items=[],this.params.page=0,this.loadData()}},{key:"onLoadMore",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.infiniteScroll=e.target,this.params.page++,this.loadData()}},{key:"trackByFn",value:function(e,t){return t?t.id:null}}]),n}(a.a)).\u0275fac=function(e){return new(e||R)(f.Pb(f.r),f.Pb(o.a))},R.\u0275cmp=f.Jb({type:R,selectors:[["page-favorite"]],viewQuery:function(e,t){var n;1&e&&f.Bc(u.p,!0),2&e&&f.tc(n=f.ec())&&(t.content=n.first)},features:[f.zb],decls:16,vars:10,consts:[[1,"ion-no-border"],["fixed",""],["slot","start"],["mode","ios","placeholder","",3,"ionClear","keyup.enter"],["scrollEvents","true"],["container",""],["slot","fixed",3,"ionRefresh"],[3,"pullingText","refreshingText"],["icon","alert-circle-outline",3,"text",4,"ngIf"],["icon","heart-outline",3,"text",4,"ngIf"],[4,"ngIf"],["class","ion-justify-content-center",4,"ngIf"],["icon","alert-circle-outline",3,"text"],["icon","heart-outline",3,"text"],["size-xs","6","size-sm","4","size-md","4","size-lg","3",4,"ngFor","ngForOf","ngForTrackBy"],[3,"ionInfinite"],["size-xs","6","size-sm","4","size-md","4","size-lg","3"],[3,"item","customObservable","routerLink"],[1,"ion-justify-content-center"],["class","ion-text-center","size-xs","6","size-sm","4","size-md","4","size-lg","3",4,"ngFor","ngForOf"],["size-xs","6","size-sm","4","size-md","4","size-lg","3",1,"ion-text-center"],["count","1","appearance","circle",3,"theme"]],template:function(e,t){1&e&&(f.Vb(0,"ion-header",0),f.Vb(1,"ion-toolbar",1),f.Vb(2,"ion-buttons",2),f.Qb(3,"ion-back-button"),f.Ub(),f.Vb(4,"ion-searchbar",3),f.dc("ionClear",(function(){return t.onSearchCleared()}))("keyup.enter",(function(e){return t.onSearch(e)})),f.Ub(),f.Ub(),f.Ub(),f.Vb(5,"ion-content",4,5),f.Vb(7,"ion-refresher",6),f.dc("ionRefresh",(function(e){return t.onRefresh(e)})),f.Qb(8,"ion-refresher-content",7),f.hc(9,"translate"),f.hc(10,"translate"),f.Ub(),f.Vb(11,"ion-grid",1),f.Dc(12,m,2,3,"empty-view",8),f.Dc(13,y,2,3,"empty-view",9),f.Dc(14,O,6,3,"div",10),f.Dc(15,C,2,1,"ion-row",11),f.Ub(),f.Ub()),2&e&&(f.Cb(8),f.nc("pullingText",f.ic(9,6,"PULL_TO_REFRESH")),f.nc("refreshingText",f.ic(10,8,"REFRESHING")),f.Cb(4),f.mc("ngIf",t.isErrorViewVisible),f.Cb(1),f.mc("ngIf",t.isEmptyViewVisible),f.Cb(1),f.mc("ngIf",t.isContentViewVisible),f.Cb(1),f.mc("ngIf",t.isLoadingViewVisible))},directives:[u.s,u.Y,u.k,u.g,u.h,u.K,u.ib,u.p,u.F,u.G,u.r,h.l,p.a,u.A,u.J,h.k,u.u,u.v,u.o,b.a,r.h,u.gb,d.a],pipes:[g.c],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-grid[_ngcontent-%COMP%]{background:#fff}ion-searchbar[_ngcontent-%COMP%]{padding:0 8px!important}ion-buttons[_ngcontent-%COMP%]{align-self:center}"],data:{animation:[Object(l.l)("staggerIn",[Object(l.k)("* => *",[Object(l.f)(":enter",Object(l.j)({opacity:0,transform:"translate3d(0,10px,0)"}),{optional:!0}),Object(l.f)(":enter",Object(l.h)("100ms",[Object(l.e)("300ms",Object(l.j)({opacity:1,transform:"translate3d(0,0,0)"}))]),{optional:!0})])])]}}),R),T=n("d2mR"),j=((V=function e(){_classCallCheck(this,e)}).\u0275mod=f.Nb({type:V}),V.\u0275inj=f.Mb({factory:function(e){return new(e||V)},imports:[[r.i.forChild([{path:"",component:x}]),T.a]]}),V)}}]);