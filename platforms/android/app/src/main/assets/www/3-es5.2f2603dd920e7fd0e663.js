function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{jroN:function(e,t,n){"use strict";n.r(t),n.d(t,"ReviewListPageModule",(function(){return S}));var r=n("tyNb"),i=n("mrSG"),o=n("oV1I"),a=n("62S+"),c=n("NV1z"),s=n("TEn/"),l=n("XNiG"),u=n("VRyK"),f=n("R0Ic"),b=n("fXoL"),p=n("ofXK"),h=n("4ro/"),d=n("xJkR"),g=n("wf0l"),m=n("MKfq"),v=n("sYmb"),y=n("eiOl");function w(e,t){1&e&&(b.Qb(0,"empty-view",13),b.hc(1,"translate")),2&e&&b.mc("text",b.ic(1,1,"ERROR_REVIEWS"))}function O(e,t){1&e&&(b.Qb(0,"empty-view",14),b.hc(1,"translate")),2&e&&b.mc("text",b.ic(1,1,"EMPTY_REVIEWS"))}var _=function(){return{width:"80px",height:"80px"}},x=function(){return{width:"30%","border-radius":"0",height:"15px","margin-bottom":"10px"}},C=function(){return{width:"70%","border-radius":"0",height:"15px"}};function V(e,t){1&e&&(b.Vb(0,"div",16),b.Vb(1,"div",17),b.Vb(2,"div",18),b.Qb(3,"ngx-skeleton-loader",19),b.Ub(),b.Vb(4,"div",20),b.Vb(5,"div"),b.Qb(6,"ngx-skeleton-loader",21),b.Ub(),b.Vb(7,"div"),b.Qb(8,"ngx-skeleton-loader",21),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&e&&(b.Cb(3),b.mc("theme",b.pc(3,_)),b.Cb(3),b.mc("theme",b.pc(4,x)),b.Cb(2),b.mc("theme",b.pc(5,C)))}function k(e,t){if(1&e&&(b.Vb(0,"section"),b.Dc(1,V,9,6,"div",15),b.Ub()),2&e){var n=b.gc();b.Cb(1),b.mc("ngForOf",n.skeletonReviews)}}function R(e,t){if(1&e&&(b.Vb(0,"div",24),b.Vb(1,"ion-item",25),b.Vb(2,"ion-avatar",2),b.Qb(3,"img",26),b.Ub(),b.Vb(4,"ion-label"),b.Vb(5,"ion-text",27),b.Vb(6,"p",28),b.Fc(7),b.hc(8,"translate"),b.Ub(),b.Ub(),b.Vb(9,"ion-text",29),b.Vb(10,"p",30),b.Fc(11),b.hc(12,"dateGlobal"),b.Ub(),b.Ub(),b.Qb(13,"bar-rating",31),b.Ub(),b.Ub(),b.Vb(14,"div"),b.Vb(15,"ion-text",27),b.Vb(16,"p",28),b.Fc(17),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&e){var n=t.$implicit,r=b.gc(2);b.Cb(3),b.mc("lazyLoad",null==n.user||null==n.user.photo?null:n.user.photo.url())("customObservable",r.loadAndScroll),b.Cb(4),b.Hc(" ",(null==n.user?null:n.user.name)||b.ic(8,9,"GUEST")," "),b.Cb(4),b.Hc(" ",b.jc(12,11,n.createdAt,"mediumDate")," "),b.Cb(2),b.mc("rate",n.rating)("readOnly",!0)("max",5)("theme","stars"),b.Cb(4),b.Gc(n.comment)}}function P(e,t){if(1&e&&(b.Vb(0,"ion-list",22),b.Dc(1,R,18,14,"div",23),b.Ub()),2&e){var n=b.gc();b.mc("@staggerIn",n.reviews.length),b.Cb(1),b.mc("ngForOf",n.reviews)("ngForTrackBy",n.trackByFn)}}function I(e,t){if(1&e){var n=b.Wb();b.Vb(0,"ion-infinite-scroll",32),b.dc("ionInfinite",(function(e){return b.wc(n),b.gc().onLoadMore(e)})),b.Qb(1,"ion-infinite-scroll-content"),b.Ub()}}var U,j,T=((U=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){var i;return _classCallCheck(this,n),(i=t.call(this,e)).reviewService=r,i.reviews=[],i.params={},i.params=Object.assign({},i.getParams()),i.params.limit=20,i.params.page=0,i.skeletonReviews=Array(10),i}return _createClass(n,[{key:"enableMenuSwipe",value:function(){return!1}},{key:"onContentLoaded",value:function(){var e=this;setTimeout((function(){e.contentLoaded.next()}),400)}},{key:"ionViewDidEnter",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.contentLoaded=new l.a,this.loadAndScroll=Object(u.a)(this.content.ionScroll,this.contentLoaded),e.next=4,this.showLoadingView({showOverlay:!1});case 4:if(!this.params.itemId){e.next=13;break}return e.next=7,this.loadItem();case 7:return this.params.item=e.sent,e.next=10,this.getTrans("REVIEWS");case 10:t=e.sent,n=this.params.item.name+" - "+t,this.setPageTitle(n),this.setMetaTags({title:n});case 13:this.loadData();case 14:case"end":return e.stop()}}),e,this)})))}},{key:"loadItem",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new a.a).id=this.params.itemId,e.next=4,t.fetch();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})))}},{key:"loadData",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.reviewService.load(this.params);case 3:t=e.sent,n=_createForOfIteratorHelper(t);try{for(n.s();!(r=n.n()).done;)i=r.value,this.reviews.push(i)}catch(a){n.e(a)}finally{n.f()}this.reviews.length?this.showContentView():this.showEmptyView(),this.onContentLoaded(),this.onRefreshComplete(t),e.next=16;break;case 9:return e.prev=9,e.t0=e.catch(0),this.reviews.length?this.showContentView():this.showErrorView(),this.onRefreshComplete(),e.next=14,this.getTrans("ERROR_NETWORK");case 14:o=e.sent,this.showToast(o);case 16:case"end":return e.stop()}}),e,this,[[0,9]])})))}},{key:"onLoadMore",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.infiniteScroll=e.target,this.params.page++,this.loadData()}},{key:"onReload",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.refresher=e.target,this.reviews=[],this.params.page=0,this.loadData()}},{key:"trackByFn",value:function(e,t){return t?t.id:null}}]),n}(c.a)).\u0275fac=function(e){return new(e||U)(b.Pb(b.r),b.Pb(o.a))},U.\u0275cmp=b.Jb({type:U,selectors:[["page-review-list"]],viewQuery:function(e,t){var n;1&e&&b.Lc(s.p,!0),2&e&&b.tc(n=b.ec())&&(t.content=n.first)},features:[b.zb],decls:17,vars:11,consts:[[1,"ion-no-border"],["fixed",""],["slot","start"],["scrollEvents","true"],["slot","fixed",3,"ionRefresh"],[3,"pullingText","refreshingText"],["icon","alert-circle-outline",3,"text",4,"ngIf"],["icon","star",3,"text",4,"ngIf"],[1,"ion-justify-content-center"],["size-xs","12","size-lg","10"],[4,"ngIf"],["lines","none",4,"ngIf"],[3,"ionInfinite",4,"ngIf"],["icon","alert-circle-outline",3,"text"],["icon","star",3,"text"],["class","skeleton-item light-bg radius",4,"ngFor","ngForOf"],[1,"skeleton-item","light-bg","radius"],[1,"wrapper"],[1,"avatar"],["appearance","circle",3,"theme"],[1,"title"],[3,"theme"],["lines","none"],["class","ion-margin-bottom ion-padding",4,"ngFor","ngForOf","ngForTrackBy"],[1,"ion-margin-bottom","ion-padding"],[1,"ion-no-padding"],["defaultImage","./assets/imgs/avatar.png",3,"lazyLoad","customObservable"],["color","dark"],[1,"no-margin"],["color","medium"],[1,"text-medium"],[3,"rate","readOnly","max","theme"],[3,"ionInfinite"]],template:function(e,t){1&e&&(b.Vb(0,"ion-header",0),b.Vb(1,"ion-toolbar",1),b.Vb(2,"ion-buttons",2),b.Qb(3,"ion-back-button"),b.Ub(),b.Ub(),b.Ub(),b.Vb(4,"ion-content",3),b.Vb(5,"ion-refresher",4),b.dc("ionRefresh",(function(e){return t.onReload(e)})),b.Qb(6,"ion-refresher-content",5),b.hc(7,"translate"),b.hc(8,"translate"),b.Ub(),b.Vb(9,"ion-grid",1),b.Dc(10,w,2,3,"empty-view",6),b.Dc(11,O,2,3,"empty-view",7),b.Vb(12,"ion-row",8),b.Vb(13,"ion-col",9),b.Dc(14,k,2,1,"section",10),b.Dc(15,P,2,3,"ion-list",11),b.Ub(),b.Ub(),b.Ub(),b.Dc(16,I,2,0,"ion-infinite-scroll",12),b.Ub()),2&e&&(b.Cb(6),b.nc("pullingText",b.ic(7,7,"PULL_TO_REFRESH")),b.nc("refreshingText",b.ic(8,9,"REFRESHING")),b.Cb(4),b.mc("ngIf",t.isErrorViewVisible),b.Cb(1),b.mc("ngIf",t.isEmptyViewVisible),b.Cb(3),b.mc("ngIf",t.isLoadingViewVisible),b.Cb(1),b.mc("ngIf",t.isContentViewVisible),b.Cb(1),b.mc("ngIf",t.isContentViewVisible))},directives:[s.s,s.Y,s.k,s.g,s.h,s.p,s.F,s.G,s.r,p.l,s.J,s.o,h.a,p.k,d.a,s.A,s.x,s.f,g.a,s.z,s.T,m.a,s.u,s.v],pipes:[v.c,y.a],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-grid[_ngcontent-%COMP%]{background:#fff}ion-avatar[_ngcontent-%COMP%]{margin:0 12px 0 0!important}ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background:var(--ion-color-dark)}.skeleton-item[_ngcontent-%COMP%]{width:auto;height:auto;margin:10px auto;padding:10px}.skeleton-item[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:inline-flex;width:100%;height:auto;flex:1}.skeleton-item[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:100px;height:90px}.skeleton-item[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;padding:10px;height:80px}"],data:{animation:[Object(f.l)("staggerIn",[Object(f.k)("* => *",[Object(f.f)(":enter",Object(f.j)({opacity:0,transform:"translate3d(0,10px,0)"}),{optional:!0}),Object(f.f)(":enter",Object(f.h)("100ms",[Object(f.e)("300ms",Object(f.j)({opacity:1,transform:"translate3d(0,0,0)"}))]),{optional:!0})])])]}}),U),E=n("d2mR"),S=((j=function e(){_classCallCheck(this,e)}).\u0275mod=b.Nb({type:j}),j.\u0275inj=b.Mb({factory:function(e){return new(e||j)},imports:[[E.a,r.i.forChild([{path:"",component:T}])]]}),j)}}]);