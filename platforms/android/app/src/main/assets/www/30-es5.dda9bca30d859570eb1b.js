function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{y0Ef:function(e,t,n){"use strict";n.r(t),n.d(t,"ThanksPageModule",(function(){return g}));var r=n("tyNb"),o=n("mrSG"),i=n("dNOa"),c=n("NV1z"),s=n("fXoL"),a=n("TEn/"),u=n("ofXK"),f=n("sYmb");function l(e,t){if(1&e){var n=s.Wb();s.Vb(0,"div",5),s.Qb(1,"ion-icon",6),s.Vb(2,"div",7),s.Vb(3,"ion-text",8),s.Vb(4,"h2",9),s.Fc(5),s.hc(6,"translate"),s.Ub(),s.Vb(7,"p"),s.Fc(8),s.hc(9,"translate"),s.Ub(),s.Vb(10,"p"),s.Fc(11),s.hc(12,"translate"),s.Ub(),s.Ub(),s.Ub(),s.Vb(13,"div",10),s.Vb(14,"div",11),s.Vb(15,"ion-button",12),s.dc("click",(function(){return s.wc(n),s.gc().goToHome()})),s.Fc(16),s.hc(17,"translate"),s.Ub(),s.Ub(),s.Vb(18,"div"),s.Vb(19,"ion-button",13),s.dc("click",(function(){return s.wc(n),s.gc().goToOrder()})),s.Fc(20),s.hc(21,"translate"),s.Ub(),s.Ub(),s.Ub(),s.Ub()}if(2&e){var r=s.gc();s.Cb(5),s.Hc(" ",s.ic(6,5,"ORDER_PLACED")," "),s.Cb(3),s.Hc(" ",s.jc(9,7,"ORDER_DETAILS",r.order)," "),s.Cb(3),s.Gc(s.ic(12,10,"ORDER_NOTICE")),s.Cb(5),s.Hc(" ",s.ic(17,12,"CONTINUE_SHOPPING")," "),s.Cb(4),s.Hc(" ",s.ic(21,14,"VIEW_ORDER")," ")}}var b,p,d=((b=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){var o;return _classCallCheck(this,n),(o=t.call(this,e)).orderService=r,o}return _createClass(n,[{key:"enableMenuSwipe",value:function(){return!0}},{key:"ionViewDidEnter",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.showLoadingView({showOverlay:!1});case 3:return e.next=5,this.getParams().orderId;case 5:return t=e.sent,e.next=8,this.orderService.loadOne(t);case 8:this.order=e.sent,this.showContentView(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),this.showErrorView();case 15:return e.next=17,this.getTrans("APP_NAME");case 17:n=e.sent,this.setPageTitle(n),this.setMetaTags({title:n});case 19:case"end":return e.stop()}}),e,this,[[0,12]])})))}},{key:"goToHome",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setRoot("/1/cart");case 2:this.navigateTo("/");case 3:case"end":return e.stop()}}),e,this)})))}},{key:"goToOrder",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setRoot("/1/cart");case 2:this.navigateTo("/1/account/orders/"+this.order.id);case 3:case"end":return e.stop()}}),e,this)})))}}]),n}(c.a)).\u0275fac=function(e){return new(e||b)(s.Pb(s.r),s.Pb(i.a))},b.\u0275cmp=s.Jb({type:b,selectors:[["page-thanks-page"]],features:[s.zb],decls:8,vars:1,consts:[[1,"ion-no-border"],["fixed","",1,"center"],[1,"ion-justify-content-center"],["size-xs","12","size-lg","10"],["class","ion-text-center",4,"ngIf"],[1,"ion-text-center"],["name","checkmark-circle","color","success"],[1,"ion-padding"],["color","dark"],[1,"bold"],[2,"width","300px","margin","0 auto"],[1,"ion-margin-vertical"],["size","large","shape","round","color","primary","expand","block",3,"click"],["size","large","shape","round","color","success","expand","block",3,"click"]],template:function(e,t){1&e&&(s.Vb(0,"ion-header",0),s.Vb(1,"ion-toolbar"),s.Qb(2,"ion-title"),s.Ub(),s.Ub(),s.Vb(3,"ion-content"),s.Vb(4,"ion-grid",1),s.Vb(5,"ion-row",2),s.Vb(6,"ion-col",3),s.Dc(7,l,22,16,"div",4),s.Ub(),s.Ub(),s.Ub(),s.Ub()),2&e&&(s.Cb(7),s.mc("ngIf",t.order))},directives:[a.s,a.Y,a.W,a.p,a.r,a.J,a.o,u.l,a.t,a.T,a.j],pipes:[f.c],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-grid[_ngcontent-%COMP%]{background:#fff}h2.text[_ngcontent-%COMP%]{font-size:2rem}.text[_ngcontent-%COMP%]{font-size:1.5rem}ion-icon[_ngcontent-%COMP%]{font-size:6em}"]}),b),h=n("d2mR"),g=((p=function e(){_classCallCheck(this,e)}).\u0275mod=s.Nb({type:p}),p.\u0275inj=s.Mb({factory:function(e){return new(e||p)},imports:[[r.i.forChild([{path:"",component:d}]),h.a]]}),p)}}]);