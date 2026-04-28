"use strict";
(self["webpackChunktienda_productos_angular"] = self["webpackChunktienda_productos_angular"] || []).push([["main"],{

/***/ 925:
/*!************************************************!*\
  !*** ./store-angular/src/app/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 9117);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/cart.service */ 7421);







function AppComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.cartCount);
  }
}
function AppComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u25BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Panel Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_26_Conditional_2_Template, 2, 0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Mis pedidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_26_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Cerrar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](2, ctx_r0.isAdmin ? 2 : -1);
  }
}
class AppComponent {
  auth;
  cart;
  router;
  user = null;
  showDropdown = false;
  cartCount = 0;
  constructor(auth, cart, router) {
    this.auth = auth;
    this.cart = cart;
    this.router = router;
  }
  ngOnInit() {
    this.auth.loadSession();
    this.user = this.auth.snapshot;
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
    this.cart.loadCart();
    this.cart.cart$.subscribe(cart => {
      this.cartCount = cart.totalItems;
    });
  }
  get isAdmin() {
    return this.user?.rol === 'administrativo';
  }
  getDisplayName() {
    if (!this.user) return 'Iniciar sesión';
    const fullName = `${this.user.nombre} ${this.user.apellido || ''}`.replace(/\s/g, '');
    return fullName.length > 10 ? fullName.substring(0, 8) + '..' : fullName;
  }
  logout(event) {
    if (event) event.preventDefault();
    this.auth.logout().subscribe({
      next: () => {
        this.auth.setUser(null);
      }
    });
  }
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 66,
    vars: 6,
    consts: [[1, "min-h-screen", "bg-[#e6e8e6]", "text-[#3f403f]"], [1, "border-b", "border-[#ced0ce]", "bg-[#e6e8e6]"], [1, "mx-auto", "flex", "w-full", "max-w-[1440px]", "items-center", "justify-between", "gap-4", "px-6", "py-4", "lg:px-10"], [1, "flex", "items-center", "gap-8"], ["routerLink", "/", 1, "text-2xl", "font-semibold", "tracking-tight", "text-[#475841]"], [1, "hidden", "items-center", "gap-6", "lg:flex"], ["routerLink", "/cupones", 1, "text-sm", "font-medium", "text-[#3f403f]", "hover:text-[#475841]"], ["href", "/panel", 1, "text-sm", "font-medium", "text-[#475841]", "hover:underline"], [1, "hidden", "flex-1", "max-w-xl", "lg:flex"], [1, "flex", "items-center", "gap-3", "sm:gap-4"], ["routerLink", "/mis-compras", "title", "Mis compras", 1, "relative", "inline-flex", "h-11", "w-11", "items-center", "justify-center", "border", "border-[#ced0ce]", "bg-white", "text-[#475841]", "hover:bg-[#ced0ce]"], [1, "material-symbols-outlined"], ["routerLink", "/carrito", 1, "relative", "inline-flex", "h-11", "w-11", "items-center", "justify-center", "border", "border-[#ced0ce]", "bg-white", "text-[#475841]", "hover:bg-[#ced0ce]"], ["class", "absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center border border-[#475841] bg-[#9fb8ad] px-1 text-[10px] font-bold text-[#475841]", 4, "ngIf"], [1, "group", "relative", "hidden", "sm:block"], [1, "inline-flex", "h-11", "items-center", "gap-2", "border", "border-[#ced0ce]", "bg-white", "px-4", "text-sm", "font-medium", "text-[#3f403f]", "hover:bg-[#ced0ce]", 3, "routerLink"], [4, "ngIf"], ["class", "invisible absolute right-0 top-full z-20 mt-3 w-52 border border-[#ced0ce] bg-white opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100", 4, "ngIf"], [1, "mt-10", "border-t", "border-[#ced0ce]", "bg-[#e6e8e6]"], [1, "mx-auto", "grid", "w-full", "max-w-[1440px]", "grid-cols-1", "gap-8", "px-6", "py-8", "sm:grid-cols-2", "lg:grid-cols-4", "lg:px-10"], [1, "text-xl", "font-semibold", "tracking-tight", "text-[#475841]"], [1, "mt-3", "max-w-xs", "text-sm", "leading-6", "text-[#6b6d6b]"], [1, "text-sm", "font-semibold", "uppercase", "tracking-[0.16em]", "text-[#475841]"], [1, "mt-3", "grid", "gap-2", "text-sm", "text-[#3f403f]"], [1, "hover:text-[#475841]"], [1, "mt-3", "flex", "items-center", "gap-3", "text-[#475841]"], [1, "inline-flex", "h-10", "w-10", "items-center", "justify-center", "border", "border-[#ced0ce]", "bg-white", "hover:bg-[#ced0ce]"], [1, "absolute", "-right-1", "-top-1", "inline-flex", "h-5", "min-w-[20px]", "items-center", "justify-center", "border", "border-[#475841]", "bg-[#9fb8ad]", "px-1", "text-[10px]", "font-bold", "text-[#475841]"], [1, "invisible", "absolute", "right-0", "top-full", "z-20", "mt-3", "w-52", "border", "border-[#ced0ce]", "bg-white", "opacity-0", "transition-all", "duration-200", "group-hover:visible", "group-hover:opacity-100"], [1, "grid", "gap-px", "bg-[#ced0ce]", "p-px", "text-sm"], ["href", "/panel", 1, "bg-white", "px-4", "py-3", "hover:bg-[#e6e8e6]"], ["routerLink", "/mis-compras", 1, "bg-white", "px-4", "py-3", "hover:bg-[#e6e8e6]"], [1, "bg-white", "px-4", "py-3", "hover:bg-[#e6e8e6]", 3, "click"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "CompraEnUna");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nav", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Cupones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AppComponent_Conditional_9_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9)(12, "a", 10)(13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "receipt_long");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 12)(16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AppComponent_span_18_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14)(20, "button", 15)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\uD83D\uDC64");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AppComponent_span_25_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AppComponent_div_26_Template, 7, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "footer", 18)(30, "div", 19)(31, "div")(32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "CompraEnUna");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Tecnolog\u00EDa para tu d\u00EDa a d\u00EDa con ofertas claras, compra segura y productos que s\u00ED te ayudan a rendir mejor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div")(37, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 23)(40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Categor\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Ofertas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Cupones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div")(47, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 23)(50, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Centro de ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Env\u00EDos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Devoluciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div")(57, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "S\u00EDguenos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 25)(60, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "f");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](9, ctx.isAdmin ? 9 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cartCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.user ? null : "/auth");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getDisplayName());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5498:
/*!*********************************************!*\
  !*** ./store-angular/src/app/app.config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 5882);



const appConfig = {
  providers: [(0,_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.provideHttpClient)(), (0,_angular_router__WEBPACK_IMPORTED_MODULE_2__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes)]
};

/***/ }),

/***/ 5882:
/*!*********************************************!*\
  !*** ./store-angular/src/app/app.routes.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _pages_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home-page.component */ 8280);
/* harmony import */ var _pages_product_detail_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/product-detail-page.component */ 8988);
/* harmony import */ var _pages_auth_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/auth-page.component */ 5623);
/* harmony import */ var _pages_cart_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/cart-page.component */ 8103);
/* harmony import */ var _pages_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/checkout-page.component */ 6985);
/* harmony import */ var _pages_purchases_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/purchases-page.component */ 1975);
/* harmony import */ var _pages_profile_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/profile-page.component */ 7780);
/* harmony import */ var _pages_order_confirmation_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/order-confirmation-page.component */ 1927);
/* harmony import */ var _pages_coupons_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/coupons-page.component */ 7798);









const routes = [{
  path: '',
  component: _pages_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent,
  title: 'CompraEnUna - Tecnología y más'
}, {
  path: 'tienda',
  component: _pages_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent,
  title: 'CompraEnUna - Tienda'
}, {
  path: 'auth',
  component: _pages_auth_page_component__WEBPACK_IMPORTED_MODULE_2__.AuthPageComponent,
  title: 'Ingresar'
}, {
  path: 'carrito',
  component: _pages_cart_page_component__WEBPACK_IMPORTED_MODULE_3__.CartPageComponent,
  title: 'Carrito'
}, {
  path: 'checkout',
  component: _pages_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutPageComponent,
  title: 'Continuar compra'
}, {
  path: 'confirmacion/:id',
  component: _pages_order_confirmation_page_component__WEBPACK_IMPORTED_MODULE_7__.OrderConfirmationPageComponent,
  title: 'Pedido confirmado'
}, {
  path: 'cupones',
  component: _pages_coupons_page_component__WEBPACK_IMPORTED_MODULE_8__.CouponsPageComponent,
  title: 'Cupones'
}, {
  path: 'producto/:id',
  component: _pages_product_detail_page_component__WEBPACK_IMPORTED_MODULE_1__.ProductDetailPageComponent,
  title: 'Detalle de producto'
}, {
  path: 'mis-compras',
  component: _pages_purchases_page_component__WEBPACK_IMPORTED_MODULE_5__.PurchasesPageComponent,
  title: 'Mis Compras'
}, {
  path: 'cuenta',
  component: _pages_profile_page_component__WEBPACK_IMPORTED_MODULE_6__.ProfilePageComponent,
  title: 'Mi Cuenta'
}, {
  path: '**',
  redirectTo: ''
}];

/***/ }),

/***/ 1891:
/*!********************************************************************!*\
  !*** ./store-angular/src/app/components/product-card.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductCardComponent: () => (/* binding */ ProductCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




const _c0 = a0 => ["/producto", a0];
function ProductCardComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-", ctx_r0.product.descuento_valor, "%");
  }
}
function ProductCardComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Env\u00EDo gratis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ProductCardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.product.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.product.nombre);
  }
}
function ProductCardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83D\uDCE6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ProductCardComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("S/.", ctx_r0.product.precio_venta, "");
  }
}
class ProductCardComponent {
  product;
  static ɵfac = function ProductCardComponent_Factory(t) {
    return new (t || ProductCardComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProductCardComponent,
    selectors: [["app-product-card"]],
    inputs: {
      product: "product"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 25,
    vars: 18,
    consts: [[1, "border", "border-[#ced0ce]", "bg-white", "p-4", "transition-colors", "hover:border-[#9fb8ad]", "min-w-[240px]"], [1, "flex", "items-start", "justify-between", "gap-2"], ["class", "border border-[#475841] bg-[#475841] px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white", 4, "ngIf"], ["class", "border border-[#9fb8ad] bg-[#eaf1ed] px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#475841]", 4, "ngIf"], [1, "mt-4", "flex", "h-48", "items-center", "justify-center", "border", "border-[#ced0ce]", "bg-[#e6e8e6]"], [1, "w-full", "h-full", "object-contain", 3, "src", "alt"], [1, "mt-4", "text-lg", "font-semibold", "tracking-tight", "text-[#3f403f]"], [1, "mt-1", "text-sm", "text-[#6b6d6b]"], [1, "mt-3", "flex", "items-center", "gap-1", "text-[#475841]"], [1, "ml-2", "text-xs", "text-[#6b6d6b]"], [1, "mt-4", "flex", "items-end", "justify-between", "gap-3"], ["class", "text-xs text-[#6b6d6b] line-through", 4, "ngIf"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-[#475841]"], [1, "inline-flex", "items-center", "gap-2", "border", "border-[#475841]", "bg-[#475841]", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-[#5b6d54]", 3, "routerLink"], [1, "border", "border-[#475841]", "bg-[#475841]", "px-2", "py-1", "text-[11px]", "font-bold", "uppercase", "tracking-[0.12em]", "text-white"], [1, "border", "border-[#9fb8ad]", "bg-[#eaf1ed]", "px-2", "py-1", "text-[11px]", "font-bold", "uppercase", "tracking-[0.12em]", "text-[#475841]"], [1, "text-6xl", "text-[#475841]"], [1, "text-xs", "text-[#6b6d6b]", "line-through"]],
    template: function ProductCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductCardComponent_span_2_Template, 2, 1, "span", 2)(3, ProductCardComponent_span_3_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductCardComponent_Conditional_5_Template, 1, 2, "img", 5)(6, ProductCardComponent_Conditional_6_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u2B50\u2B50\u2B50\u2B50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10)(18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProductCardComponent_p_19_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Ver producto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.descuento_tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.envio_gratis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](5, ctx.product.imagen ? 5 : 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 9, ctx.product.descripcion, 0, 50), "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("4.0 (", ctx.product.id, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.descuento_tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 13, ctx.product.precio_descuento, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.product.id));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7589:
/*!************************************************************************!*\
  !*** ./store-angular/src/app/components/related-products.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelatedProductsComponent: () => (/* binding */ RelatedProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _product_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-card.component */ 1891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




function RelatedProductsComponent_section_0_app_product_card_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-product-card", 5);
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", product_r1);
  }
}
function RelatedProductsComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1)(1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Productos relacionados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RelatedProductsComponent_section_0_app_product_card_4_Template, 1, 1, "app-product-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.products);
  }
}
class RelatedProductsComponent {
  products;
  static ɵfac = function RelatedProductsComponent_Factory(t) {
    return new (t || RelatedProductsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RelatedProductsComponent,
    selectors: [["app-related-products"]],
    inputs: {
      products: "products"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "mt-10", 4, "ngIf"], [1, "mt-10"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-[#3f403f]", "mb-4"], [1, "carousel"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"]],
    template: function RelatedProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RelatedProductsComponent_section_0_Template, 5, 1, "section", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.products.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _product_card_component__WEBPACK_IMPORTED_MODULE_0__.ProductCardComponent],
    styles: [".carousel[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 1rem;\n      overflow-x: auto;\n      padding-bottom: 1rem;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3N0b3JlLWFuZ3VsYXIvc3JjL2FwcC9jb21wb25lbnRzL3JlbGF0ZWQtcHJvZHVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGFBQWE7TUFDYixTQUFTO01BQ1QsZ0JBQWdCO01BQ2hCLG9CQUFvQjtJQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jYXJvdXNlbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxcmVtO1xuICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5623:
/*!************************************************************!*\
  !*** ./store-angular/src/app/pages/auth-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthPageComponent: () => (/* binding */ AuthPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 9117);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ 7421);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);








function AuthPageComponent_main_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
  }
}
function AuthPageComponent_main_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 2)(1, "div", 3)(2, "div", 4)(3, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Iniciar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Accede a tu cuenta para continuar con tus compras eficientes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AuthPageComponent_main_1_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AuthPageComponent_main_1_div_8_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9)(10, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Correo Electr\u00F3nico");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AuthPageComponent_main_1_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.loginModel.correo, $event) || (ctx_r1.loginModel.correo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9)(14, "div", 12)(15, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u00BFOlvidaste tu contrase\u00F1a?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AuthPageComponent_main_1_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.loginModel.password, $event) || (ctx_r1.loginModel.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16)(21, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthPageComponent_main_1_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.setView("register-step1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Registrarse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.loginModel.correo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.loginModel.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.loading ? "Ingresando..." : "Iniciar Sesi\u00F3n", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
  }
}
function AuthPageComponent_main_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
  }
}
function AuthPageComponent_main_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 2)(1, "div", 20)(2, "div", 21)(3, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Crear Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00DAnete para una experiencia de compra segura");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 24)(8, "div", 25)(9, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Paso 1 de 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Acceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AuthPageComponent_main_2_Template_form_ngSubmit_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.goToStep2());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AuthPageComponent_main_2_div_16_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 31)(18, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Correo electr\u00F3nico");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AuthPageComponent_main_2_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.registerModel.correo, $event) || (ctx_r1.registerModel.correo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 31)(22, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AuthPageComponent_main_2_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.registerModel.password, $event) || (ctx_r1.registerModel.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 31)(26, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Confirmar contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AuthPageComponent_main_2_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.registerModel.confirmPassword, $event) || (ctx_r1.registerModel.confirmPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 38)(30, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Continuar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 40)(33, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " \u00BFYa tienes una cuenta? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthPageComponent_main_2_Template_a_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.setView("login"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Iniciar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.registerModel.correo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.registerModel.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.registerModel.confirmPassword);
  }
}
function AuthPageComponent_main_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
  }
}
function AuthPageComponent_main_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 2)(1, "div", 42)(2, "div", 43)(3, "div", 44)(4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Paso 2 de 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Datos Personales");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 48)(10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h1", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Completa tu perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AuthPageComponent_main_3_Template_form_ngSubmit_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.finishRegistration());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AuthPageComponent_main_3_div_14_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Nombres completos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AuthPageComponent_main_3_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.registerModel.nombre, $event) || (ctx_r1.registerModel.nombre = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9)(20, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Apellidos completos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AuthPageComponent_main_3_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.registerModel.apellido, $event) || (ctx_r1.registerModel.apellido = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9)(24, "div", 55)(25, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Opcional");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AuthPageComponent_main_3_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.registerModel.direccion, $event) || (ctx_r1.registerModel.direccion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Puedes colocar la direcci\u00F3n despu\u00E9s (se le pedir\u00E1 en cada pedido).");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 60)(33, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthPageComponent_main_3_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.setView("register-step1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Atr\u00E1s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.registerModel.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.registerModel.apellido);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.registerModel.direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.loading ? "Finalizando..." : "Finalizar Registro", " ");
  }
}
class AuthPageComponent {
  auth;
  cart;
  router;
  location;
  view = 'login';
  loginModel = {
    correo: '',
    password: ''
  };
  registerModel = {
    correo: '',
    password: '',
    confirmPassword: '',
    nombre: '',
    apellido: '',
    direccion: ''
  };
  error = '';
  loading = false;
  constructor(auth, cart, router, location) {
    this.auth = auth;
    this.cart = cart;
    this.router = router;
    this.location = location;
  }
  ngOnInit() {
    // Si el usuario ya está autenticado, no tiene sentido que vea esta página.
    if (this.auth.isAuthenticated) {
      this.goBack();
    }
  }
  setView(newView) {
    this.error = '';
    this.view = newView;
  }
  login() {
    if (!this.loginModel.correo || !this.loginModel.password) {
      this.error = 'Debes llenar todos los campos.';
      return;
    }
    this.error = '';
    this.loading = true;
    this.auth.login(this.loginModel).subscribe({
      next: response => {
        this.loading = false;
        this.auth.setUser(response.user);
        this.importCartAndProceed();
      },
      error: error => {
        this.loading = false;
        this.error = error.error?.error || 'Credenciales inválidas.';
      }
    });
  }
  goToStep2() {
    this.error = '';
    if (!this.registerModel.correo || !this.registerModel.password || !this.registerModel.confirmPassword) {
      this.error = 'Completa todos los campos obligatorios.';
      return;
    }
    if (this.registerModel.password !== this.registerModel.confirmPassword) {
      this.error = 'Las contraseñas no coinciden.';
      return;
    }
    if (this.registerModel.password.length < 6) {
      this.error = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }
    this.setView('register-step2');
  }
  finishRegistration() {
    this.error = '';
    if (!this.registerModel.nombre || !this.registerModel.apellido) {
      this.error = 'Debes colocar tus nombres y apellidos.';
      return;
    }
    this.loading = true;
    const payload = {
      nombre: this.registerModel.nombre,
      apellido: this.registerModel.apellido,
      correo: this.registerModel.correo,
      password: this.registerModel.password,
      direccion: this.registerModel.direccion
    };
    this.auth.register(payload).subscribe({
      next: response => {
        this.loading = false;
        this.auth.setUser(response.user);
        this.importCartAndProceed();
      },
      error: error => {
        this.loading = false;
        this.error = error.error?.error || 'No se pudo registrar la cuenta. Es posible que el correo ya exista.';
      }
    });
  }
  importCartAndProceed() {
    if (this.cart.hasLocalCart()) {
      this.cart.importLocalCart();
    } else {
      this.cart.loadCart();
    }
    this.goBack();
  }
  goBack() {
    // Navigate back to where the user was, otherwise home
    const currentUrl = this.router.url;
    // Location.back() works in Angular but can sometimes kick you out of the app.
    // Instead we can check history.
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }
  static ɵfac = function AuthPageComponent_Factory(t) {
    return new (t || AuthPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AuthPageComponent,
    selectors: [["app-auth-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 3,
    consts: [[1, "bg-background", "text-on-background", "min-h-screen", "font-body-lg", "text-body-lg", "antialiased"], ["class", "flex items-center justify-center p-lg min-h-[calc(100vh-200px)]", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "p-lg", "min-h-[calc(100vh-200px)]"], [1, "w-full", "max-w-md", "bg-surface-container-lowest", "border-2", "border-outline-variant", "rounded", "p-xl", "flex", "flex-col", "gap-lg"], [1, "text-center", "mb-sm"], [1, "font-h1", "text-h1", "text-primary-container", "mb-xs"], [1, "font-body-md", "text-body-md", "text-on-surface-variant"], [1, "flex", "flex-col", "gap-md", 3, "ngSubmit"], ["class", "bg-red-50 text-red-600 p-3 text-sm border border-red-200 rounded", 4, "ngIf"], [1, "flex", "flex-col", "gap-xs"], ["for", "emailLogin", 1, "font-label", "text-label", "text-on-surface", "uppercase"], ["id", "emailLogin", "name", "emailLogin", "placeholder", "tu@correo.com", "required", "", "type", "email", 1, "h-11", "border", "border-outline-variant", "rounded", "bg-surface-container-lowest", "px-sm", "text-on-surface", "font-body-md", "text-body-md", "focus:outline-none", "focus:border-2", "focus:border-primary-container", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-between"], ["for", "passwordLogin", 1, "font-label", "text-label", "text-on-surface", "uppercase"], ["href", "javascript:void(0)", 1, "font-body-sm", "text-body-sm", "text-primary-container", "underline", "hover:text-primary", "transition-colors"], ["id", "passwordLogin", "name", "passwordLogin", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", "type", "password", 1, "h-11", "border", "border-outline-variant", "rounded", "bg-surface-container-lowest", "px-sm", "text-on-surface", "font-body-md", "text-body-md", "focus:outline-none", "focus:border-2", "focus:border-primary-container", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "flex", "flex-col", "gap-sm", "mt-sm"], ["type", "submit", 1, "h-[44px]", "bg-primary-container", "text-on-primary", "font-label", "text-label", "uppercase", "rounded", "flex", "items-center", "justify-center", "cursor-pointer", "hover:bg-primary", "transition-colors", "disabled:opacity-50", 3, "disabled"], ["type", "button", 1, "h-[44px]", "bg-transparent", "border", "border-primary-container", "text-primary-container", "font-label", "text-label", "uppercase", "rounded", "flex", "items-center", "justify-center", "cursor-pointer", "hover:bg-surface-container", "transition-colors", 3, "click", "disabled"], [1, "bg-red-50", "text-red-600", "p-3", "text-sm", "border", "border-red-200", "rounded"], [1, "w-full", "max-w-md", "bg-surface-container-lowest", "border", "border-outline-variant", "rounded-[2px]", "p-8", "shadow-none"], [1, "mb-8", "text-center"], [1, "font-h2", "text-h2", "text-on-surface", "mb-2"], [1, "font-body-sm", "text-body-sm", "text-on-surface-variant"], [1, "mb-8"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "font-label", "text-label", "text-on-surface"], [1, "font-label", "text-label", "text-on-surface-variant"], [1, "w-full", "h-1", "bg-surface-variant", "rounded-full", "flex", "overflow-hidden"], [1, "h-full", "bg-primary-container", "w-1/2"], [1, "space-y-6", 3, "ngSubmit"], [1, "space-y-2"], ["for", "emailReg", 1, "block", "font-label", "text-label", "text-on-surface"], ["id", "emailReg", "name", "emailReg", "placeholder", "tu@email.com", "required", "", "type", "email", 1, "w-full", "h-[44px]", "px-md", "bg-surface-container-lowest", "border", "border-outline-variant", "rounded-[2px]", "text-on-surface", "placeholder:text-outline", "focus:border-2", "focus:border-primary-container", "focus:ring-0", "focus:outline-none", "transition-all", "shadow-none", "font-body-md", "text-body-md", 3, "ngModelChange", "ngModel"], ["for", "passwordReg", 1, "block", "font-label", "text-label", "text-on-surface"], ["id", "passwordReg", "name", "passwordReg", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", "type", "password", 1, "w-full", "h-[44px]", "px-md", "bg-surface-container-lowest", "border", "border-outline-variant", "rounded-[2px]", "text-on-surface", "placeholder:text-outline", "focus:border-2", "focus:border-primary-container", "focus:ring-0", "focus:outline-none", "transition-all", "shadow-none", "font-body-md", "text-body-md", 3, "ngModelChange", "ngModel"], ["for", "passwordConfirm", 1, "block", "font-label", "text-label", "text-on-surface"], ["id", "passwordConfirm", "name", "passwordConfirm", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", "type", "password", 1, "w-full", "h-[44px]", "px-md", "bg-surface-container-lowest", "border", "border-outline-variant", "rounded-[2px]", "text-on-surface", "placeholder:text-outline", "focus:border-2", "focus:border-primary-container", "focus:ring-0", "focus:outline-none", "transition-all", "shadow-none", "font-body-md", "text-body-md", 3, "ngModelChange", "ngModel"], [1, "pt-4"], ["type", "submit", 1, "w-full", "min-h-[44px]", "bg-primary-container", "text-[#e6e8e6]", "font-label", "text-label", "uppercase", "tracking-wider", "rounded-[2px]", "hover:bg-[#3d4b38]", "transition-colors", "flex", "items-center", "justify-center", "shadow-none"], [1, "mt-6", "text-center"], ["href", "javascript:void(0)", 1, "text-primary-container", "font-semibold", "hover:underline", 3, "click"], [1, "bg-surface-container-lowest", "border", "border-outline-variant", "rounded", "p-xl", "w-full", "max-w-[480px]"], [1, "mb-lg"], [1, "flex", "justify-between", "items-center", "mb-sm"], [1, "font-label", "text-label", "text-outline", "uppercase", "tracking-wider"], [1, "font-label", "text-label", "text-primary-container", "uppercase", "tracking-wider"], [1, "flex", "gap-xs", "w-full", "h-unit"], [1, "w-1/2", "bg-primary-container", "rounded-full"], [1, "font-h2", "text-h2", "text-on-surface", "mb-xl"], [1, "flex", "flex-col", "gap-lg", 3, "ngSubmit"], ["for", "firstNames", 1, "font-label", "text-label", "text-on-surface"], ["id", "firstNames", "name", "firstNames", "placeholder", "Ej. Juan Carlos", "required", "", "type", "text", 1, "h-[44px]", "px-md", "bg-surface-container-lowest", "border", "border-outline-variant", "rounded", "font-body-md", "text-body-md", "text-on-surface", "focus:outline-none", "focus:border-primary-container", "focus:ring-1", "focus:ring-primary-container", "transition-colors", 3, "ngModelChange", "ngModel"], ["for", "surnames", 1, "font-label", "text-label", "text-on-surface"], ["id", "surnames", "name", "surnames", "placeholder", "Ej. P\u00E9rez G\u00F3mez", "required", "", "type", "text", 1, "h-[44px]", "px-md", "bg-surface-container-lowest", "border", "border-outline-variant", "rounded", "font-body-md", "text-body-md", "text-on-surface", "focus:outline-none", "focus:border-primary-container", "focus:ring-1", "focus:ring-primary-container", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-between", "items-baseline"], ["for", "address", 1, "font-label", "text-label", "text-on-surface"], [1, "font-body-sm", "text-body-sm", "text-outline"], ["id", "address", "name", "address", "placeholder", "Ingresa tu direcci\u00F3n de env\u00EDo", "type", "text", 1, "h-[44px]", "px-md", "bg-surface-container-lowest", "border", "border-outline-variant", "rounded", "font-body-md", "text-body-md", "text-on-surface", "focus:outline-none", "focus:border-primary-container", "focus:ring-1", "focus:ring-primary-container", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "font-body-sm", "text-body-sm", "text-outline", "mt-1"], [1, "flex", "gap-md", "mt-sm", "pt-md", "border-t", "border-surface-dim"], ["type", "button", 1, "flex-1", "h-[44px]", "flex", "items-center", "justify-center", "font-label", "text-label", "text-primary-container", "bg-transparent", "border", "border-outline-variant", "rounded", "hover:bg-surface-container", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], ["type", "submit", 1, "flex-[2]", "h-[44px]", "flex", "items-center", "justify-center", "font-label", "text-label", "text-on-primary", "bg-primary-container", "rounded", "hover:bg-on-primary-fixed-variant", "transition-colors", "disabled:opacity-50", 3, "disabled"]],
    template: function AuthPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AuthPageComponent_main_1_Template, 25, 6, "main", 1)(2, AuthPageComponent_main_2_Template, 37, 4, "main", 1)(3, AuthPageComponent_main_3_Template, 37, 7, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.view === "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.view === "register-step1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.view === "register-step2");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8103:
/*!************************************************************!*\
  !*** ./store-angular/src/app/pages/cart-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartPageComponent: () => (/* binding */ CartPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cart.service */ 7421);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 9117);








const _forTrack0 = ($index, $item) => $item.productoId;
const _c0 = () => [];
function CartPageComponent_For_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 14);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r2.producto.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", item_r2.producto.nombre);
  }
}
function CartPageComponent_For_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\uD83D\uDCE6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CartPageComponent_For_15_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Agotado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CartPageComponent_For_15_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("-", item_r2.producto.descuento_valor, "%");
  }
}
function CartPageComponent_For_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Env\u00EDo gratis");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CartPageComponent_For_15_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Llega env\u00EDo gratis 3-5 d\u00EDas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CartPageComponent_For_15_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S/.", item_r2.producto == null ? null : item_r2.producto.precio_venta, "");
  }
}
function CartPageComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "article", 9)(1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CartPageComponent_For_15_Conditional_3_Template, 1, 2, "img", 14)(4, CartPageComponent_For_15_Conditional_4_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "div", 15)(7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CartPageComponent_For_15_Conditional_9_Template, 2, 0, "span", 17)(10, CartPageComponent_For_15_Conditional_10_Template, 2, 1, "span", 18)(11, CartPageComponent_For_15_Conditional_11_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CartPageComponent_For_15_Conditional_15_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 22)(17, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Vendedor oficial");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Garant\u00EDa 12 meses");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 24)(22, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Precio unitario");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CartPageComponent_For_15_Conditional_24_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div")(29, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 29)(32, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartPageComponent_For_15_Template_button_click_32_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.decrease(item_r2.productoId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " \u2212 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartPageComponent_For_15_Template_button_click_36_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.increase(item_r2.productoId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 33)(39, "div")(40, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartPageComponent_For_15_Template_button_click_45_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.remove(item_r2.productoId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " \uD83D\uDDD1 Quitar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_22_0;
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("opacity-60", !(item_r2.producto == null ? null : item_r2.producto.disponible));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](3, (item_r2.producto == null ? null : item_r2.producto.imagen) ? 3 : 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.producto == null ? null : item_r2.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](9, !(item_r2.producto == null ? null : item_r2.producto.disponible) ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](10, (item_r2.producto == null ? null : item_r2.producto.descuento_tipo) === "porcentaje" ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](11, (item_r2.producto == null ? null : item_r2.producto.envio_gratis) ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](14, 15, item_r2.producto == null ? null : item_r2.producto.descripcion, 0, 50), "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](15, (item_r2.producto == null ? null : item_r2.producto.envio_gratis) ? 15 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](24, (item_r2.producto == null ? null : item_r2.producto.descuento_tipo) ? 24 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](27, 19, item_r2.producto == null ? null : item_r2.producto.precio_descuento, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", item_r2.cantidad <= 1 || !(item_r2.producto == null ? null : item_r2.producto.disponible));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !(item_r2.producto == null ? null : item_r2.producto.disponible) || item_r2.cantidad >= ((tmp_22_0 = item_r2.producto == null ? null : item_r2.producto.stock_actual) !== null && tmp_22_0 !== undefined ? tmp_22_0 : 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](44, 22, item_r2.subtotal, "1.2-2"), "");
  }
}
function CartPageComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 37)(2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uD83D\uDED2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Tu carrito est\u00E1 vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "A\u00FAn no agregas productos. Descubre laptops, parlantes, routers y m\u00E1s para empezar tu compra.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Explorar productos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function CartPageComponent_Conditional_19_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" \u2713 Cup\u00F3n aplicado: ", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r2.cart$)) == null ? null : tmp_2_0.cupon == null ? null : tmp_2_0.cupon.codigo, " - descuento de S/.", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 6, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r2.cart$)) == null ? null : tmp_2_0.descuentoCupon, "1.2-2"), " ");
  }
}
function CartPageComponent_Conditional_19_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u2715 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r2.cartService.error$), " ");
  }
}
function CartPageComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "div")(3, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u00BFTienes un cup\u00F3n?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Apl\u00EDcalo aqu\u00ED antes de continuar con tu compra.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 43)(8, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CartPageComponent_Conditional_19_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.couponCode, $event) || (ctx_r2.couponCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartPageComponent_Conditional_19_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.applyCoupon());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Aplicar cup\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CartPageComponent_Conditional_19_Conditional_11_Template, 5, 9, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CartPageComponent_Conditional_19_Conditional_13_Template, 3, 3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.couponCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](11, ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 3, ctx_r2.cart$)) == null ? null : tmp_2_0.cupon) ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 5, ctx_r2.cartService.error$) ? 13 : -1);
  }
}
function CartPageComponent_Conditional_20_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 50)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Descuento por cup\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("- S/.", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 3, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 1, ctx_r2.cart$)) == null ? null : tmp_2_0.descuentoCupon, "1.2-2"), "");
  }
}
function CartPageComponent_Conditional_20_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "GRATIS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CartPageComponent_Conditional_20_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 3, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r2.cart$)) == null ? null : tmp_2_0.subtotalEnvios, "1.2-2"), "");
  }
}
function CartPageComponent_Conditional_20_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Hay productos agotados en tu carrito. Elim\u00EDnalos para continuar. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CartPageComponent_Conditional_20_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Todos los \u00EDtems de este carrito califican para env\u00EDo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "GRATIS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, ". ");
  }
}
function CartPageComponent_Conditional_20_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " El costo de env\u00EDo se ha calculado en tu resumen. ");
  }
}
function CartPageComponent_Conditional_20_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 70)(1, "div", 62)(2, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u26A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "h3", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Carrito local detectado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Tienes productos guardados en este navegador. \u00BFDeseas importarlos?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartPageComponent_Conditional_20_Conditional_70_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.importCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Importar a mi cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function CartPageComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "aside", 11)(1, "div", 48)(2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Resumen de orden");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 49)(5, "div", 50)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CartPageComponent_Conditional_20_Conditional_13_Template, 7, 6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 50)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Env\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CartPageComponent_Conditional_20_Conditional_18_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CartPageComponent_Conditional_20_Conditional_20_Template, 4, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 50)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Subtotal sin IGV");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 50)(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "IGV incluido (18%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 53)(34, "div", 54)(35, "div")(36, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Total a pagar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Incluye IGV peruano y env\u00EDo gratis");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, CartPageComponent_Conditional_20_Conditional_44_Template, 2, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Proceder al checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Ver m\u00E1s productos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 61)(50, "div", 62)(51, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "\uD83D\uDEE1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div")(54, "h3", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Compra protegida");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Pago seguro, garant\u00EDa en productos seleccionados y soporte postventa para tu tranquilidad.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 66)(59, "div", 62)(60, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\uD83D\uDE9A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div")(63, "h3", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Despacho estimado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " Tus productos llegan en 3-5 d\u00EDas h\u00E1biles. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, CartPageComponent_Conditional_20_Conditional_67_Template, 4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](68, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, CartPageComponent_Conditional_20_Conditional_69_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, CartPageComponent_Conditional_20_Conditional_70_Template, 11, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_7_0;
    let tmp_11_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Productos (", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 14, ctx_r2.cart$)) == null ? null : tmp_1_0.totalItems, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 18, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 16, ctx_r2.cart$)) == null ? null : tmp_2_0.subtotalProductos, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](13, ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 21, ctx_r2.cart$)) == null ? null : tmp_3_0.descuentoCupon) ? 13 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](18, ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 23, ctx_r2.cart$)) == null ? null : tmp_4_0.subtotalEnvios) === 0 ? 18 : 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](26, 25, ctx_r2.getSubtotalSinIGV(), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](32, 28, ctx_r2.getIGV(), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](43, 33, (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](42, 31, ctx_r2.cart$)) == null ? null : tmp_7_0.total, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](44, ctx_r2.hasOutOfStockItems() ? 44 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("pointer-events-none", ctx_r2.hasOutOfStockItems())("opacity-50", ctx_r2.hasOutOfStockItems());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](67, ((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](68, 36, ctx_r2.cart$)) == null ? null : tmp_11_0.subtotalEnvios) === 0 ? 67 : 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](70, ctx_r2.auth.isAuthenticated && ctx_r2.cartService.hasLocalCart() ? 70 : -1);
  }
}
class CartPageComponent {
  cartService;
  auth;
  cart$;
  couponCode = '';
  constructor(cartService, auth) {
    this.cartService = cartService;
    this.auth = auth;
    this.cart$ = this.cartService.cart$;
    this.cartService.loadCart();
  }
  ngOnInit() {}
  increase(productoId) {
    const item = this.cartService.snapshot.items.find(entry => entry.productoId === productoId);
    if (!item) return;
    const stock = item.producto?.stock_actual ?? 0;
    if (item.cantidad >= stock) return;
    this.cartService.updateQuantity(productoId, item.cantidad + 1);
  }
  decrease(productoId) {
    const item = this.cartService.snapshot.items.find(entry => entry.productoId === productoId);
    if (item && item.cantidad > 1) this.cartService.updateQuantity(productoId, item.cantidad - 1);
  }
  remove(productoId) {
    this.cartService.removeProduct(productoId);
  }
  importCart() {
    this.cartService.importLocalCart();
  }
  applyCoupon() {
    this.cartService.applyCoupon(this.couponCode);
  }
  getSubtotalSinIGV() {
    const total = this.cartService.snapshot.total;
    return total / 1.18;
  }
  getIGV() {
    const total = this.cartService.snapshot.total;
    return total - total / 1.18;
  }
  hasOutOfStockItems() {
    return this.cartService.snapshot.items.some(item => !item.producto?.disponible);
  }
  static ɵfac = function CartPageComponent_Factory(t) {
    return new (t || CartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CartPageComponent,
    selectors: [["app-cart-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 22,
    vars: 9,
    consts: [[1, "border", "border-[#ced0ce]", "bg-white"], [1, "grid", "grid-cols-1", "lg:grid-cols-[1.55fr_0.85fr]"], [1, "border-b", "border-[#ced0ce]", "p-6", "lg:border-b-0", "lg:border-r", "lg:p-8"], [1, "flex", "flex-col", "gap-5", "border-b", "border-[#ced0ce]", "pb-6", "sm:flex-row", "sm:items-end", "sm:justify-between"], [1, "text-xs", "font-bold", "uppercase", "tracking-[0.18em]", "text-[#475841]"], [1, "mt-2", "text-3xl", "font-semibold", "tracking-tight", "text-[#3f403f]"], [1, "mt-2", "text-sm", "text-[#6b6d6b]"], ["routerLink", "/", 1, "inline-flex", "items-center", "gap-2", "text-sm", "font-semibold", "text-[#475841]", "hover:text-[#3f403f]"], [1, "mt-6", "grid", "gap-4"], [1, "border", "border-[#ced0ce]", "bg-[#fcfcfb]", "p-4"], [1, "border", "border-dashed", "border-[#ced0ce]", "bg-[#f8f8f7]", "p-8", "text-center"], [1, "bg-[#f7f8f7]", "p-6", "lg:p-8"], [1, "grid", "grid-cols-1", "gap-4", "xl:grid-cols-[120px_minmax(0,1fr)_170px_160px_120px]", "xl:items-center"], [1, "flex", "h-28", "items-center", "justify-center", "border", "border-[#ced0ce]", "bg-[#e6e8e6]", "text-[#475841]"], [1, "w-full", "h-full", "object-contain", 3, "src", "alt"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-lg", "font-semibold", "tracking-tight", "text-[#3f403f]"], [1, "border", "border-red-600", "bg-red-50", "px-2", "py-1", "text-[11px]", "font-bold", "uppercase", "tracking-[0.12em]", "text-red-700"], [1, "border", "border-[#475841]", "bg-[#475841]", "px-2", "py-1", "text-[11px]", "font-bold", "uppercase", "tracking-[0.12em]", "text-white"], [1, "border", "border-[#9fb8ad]", "bg-[#eaf1ed]", "px-2", "py-1", "text-[11px]", "font-bold", "uppercase", "tracking-[0.12em]", "text-[#475841]"], [1, "mt-1", "text-sm", "text-[#6b6d6b]"], [1, "mt-3", "text-sm", "font-medium", "text-[#475841]"], [1, "mt-3", "flex", "items-center", "gap-2", "text-xs", "text-[#6b6d6b]"], [1, "border", "border-[#ced0ce]", "bg-white", "px-2", "py-1"], [1, "xl:text-center"], [1, "text-xs", "uppercase", "tracking-[0.16em]", "text-[#6b6d6b]"], [1, "mt-2", "text-xs", "text-[#6b6d6b]", "line-through"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-[#475841]"], [1, "text-xs", "uppercase", "tracking-[0.16em]", "text-[#6b6d6b]", "xl:text-center"], [1, "mt-2", "inline-flex", "w-full", "items-center", "justify-between", "border", "border-[#ced0ce]", "bg-white", "xl:w-[160px]"], ["aria-label", "Disminuir cantidad", 1, "inline-flex", "h-11", "w-11", "items-center", "justify-center", "border-r", "border-[#ced0ce]", "text-[#475841]", "hover:bg-[#e6e8e6]", "disabled:opacity-50", 3, "click", "disabled"], [1, "flex-1", "text-center", "text-sm", "font-semibold", "text-[#3f403f]"], ["aria-label", "Aumentar cantidad", 1, "inline-flex", "h-11", "w-11", "items-center", "justify-center", "border-l", "border-[#ced0ce]", "text-[#475841]", "hover:bg-[#e6e8e6]", "disabled:opacity-50", 3, "click", "disabled"], [1, "flex", "items-end", "justify-between", "xl:block", "xl:text-right"], [1, "mt-2", "text-2xl", "font-semibold", "tracking-tight", "text-[#3f403f]"], ["aria-label", "Eliminar producto", 1, "mt-0", "inline-flex", "items-center", "gap-2", "text-sm", "font-semibold", "text-[#6b6d6b]", "hover:text-[#475841]", "xl:mt-4", 3, "click"], [1, "text-5xl"], [1, "mx-auto", "flex", "h-16", "w-16", "items-center", "justify-center", "border", "border-[#ced0ce]", "bg-white", "text-[#475841]"], [1, "text-3xl"], [1, "mt-5", "text-2xl", "font-semibold", "tracking-tight", "text-[#3f403f]"], ["routerLink", "/", 1, "mt-6", "inline-flex", "items-center", "justify-center", "border", "border-[#9fb8ad]", "bg-[#9fb8ad]", "px-5", "py-3", "text-sm", "font-semibold", "text-[#475841]", "hover:bg-[#b5c8bf]"], [1, "border", "border-dashed", "border-[#ced0ce]", "bg-[#f7f8f7]", "p-6"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "flex", "w-full", "max-w-xl", "flex-col", "gap-2", "sm:flex-row"], ["type", "text", "placeholder", "Ingresa tu c\u00F3digo", 1, "h-11", "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "text-sm", "text-[#3f403f]", "outline-none", "placeholder:text-[#9aa19a]", 3, "ngModelChange", "ngModel"], [1, "inline-flex", "h-11", "items-center", "justify-center", "border", "border-[#475841]", "bg-[#475841]", "px-5", "text-sm", "font-semibold", "text-white", "hover:bg-[#5b6d54]", 3, "click"], [1, "mt-4", "inline-flex", "items-center", "gap-2", "border", "border-[#9fb8ad]", "bg-[#eaf1ed]", "px-3", "py-2", "text-sm", "font-medium", "text-[#475841]"], [1, "mt-4", "inline-flex", "items-center", "gap-2", "border", "border-red-500", "bg-red-50", "px-3", "py-2", "text-sm", "font-medium", "text-red-700"], [1, "border", "border-[#ced0ce]", "bg-white", "p-6"], [1, "mt-5", "space-y-4", "border-b", "border-[#ced0ce]", "pb-5", "text-sm", "text-[#3f403f]"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "font-medium"], [1, "border", "border-[#9fb8ad]", "bg-[#eaf1ed]", "px-2", "py-1", "text-xs", "font-bold", "uppercase", "tracking-[0.12em]", "text-[#475841]"], [1, "mt-5", "space-y-3"], [1, "flex", "items-end", "justify-between", "gap-3"], [1, "text-sm", "text-[#6b6d6b]"], [1, "text-xs", "text-[#6b6d6b]"], [1, "text-3xl", "font-semibold", "tracking-tight", "text-[#475841]"], [1, "border", "border-red-500", "bg-red-50", "p-4", "text-sm", "text-red-700"], ["routerLink", "/checkout", 1, "inline-flex", "w-full", "items-center", "justify-center", "border", "border-[#475841]", "bg-[#475841]", "px-5", "py-3", "text-sm", "font-semibold", "text-white", "hover:bg-[#5b6d54]"], ["routerLink", "/", 1, "inline-flex", "w-full", "items-center", "justify-center", "border", "border-[#ced0ce]", "bg-white", "px-5", "py-3", "text-sm", "font-semibold", "text-[#3f403f]", "hover:bg-[#e6e8e6]"], [1, "mt-4", "border", "border-[#ced0ce]", "bg-[#9fb8ad]", "p-5", "text-[#475841]"], [1, "flex", "items-start", "gap-3"], [1, "text-xl"], [1, "text-sm", "font-semibold", "uppercase", "tracking-[0.16em]"], [1, "mt-2", "text-sm", "leading-6"], [1, "mt-4", "border", "border-[#ced0ce]", "bg-white", "p-5"], [1, "text-xl", "text-[#475841]"], [1, "text-sm", "font-semibold", "uppercase", "tracking-[0.16em]", "text-[#475841]"], [1, "mt-2", "text-sm", "leading-6", "text-[#6b6d6b]"], [1, "mt-4", "border", "border-[#ced0ce]", "bg-yellow-50", "p-5"], [1, "font-medium", "text-[#475841]"], [1, "font-semibold", "text-[#475841]"], [1, "mt-3", "inline-flex", "items-center", "justify-center", "border", "border-[#475841]", "bg-[#475841]", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-[#5b6d54]", 3, "click"]],
    template: function CartPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Shopping cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Tu carrito de compras");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Revisa tus productos, aplica un cup\u00F3n y contin\u00FAa a checkout.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " \u2190 Seguir comprando ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](14, CartPageComponent_For_15_Template, 47, 25, "article", 9, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CartPageComponent_Conditional_17_Template, 10, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CartPageComponent_Conditional_19_Template, 15, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CartPageComponent_Conditional_20_Template, 71, 38, "aside", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 2, ctx.cart$)) == null ? null : tmp_0_0.items) || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](17, ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 4, ctx.cart$)) == null ? null : tmp_1_0.items == null ? null : tmp_1_0.items.length) === 0 ? 17 : 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](20, ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 6, ctx.cart$)) == null ? null : tmp_2_0.items == null ? null : tmp_2_0.items.length) ? 20 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6985:
/*!****************************************************************!*\
  !*** ./store-angular/src/app/pages/checkout-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutPageComponent: () => (/* binding */ CheckoutPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cart.service */ 7421);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 9117);
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/checkout.service */ 4835);










const _forTrack0 = ($index, $item) => $item.productoId;
const _c0 = () => [];
function CheckoutPageComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
function CheckoutPageComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Debes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "iniciar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " para poder completar tu compra. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CheckoutPageComponent_Conditional_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 64)(1, "div", 21)(2, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "N\u00FAmero de tarjeta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Conditional_143_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.tarjeta_dummy.numero, $event) || (ctx_r0.tarjeta_dummy.numero = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Titular");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Conditional_143_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.tarjeta_dummy.titular, $event) || (ctx_r0.tarjeta_dummy.titular = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 97)(10, "div")(11, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Conditional_143_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.tarjeta_dummy.vencimiento, $event) || (ctx_r0.tarjeta_dummy.vencimiento = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div")(15, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "CVV");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Conditional_143_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.tarjeta_dummy.cvv, $event) || (ctx_r0.tarjeta_dummy.cvv = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.tarjeta_dummy.numero);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.authService.isAuthenticated);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.tarjeta_dummy.titular);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.authService.isAuthenticated);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.tarjeta_dummy.vencimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.authService.isAuthenticated);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.tarjeta_dummy.cvv);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.authService.isAuthenticated);
  }
}
function CheckoutPageComponent_For_189_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 103);
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r3.producto.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", item_r3.producto.nombre);
  }
}
function CheckoutPageComponent_For_189_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\uD83D\uDCE6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CheckoutPageComponent_For_189_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 75)(1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CheckoutPageComponent_For_189_Conditional_2_Template, 1, 2, "img", 103)(3, CheckoutPageComponent_For_189_Conditional_3_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 104)(5, "div", 105)(6, "div")(7, "h3", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](2, (item_r3.producto == null ? null : item_r3.producto.imagen) ? 2 : 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.producto == null ? null : item_r3.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Cant. ", item_r3.cantidad, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 4, item_r3.subtotal, "1.2-2"), "");
  }
}
function CheckoutPageComponent_Conditional_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "GRATIS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CheckoutPageComponent_Conditional_197_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 3, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r0.cart$)) == null ? null : tmp_1_0.subtotalEnvios, "1.2-2"), "");
  }
}
function CheckoutPageComponent_Conditional_212_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 82)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Descuento por cup\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("- S/.", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 3, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r0.cart$)) == null ? null : tmp_1_0.descuentoCupon, "1.2-2"), "");
  }
}
class CheckoutPageComponent {
  cartService;
  authService;
  checkoutService;
  router;
  cart$;
  checkoutData = {
    envio: {
      nombre_completo: '',
      email: '',
      telefono: '',
      pais: 'Perú',
      region: 'Lima',
      ciudad: '',
      codigo_postal: '',
      direccion: '',
      numero: '',
      apartamento: '',
      metodo_envio: 'estándar'
    },
    pago: {
      metodo_pago: 'Tarjeta de crédito'
    }
  };
  tarjeta_dummy = {
    numero: '',
    titular: '',
    vencimiento: '',
    cvv: ''
  };
  loading = false;
  error = '';
  constructor(cartService, authService, checkoutService, router) {
    this.cartService = cartService;
    this.authService = authService;
    this.checkoutService = checkoutService;
    this.router = router;
    this.cart$ = this.cartService.cart$;
  }
  ngOnInit() {
    if (!this.cartService.hasLocalCart() && this.cartService.snapshot.totalItems === 0) {
      this.router.navigate(['/']);
      return;
    }
    if (this.hasOutOfStockItems()) {
      this.router.navigate(['/carrito']);
    }
  }
  getSubtotalSinIGV() {
    const total = this.cartService.snapshot.total;
    return total / 1.18;
  }
  getIGV() {
    const total = this.cartService.snapshot.total;
    return total - total / 1.18;
  }
  hasOutOfStockItems() {
    return this.cartService.snapshot.items.some(item => !item.producto?.disponible);
  }
  onSubmit() {
    if (!this.authService.isAuthenticated) {
      this.error = 'Debes iniciar sesión para completar tu compra.';
      return;
    }
    if (this.hasOutOfStockItems()) {
      this.error = 'Hay productos agotados en tu carrito. Por favor, revísalos antes de continuar.';
      return;
    }
    this.loading = true;
    this.error = '';
    const payload = {
      envio: this.checkoutData.envio,
      pago: this.checkoutData.pago,
      couponCode: this.cartService.snapshot.cupon?.codigo || ''
    };
    this.checkoutService.placeOrder(payload).subscribe({
      next: res => {
        this.loading = false;
        this.cartService.loadCart(); // Vuelve a cargar el carrito para que aparezca vacío localmente
        this.router.navigate(['/confirmacion', res.ordenId]);
      },
      error: err => {
        this.loading = false;
        this.error = err.error?.error || 'Ocurrió un error al procesar tu compra. Por favor, intenta de nuevo.';
      }
    });
  }
  static ɵfac = function CheckoutPageComponent_Factory(t) {
    return new (t || CheckoutPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_checkout_service__WEBPACK_IMPORTED_MODULE_2__.CheckoutService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CheckoutPageComponent,
    selectors: [["app-checkout-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 233,
    vars: 64,
    consts: [[1, "border", "border-[#ced0ce]", "bg-white"], [1, "grid", "grid-cols-1", "lg:grid-cols-[1.55fr_0.75fr]"], [1, "border-b", "border-[#ced0ce]", "p-6", "lg:border-b-0", "lg:border-r", "lg:p-8", "xl:p-10"], [1, "flex", "flex-col", "gap-5", "border-b", "border-[#ced0ce]", "pb-6", "sm:flex-row", "sm:items-end", "sm:justify-between"], [1, "text-xs", "font-bold", "uppercase", "tracking-[0.18em]", "text-[#475841]"], [1, "mt-2", "text-3xl", "font-semibold", "tracking-tight", "text-[#3f403f]"], [1, "mt-2", "max-w-2xl", "text-sm", "leading-6", "text-[#6b6d6b]"], [1, "grid", "grid-cols-3", "gap-px", "border", "border-[#ced0ce]", "bg-[#ced0ce]", "text-xs", "font-medium", "text-[#475841]", "sm:min-w-[360px]"], [1, "bg-[#9fb8ad]", "px-4", "py-3", "text-center", "font-semibold"], [1, "bg-[#475841]", "px-4", "py-3", "text-center", "font-semibold", "text-white"], [1, "bg-[#e6e8e6]", "px-4", "py-3", "text-center"], [1, "mt-6", "space-y-6", 3, "ngSubmit"], [1, "border", "border-red-500", "bg-red-50", "p-4", "text-sm", "text-red-700"], [1, "border", "border-yellow-500", "bg-yellow-50", "p-4", "text-sm", "text-yellow-800"], [1, "border", "border-[#ced0ce]", "bg-[#f8f9f8]"], [1, "border-b", "border-[#ced0ce]", "px-5", "py-4"], [1, "flex", "items-center", "gap-3"], [1, "inline-flex", "h-8", "w-8", "items-center", "justify-center", "border", "border-[#475841]", "bg-[#475841]", "text-sm", "font-semibold", "text-white"], [1, "text-lg", "font-semibold", "tracking-tight", "text-[#3f403f]"], [1, "text-sm", "text-[#6b6d6b]"], [1, "grid", "grid-cols-1", "gap-4", "p-5", "md:grid-cols-2"], [1, "md:col-span-2"], ["for", "nombre-completo", 1, "mb-2", "block", "text-sm", "font-medium", "text-[#3f403f]"], ["id", "nombre-completo", "name", "nombre_completo", "required", "", "type", "text", "placeholder", "Ingresa tu nombre completo", 1, "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "py-3", "text-sm", "text-[#3f403f]", "outline-none", "placeholder:text-[#8a8d8a]", "focus:border-[#9fb8ad]", "disabled:bg-gray-100", 3, "ngModelChange", "ngModel", "disabled"], ["for", "email", 1, "mb-2", "block", "text-sm", "font-medium", "text-[#3f403f]"], ["id", "email", "name", "email", "required", "", "type", "email", "placeholder", "correo@ejemplo.com", 1, "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "py-3", "text-sm", "text-[#3f403f]", "outline-none", "placeholder:text-[#8a8d8a]", "focus:border-[#9fb8ad]", "disabled:bg-gray-100", 3, "ngModelChange", "ngModel", "disabled"], ["for", "telefono", 1, "mb-2", "block", "text-sm", "font-medium", "text-[#3f403f]"], ["id", "telefono", "name", "telefono", "required", "", "type", "tel", "placeholder", "987 654 321", 1, "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "py-3", "text-sm", "text-[#3f403f]", "outline-none", "placeholder:text-[#8a8d8a]", "focus:border-[#9fb8ad]", "disabled:bg-gray-100", 3, "ngModelChange", "ngModel", "disabled"], ["for", "pais", 1, "mb-2", "block", "text-sm", "font-medium", "text-[#3f403f]"], ["id", "pais", "name", "pais", 1, "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "py-3", "text-sm", "text-[#3f403f]", "outline-none", "focus:border-[#9fb8ad]", "disabled:bg-gray-100", 3, "ngModelChange", "ngModel", "disabled"], ["value", "Per\u00FA"], ["value", "Chile"], ["value", "Ecuador"], ["for", "region", 1, "mb-2", "block", "text-sm", "font-medium", "text-[#3f403f]"], ["id", "region", "name", "region", 1, "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "py-3", "text-sm", "text-[#3f403f]", "outline-none", "focus:border-[#9fb8ad]", "disabled:bg-gray-100", 3, "ngModelChange", "ngModel", "disabled"], ["value", "Lima"], ["value", "Arequipa"], ["value", "La Libertad"], ["for", "ciudad", 1, "mb-2", "block", "text-sm", "font-medium", "text-[#3f403f]"], ["id", "ciudad", "name", "ciudad", "required", "", "type", "text", "placeholder", "Ciudad", 1, "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "py-3", "text-sm", "text-[#3f403f]", "outline-none", "placeholder:text-[#8a8d8a]", "focus:border-[#9fb8ad]", "disabled:bg-gray-100", 3, "ngModelChange", "ngModel", "disabled"], ["for", "codigo-postal", 1, "mb-2", "block", "text-sm", "font-medium", "text-[#3f403f]"], ["id", "codigo-postal", "name", "codigo_postal", "required", "", "type", "text", "placeholder", "C\u00F3digo postal", 1, "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "py-3", "text-sm", "text-[#3f403f]", "outline-none", "placeholder:text-[#8a8d8a]", "focus:border-[#9fb8ad]", "disabled:bg-gray-100", 3, "ngModelChange", "ngModel", "disabled"], ["for", "direccion", 1, "mb-2", "block", "text-sm", "font-medium", "text-[#3f403f]"], ["id", "direccion", "name", "direccion", "required", "", "type", "text", "placeholder", "Calle, avenida o jir\u00F3n", 1, "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "py-3", "text-sm", "text-[#3f403f]", "outline-none", "placeholder:text-[#8a8d8a]", "focus:border-[#9fb8ad]", "disabled:bg-gray-100", 3, "ngModelChange", "ngModel", "disabled"], ["for", "numero", 1, "mb-2", "block", "text-sm", "font-medium", "text-[#3f403f]"], ["id", "numero", "name", "numero", "required", "", "type", "text", "placeholder", "N\u00FAmero", 1, "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "py-3", "text-sm", "text-[#3f403f]", "outline-none", "placeholder:text-[#8a8d8a]", "focus:border-[#9fb8ad]", "disabled:bg-gray-100", 3, "ngModelChange", "ngModel", "disabled"], ["for", "apartamento", 1, "mb-2", "block", "text-sm", "font-medium", "text-[#3f403f]"], ["id", "apartamento", "name", "apartamento", "type", "text", "placeholder", "Piso, interior o referencia", 1, "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "py-3", "text-sm", "text-[#3f403f]", "outline-none", "placeholder:text-[#8a8d8a]", "focus:border-[#9fb8ad]", "disabled:bg-gray-100", 3, "ngModelChange", "ngModel", "disabled"], [1, "grid", "gap-3", "p-5"], [1, "flex", "cursor-pointer", "items-start", "justify-between", "gap-4", "border", "border-[#475841]", "bg-[#f4f7f4]", "p-4", "transition-colors", "hover:border-[#9fb8ad]"], [1, "flex", "items-start", "gap-3"], ["type", "radio", "name", "metodo_envio", "value", "est\u00E1ndar", 1, "mt-1", "h-4", "w-4", "accent-[#475841]", 3, "ngModelChange", "ngModel", "disabled"], [1, "flex", "items-center", "gap-2"], [1, "text-sm", "font-semibold", "text-[#3f403f]"], [1, "border", "border-[#9fb8ad]", "bg-[#eaf1ed]", "px-2", "py-1", "text-[11px]", "font-bold", "uppercase", "tracking-[0.12em]", "text-[#475841]"], [1, "mt-1", "text-sm", "text-[#6b6d6b]"], [1, "text-sm", "font-semibold", "text-[#475841]"], [1, "flex", "cursor-pointer", "items-start", "justify-between", "gap-4", "border", "border-[#ced0ce]", "bg-white", "p-4", "transition-colors", "hover:border-[#9fb8ad]"], ["type", "radio", "name", "metodo_envio", "value", "express", 1, "mt-1", "h-4", "w-4", "accent-[#475841]", 3, "ngModelChange", "ngModel", "disabled"], [1, "border", "border-[#475841]", "bg-[#f4f7f4]", "p-4", "transition-colors", "hover:border-[#9fb8ad]"], [1, "flex", "items-start", "justify-between", "gap-4"], ["type", "radio", "name", "metodo_pago", "value", "Tarjeta de cr\u00E9dito", 1, "mt-1", "h-4", "w-4", "accent-[#475841]", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-base"], [1, "text-xs", "font-semibold", "uppercase", "tracking-[0.16em]", "text-[#475841]"], [1, "mt-4", "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], ["type", "radio", "name", "metodo_pago", "value", "Transferencia bancaria", 1, "mt-1", "h-4", "w-4", "accent-[#475841]", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-xs", "font-semibold", "uppercase", "tracking-[0.16em]", "text-[#6b6d6b]"], ["type", "radio", "name", "metodo_pago", "value", "Pago contra entrega", 1, "mt-1", "h-4", "w-4", "accent-[#475841]", 3, "ngModelChange", "ngModel", "disabled"], [1, "flex", "flex-col", "gap-3", "border-t", "border-[#ced0ce]", "pt-6", "sm:flex-row", "sm:items-center", "sm:justify-between"], ["routerLink", "/carrito", 1, "inline-flex", "items-center", "justify-center", "gap-2", "border", "border-[#ced0ce]", "bg-white", "px-5", "py-3", "text-sm", "font-semibold", "text-[#3f403f]", "transition-colors", "hover:bg-[#ced0ce]"], ["type", "submit", 1, "inline-flex", "items-center", "justify-center", "gap-2", "border", "border-[#475841]", "bg-[#475841]", "px-6", "py-3", "text-sm", "font-semibold", "text-white", "transition-colors", "hover:bg-[#5b6d54]", "disabled:opacity-50", 3, "disabled"], [1, "bg-[#f6f7f6]", "p-6", "lg:p-8"], [1, "sticky", "top-6", "space-y-5"], [1, "mt-2", "text-2xl", "font-semibold", "tracking-tight", "text-[#3f403f]"], [1, "divide-y", "divide-[#ced0ce]"], [1, "flex", "gap-4", "px-5", "py-4"], [1, "px-5", "py-4"], [1, "flex", "items-center", "justify-between", "gap-3", "text-sm"], [1, "text-[#6b6d6b]"], [1, "border", "border-[#9fb8ad]", "bg-[#eaf1ed]", "px-2", "py-1", "text-xs", "font-bold", "uppercase", "tracking-[0.12em]", "text-[#475841]"], [1, "border", "border-[#ced0ce]", "bg-white", "p-5"], [1, "space-y-3", "text-sm"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "font-semibold", "text-[#3f403f]"], [1, "border-t", "border-[#ced0ce]", "pt-3"], [1, "text-base", "font-semibold", "text-[#3f403f]"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-[#475841]"], [1, "mt-2", "text-xs", "leading-5", "text-[#6b6d6b]"], [1, "border", "border-[#ced0ce]", "bg-[#475841]", "p-5", "text-[#e6e8e6]"], [1, "text-lg"], [1, "text-sm", "font-semibold"], [1, "mt-1", "text-sm", "leading-6", "text-[#d7dbd7]"], ["routerLink", "/auth", 1, "font-bold", "underline"], ["for", "tarjeta", 1, "mb-2", "block", "text-sm", "font-medium", "text-[#3f403f]"], ["id", "tarjeta", "name", "tarjeta", "required", "", "type", "text", "placeholder", "1234 5678 9012 3456", 1, "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "py-3", "text-sm", "text-[#3f403f]", "outline-none", "focus:border-[#9fb8ad]", "disabled:bg-gray-100", 3, "ngModelChange", "ngModel", "disabled"], ["for", "titular", 1, "mb-2", "block", "text-sm", "font-medium", "text-[#3f403f]"], ["id", "titular", "name", "titular", "required", "", "type", "text", "placeholder", "Nombre en la tarjeta", 1, "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "py-3", "text-sm", "text-[#3f403f]", "outline-none", "focus:border-[#9fb8ad]", "disabled:bg-gray-100", 3, "ngModelChange", "ngModel", "disabled"], [1, "grid", "grid-cols-2", "gap-4"], ["for", "vencimiento", 1, "mb-2", "block", "text-sm", "font-medium", "text-[#3f403f]"], ["id", "vencimiento", "name", "vencimiento", "required", "", "type", "text", "placeholder", "MM/AA", 1, "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "py-3", "text-sm", "text-[#3f403f]", "outline-none", "focus:border-[#9fb8ad]", "disabled:bg-gray-100", 3, "ngModelChange", "ngModel", "disabled"], ["for", "cvv", 1, "mb-2", "block", "text-sm", "font-medium", "text-[#3f403f]"], ["id", "cvv", "name", "cvv", "required", "", "type", "text", "placeholder", "123", 1, "w-full", "border", "border-[#ced0ce]", "bg-white", "px-4", "py-3", "text-sm", "text-[#3f403f]", "outline-none", "focus:border-[#9fb8ad]", "disabled:bg-gray-100", 3, "ngModelChange", "ngModel", "disabled"], [1, "flex", "h-16", "w-16", "items-center", "justify-center", "border", "border-[#ced0ce]", "bg-[#e6e8e6]", "text-[#475841]"], [1, "w-full", "h-full", "object-contain", 3, "src", "alt"], [1, "min-w-0", "flex-1"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "text-sm", "font-semibold", "text-[#3f403f]", "line-clamp-1"], [1, "mt-1", "text-xs", "text-[#6b6d6b]"], [1, "text-2xl"], [1, "font-semibold", "text-[#475841]"]],
    template: function CheckoutPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Checkout seguro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Finaliza tu compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Completa tus datos de env\u00EDo y elige tu m\u00E9todo de pago. El precio ya incluye IGV y el resumen lo desglosa autom\u00E1ticamente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7)(12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "1. Carrito");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "2. Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "3. Confirmaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CheckoutPageComponent_Template_form_ngSubmit_18_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CheckoutPageComponent_Conditional_19_Template, 2, 1, "div", 12)(20, CheckoutPageComponent_Conditional_20_Template, 5, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "section", 14)(22, "div", 15)(23, "div", 16)(24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div")(27, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Direcci\u00F3n de env\u00EDo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Usaremos estos datos para coordinar la entrega de tu pedido.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 20)(32, "div", 21)(33, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Nombre completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_input_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.envio.nombre_completo, $event) || (ctx.checkoutData.envio.nombre_completo = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div")(37, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_input_ngModelChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.envio.email, $event) || (ctx.checkoutData.envio.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div")(41, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_input_ngModelChange_43_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.envio.telefono, $event) || (ctx.checkoutData.envio.telefono = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div")(45, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Pa\u00EDs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_select_ngModelChange_47_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.envio.pais, $event) || (ctx.checkoutData.envio.pais = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Per\u00FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Chile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Ecuador");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div")(55, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Regi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_select_ngModelChange_57_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.envio.region, $event) || (ctx.checkoutData.envio.region = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Lima");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Arequipa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "La Libertad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div")(65, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Ciudad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_input_ngModelChange_67_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.envio.ciudad, $event) || (ctx.checkoutData.envio.ciudad = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div")(69, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "C\u00F3digo postal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_input_ngModelChange_71_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.envio.codigo_postal, $event) || (ctx.checkoutData.envio.codigo_postal = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 21)(73, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_input_ngModelChange_75_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.envio.direccion, $event) || (ctx.checkoutData.envio.direccion = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div")(77, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "N\u00FAmero");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_input_ngModelChange_79_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.envio.numero, $event) || (ctx.checkoutData.envio.numero = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div")(81, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Apartamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_input_ngModelChange_83_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.envio.apartamento, $event) || (ctx.checkoutData.envio.apartamento = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "section", 0)(85, "div", 15)(86, "div", 16)(87, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div")(90, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "M\u00E9todo de env\u00EDo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Selecciona la opci\u00F3n que mejor se adapte a tu urgencia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 48)(95, "label", 49)(96, "div", 50)(97, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_input_ngModelChange_97_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.envio.metodo_envio, $event) || (ctx.checkoutData.envio.metodo_envio = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div")(99, "div", 52)(100, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Env\u00EDo est\u00E1ndar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "GRATIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Llega entre 3 a 5 d\u00EDas h\u00E1biles.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "S/.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "label", 57)(109, "div", 50)(110, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_input_ngModelChange_110_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.envio.metodo_envio, $event) || (ctx.checkoutData.envio.metodo_envio = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div")(112, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Env\u00EDo express");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Llega en 24 a 48 horas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "S/.24");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "section", 0)(119, "div", 15)(120, "div", 16)(121, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div")(124, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "M\u00E9todo de pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "Elige c\u00F3mo deseas completar tu compra.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 48)(129, "label", 59)(130, "div", 60)(131, "div", 50)(132, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_input_ngModelChange_132_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.pago.metodo_pago, $event) || (ctx.checkoutData.pago.metodo_pago = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div")(134, "div", 52)(135, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Tarjeta de cr\u00E9dito");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "\uD83D\uDCB3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "Visa, Mastercard y American Express.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "Recomendado");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](143, CheckoutPageComponent_Conditional_143_Template, 18, 8, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "label", 57)(145, "div", 50)(146, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_input_ngModelChange_146_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.pago.metodo_pago, $event) || (ctx.checkoutData.pago.metodo_pago = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div")(148, "div", 52)(149, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Transferencia bancaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "\uD83C\uDFE6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, "Recibir\u00E1s los datos de la cuenta al confirmar tu pedido.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, "Manual");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "label", 57)(158, "div", 50)(159, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutPageComponent_Template_input_ngModelChange_159_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.checkoutData.pago.metodo_pago, $event) || (ctx.checkoutData.pago.metodo_pago = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div")(161, "div", 52)(162, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Pago contra entrega");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "\uD83E\uDD1D");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, "Paga al recibir tu pedido en zonas seleccionadas de Lima.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "Disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "div", 68)(171, "a", 69)(172, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "\u2190");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, " Volver al carrito ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "aside", 71)(180, "div", 72)(181, "div", 0)(182, "div", 15)(183, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "Resumen de orden");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "h2", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "Tu compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](188, CheckoutPageComponent_For_189_Template, 14, 7, "div", 75, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](190, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "div", 76)(192, "div", 77)(193, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "Env\u00EDo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](195, CheckoutPageComponent_Conditional_195_Template, 2, 0, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](196, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](197, CheckoutPageComponent_Conditional_197_Template, 4, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "div", 80)(199, "div", 81)(200, "div", 82)(201, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, "Subtotal sin IGV");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](205, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "div", 82)(207, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "IGV (18%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](211, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](212, CheckoutPageComponent_Conditional_212_Template, 7, 6, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](213, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "div", 84)(215, "div", 82)(216, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, "Total a pagar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](220, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](221, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "El subtotal corresponde al precio sin IGV. El total ya incluye el impuesto peruano.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "div", 88)(225, "div", 50)(226, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](227, "\uD83D\uDEE1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "div")(229, "p", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](230, "Compra protegida");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "p", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "Tus datos se procesan en una pasarela segura y recibir\u00E1s confirmaci\u00F3n inmediata al completar el pago.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        let tmp_38_0;
        let tmp_39_0;
        let tmp_42_0;
        let tmp_43_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](19, ctx.error ? 19 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](20, !ctx.authService.isAuthenticated ? 20 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("opacity-50", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.envio.nombre_completo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.envio.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.envio.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.envio.pais);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.envio.region);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.envio.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.envio.codigo_postal);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.envio.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.envio.numero);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.envio.apartamento);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("opacity-50", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.envio.metodo_envio);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.envio.metodo_envio);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("opacity-50", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.pago.metodo_pago);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](143, ctx.checkoutData.pago.metodo_pago === "Tarjeta de cr\u00E9dito" ? 143 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.pago.metodo_pago);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutData.pago.metodo_pago);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authService.isAuthenticated || ctx.loading || ctx.hasOutOfStockItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Procesando..." : "Confirmar y pagar", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](((tmp_38_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](190, 46, ctx.cart$)) == null ? null : tmp_38_0.items) || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](63, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](195, ((tmp_39_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](196, 48, ctx.cart$)) == null ? null : tmp_39_0.subtotalEnvios) === 0 ? 195 : 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](205, 50, ctx.getSubtotalSinIGV(), "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](211, 53, ctx.getIGV(), "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](212, ((tmp_42_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](213, 56, ctx.cart$)) == null ? null : tmp_42_0.descuentoCupon) ? 212 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](221, 60, (tmp_43_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](220, 58, ctx.cart$)) == null ? null : tmp_43_0.total, "1.2-2"), "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7798:
/*!***************************************************************!*\
  !*** ./store-angular/src/app/pages/coupons-page.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CouponsPageComponent: () => (/* binding */ CouponsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_coupon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/coupon.service */ 8641);





function CouponsPageComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 9)(1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cargando cupones...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function CouponsPageComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 9)(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function CouponsPageComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 12)(1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No hay cupones activos actualmente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Vuelve pronto para ver nuevas ofertas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function CouponsPageComponent_section_13_div_1_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Descuento: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const coupon_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", coupon_r2.valor, "%");
  }
}
function CouponsPageComponent_section_13_div_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Descuento: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const coupon_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("S/.", coupon_r2.valor, "");
  }
}
function CouponsPageComponent_section_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div")(3, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\uD83C\uDF9F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CouponsPageComponent_section_13_div_1_p_10_Template, 4, 1, "p", 22)(11, CouponsPageComponent_section_13_div_1_p_11_Template, 4, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " V\u00E1lido desde: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " V\u00E1lido hasta: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const coupon_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](coupon_r2.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](coupon_r2.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r2.tipo === "porcentaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r2.tipo === "monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 6, coupon_r2.fechaInicio, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 9, coupon_r2.fechaFin, "dd/MM/yyyy"));
  }
}
function CouponsPageComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CouponsPageComponent_section_13_div_1_Template, 22, 12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.coupons);
  }
}
class CouponsPageComponent {
  couponService;
  loading = true;
  error = '';
  coupons = [];
  constructor(couponService) {
    this.couponService = couponService;
  }
  ngOnInit() {
    this.loadCoupons();
  }
  loadCoupons() {
    this.loading = true;
    this.couponService.getActiveCoupons().subscribe({
      next: response => {
        this.coupons = response.coupons || [];
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al cargar los cupones';
        this.loading = false;
      }
    });
  }
  static ɵfac = function CouponsPageComponent_Factory(t) {
    return new (t || CouponsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_coupon_service__WEBPACK_IMPORTED_MODULE_0__.CouponService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CouponsPageComponent,
    selectors: [["app-coupons-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 4,
    consts: [[1, "relative", "mx-auto", "w-full", "max-w-[1440px]", "px-6", "py-8", "lg:px-10", "lg:py-10"], [1, "mb-10"], [1, "mb-5", "flex", "flex-col", "justify-between", "gap-4", "sm:flex-row", "sm:items-end"], [1, "text-xs", "font-bold", "uppercase", "tracking-[0.18em]", "text-[#475841]"], [1, "mt-2", "text-3xl", "font-semibold", "tracking-tight", "text-[#3f403f]"], ["routerLink", "/", 1, "text-sm", "font-semibold", "text-[#475841]", "hover:text-[#3f403f]"], ["class", "border border-[#ced0ce] bg-white p-8 text-center", 4, "ngIf"], ["class", "border border-[#ced0ce] bg-white p-16 text-center", 4, "ngIf"], ["class", "grid gap-6", 4, "ngIf"], [1, "border", "border-[#ced0ce]", "bg-white", "p-8", "text-center"], [1, "text-[#6b6d6b]"], [1, "text-red-600"], [1, "border", "border-[#ced0ce]", "bg-white", "p-16", "text-center"], [1, "text-[#6b6d6b]", "text-lg"], [1, "text-sm", "text-[#6b6d6b]", "mt-2"], [1, "grid", "gap-6"], ["class", "border border-[#ced0ce] bg-white p-6", 4, "ngFor", "ngForOf"], [1, "border", "border-[#ced0ce]", "bg-white", "p-6"], [1, "flex", "items-start", "justify-between", "gap-3", "mb-4"], [1, "mt-1", "text-lg", "font-semibold", "tracking-tight", "text-[#3f403f]"], [1, "text-2xl", "text-[#475841]"], [1, "space-y-2"], ["class", "text-sm text-[#6b6d6b]", 4, "ngIf"], [1, "text-xs", "text-[#6b6d6b]"], [1, "font-medium"], [1, "text-sm", "text-[#6b6d6b]"], [1, "text-[#475841]"]],
    template: function CouponsPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div")(4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cupones activos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Todos los cupones disponibles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u2190 Volver al inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CouponsPageComponent_section_10_Template, 3, 0, "section", 6)(11, CouponsPageComponent_section_11_Template, 3, 1, "section", 6)(12, CouponsPageComponent_section_12_Template, 5, 0, "section", 7)(13, CouponsPageComponent_section_13_Template, 2, 1, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.coupons.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.coupons.length > 0 && !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8280:
/*!************************************************************!*\
  !*** ./store-angular/src/app/pages/home-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageComponent: () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _components_product_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/product-card.component */ 1891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_store_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store-api.service */ 393);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 9117);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ 7421);









const _c0 = () => ["/"];
const _c1 = a0 => ({
  categoria: a0
});
function HomePageComponent_div_33_h2_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Ahorra S/.", ctx_r0.coupon.valor, "");
  }
}
function HomePageComponent_div_33_h2_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Ahorra ", ctx_r0.coupon.valor, "%");
  }
}
function HomePageComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div")(3, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Cup\u00F3n del d\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HomePageComponent_div_33_h2_5_Template, 2, 1, "h2", 30)(6, HomePageComponent_div_33_h2_6_Template, 2, 1, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\uD83C\uDF9F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Usa el c\u00F3digo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " en laptops y PCs seleccionadas.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Aplicar cup\u00F3n \u2192 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.coupon.tipo === "monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.coupon.tipo === "porcentaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.coupon.codigo);
  }
}
function HomePageComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div")(3, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Cup\u00F3n del d\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Sin cup\u00F3n activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "No hay cup\u00F3n del d\u00EDa disponible.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function HomePageComponent_a_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c1, cat_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cat_r2.nombre);
  }
}
function HomePageComponent_app_product_card_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-product-card", 37);
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", product_r3);
  }
}
class HomePageComponent {
  storeApi;
  auth;
  cart;
  categories = [];
  featuredProducts = [];
  coupon = null;
  totalProducts = 0;
  loading = true;
  user = null;
  cartCount = 0;
  constructor(storeApi, auth, cart) {
    this.storeApi = storeApi;
    this.auth = auth;
    this.cart = cart;
  }
  ngOnInit() {
    this.auth.loadSession();
    this.user = this.auth.snapshot;
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
    this.cart.cart$.subscribe(cart => {
      this.cartCount = cart.totalItems;
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)({
      categories: this.storeApi.getCategories(),
      featured: this.storeApi.getFeaturedProducts(),
      coupon: this.storeApi.getCouponOfTheDay()
    }).subscribe({
      next: ({
        categories,
        featured,
        coupon
      }) => {
        this.categories = categories;
        this.featuredProducts = featured.productos.filter(p => p.disponible);
        this.coupon = coupon?.coupon || null;
        this.totalProducts = featured.productos.length > 0 ? 450 : featured.productos.length;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  getUserName() {
    if (!this.user) return 'Iniciar sesión';
    const fullName = `${this.user.nombre} ${this.user.apellido || ''}`.replace(/\s/g, '');
    return fullName.length > 10 ? fullName.substring(0, 8) + '..' : fullName;
  }
  addToCart(product) {
    this.cart.addProduct(product);
  }
  logout() {
    this.auth.logout();
  }
  static ɵfac = function HomePageComponent_Factory(t) {
    return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_store_api_service__WEBPACK_IMPORTED_MODULE_1__.StoreApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HomePageComponent,
    selectors: [["app-home-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 51,
    vars: 5,
    consts: [[1, "relative", "mx-auto", "w-full", "max-w-[1440px]", "px-6", "py-8", "lg:px-10", "lg:py-10"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-[1.5fr_0.8fr]"], [1, "relative", "overflow-hidden", "border", "border-[#ced0ce]", "bg-[#475841]", "px-8", "py-10", "text-[#e6e8e6]", "lg:px-10", "lg:py-12"], [1, "absolute", "right-0", "top-0", "h-full", "w-1/2", "bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]"], [1, "relative", "max-w-2xl"], [1, "inline-flex", "border", "border-[#9fb8ad]", "px-3", "py-1", "text-xs", "font-bold", "uppercase", "tracking-[0.18em]", "text-[#ced0ce]"], [1, "mt-5", "max-w-xl", "text-4xl", "font-semibold", "tracking-tight", "sm:text-5xl"], [1, "mt-4", "max-w-lg", "text-sm", "leading-6", "text-[#d7dbd7]", "sm:text-base"], [1, "mt-7", "flex", "flex-col", "gap-3", "sm:flex-row"], ["routerLink", "/producto/1", 1, "inline-flex", "items-center", "justify-center", "border", "border-[#9fb8ad]", "bg-[#9fb8ad]", "px-5", "py-3", "text-sm", "font-semibold", "text-[#475841]", "hover:bg-[#b5c8bf]"], ["routerLink", "/cupones", 1, "inline-flex", "items-center", "justify-center", "border", "border-[#9fb8ad]", "px-5", "py-3", "text-sm", "font-semibold", "text-[#e6e8e6]", "hover:bg-[#5a6c53]"], [1, "mt-8", "grid", "grid-cols-3", "gap-px", "bg-[#70806a]", "border", "border-[#70806a]", "max-w-xl"], [1, "bg-[#475841]", "px-4", "py-4"], [1, "text-xl", "font-semibold", "tracking-tight"], [1, "mt-1", "text-xs", "text-[#ced0ce]"], [1, "grid", "gap-4"], ["class", "border border-[#ced0ce] bg-white p-6", 4, "ngIf"], [1, "border", "border-[#ced0ce]", "bg-[#9fb8ad]", "p-6", "text-[#475841]"], [1, "text-xs", "font-bold", "uppercase", "tracking-[0.18em]"], [1, "mt-4", "grid", "grid-cols-2", "gap-px", "bg-[#7f968c]", "border", "border-[#7f968c]", "text-sm"], ["class", "bg-[#e6e8e6] px-3 py-3 hover:bg-white", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [1, "mt-10"], [1, "mb-5", "flex", "flex-col", "justify-between", "gap-4", "sm:flex-row", "sm:items-end"], [1, "text-xs", "font-bold", "uppercase", "tracking-[0.18em]", "text-[#475841]"], [1, "mt-2", "text-3xl", "font-semibold", "tracking-tight", "text-[#3f403f]"], [1, "text-sm", "font-semibold", "text-[#475841]", "hover:text-[#3f403f]"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2", "xl:grid-cols-4"], [3, "product", 4, "ngFor", "ngForOf"], [1, "border", "border-[#ced0ce]", "bg-white", "p-6"], [1, "flex", "items-start", "justify-between", "gap-3"], ["class", "mt-2 text-2xl font-semibold tracking-tight text-[#3f403f]", 4, "ngIf"], [1, "text-xl", "text-[#475841]"], [1, "mt-3", "text-sm", "leading-6", "text-[#6b6d6b]"], [1, "font-semibold", "text-[#475841]"], [1, "mt-5", "inline-flex", "items-center", "gap-2", "text-sm", "font-semibold", "text-[#475841]", "hover:text-[#3f403f]"], [1, "mt-2", "text-2xl", "font-semibold", "tracking-tight", "text-[#3f403f]"], [1, "bg-[#e6e8e6]", "px-3", "py-3", "hover:bg-white", 3, "routerLink", "queryParams"], [3, "product"]],
    template: function HomePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Tecnolog\u00EDa destacada");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Encuentra tu pr\u00F3xima compra inteligente en electr\u00F3nica.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Laptops, PCs, routers, parlantes y accesorios con ofertas reales, env\u00EDos r\u00E1pidos y una experiencia de compra simple.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8)(12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Comprar ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Ver cupones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Productos activos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 12)(23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "24h");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Despacho promedio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 12)(28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "4.8/5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Clientes satisfechos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, HomePageComponent_div_33_Template, 16, 3, "div", 16)(34, HomePageComponent_div_34_Template, 9, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 17)(36, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Categor\u00EDas r\u00E1pidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, HomePageComponent_a_39_Template, 2, 6, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "section", 21)(41, "div", 22)(42, "div")(43, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Productos destacados");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Ofertas que s\u00ED provocan comprar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Ver todos los productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, HomePageComponent_app_product_card_50_Template, 1, 1, "app-product-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("+", ctx.totalProducts, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.coupon);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.coupon);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.featuredProducts);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _components_product_card_component__WEBPACK_IMPORTED_MODULE_0__.ProductCardComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1927:
/*!**************************************************************************!*\
  !*** ./store-angular/src/app/pages/order-confirmation-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderConfirmationPageComponent: () => (/* binding */ OrderConfirmationPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_store_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/store-api.service */ 393);






const _forTrack0 = ($index, $item) => $item.id;
function OrderConfirmationPageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cargando orden...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function OrderConfirmationPageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Volver al inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function OrderConfirmationPageComponent_Conditional_2_For_67_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 43);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r2.producto.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r2.producto.nombre);
  }
}
function OrderConfirmationPageComponent_Conditional_2_For_67_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\uD83D\uDCE6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function OrderConfirmationPageComponent_Conditional_2_For_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31)(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrderConfirmationPageComponent_Conditional_2_For_67_Conditional_2_Template, 1, 2, "img", 43)(3, OrderConfirmationPageComponent_Conditional_2_For_67_Conditional_3_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 45)(8, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 47)(11, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, (item_r2.producto == null ? null : item_r2.producto.imagen) ? 2 : 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.producto == null ? null : item_r2.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Cantidad: ", item_r2.cantidad, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 4, item_r2.subtotal, "1.2-2"), "");
  }
}
function OrderConfirmationPageComponent_Conditional_2_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Ref: ", ctx_r0.orden.envio.apartamento, "");
  }
}
function OrderConfirmationPageComponent_Conditional_2_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37)(1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Descuento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("- S/.", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 1, ctx_r0.orden.descuento_cupon, "1.2-2"), "");
  }
}
function OrderConfirmationPageComponent_Conditional_2_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "GRATIS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function OrderConfirmationPageComponent_Conditional_2_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.orden.costo_envio, "1.2-2"), "");
  }
}
function OrderConfirmationPageComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 5)(1, "div", 6)(2, "div")(3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u2713 Pedido confirmado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Tu compra fue realizada con \u00E9xito!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10)(10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Ver historial de compras");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Seguir comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "div", 14)(16, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "N.\u00BA de orden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14)(21, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "M\u00E9todo de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14)(26, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section", 17)(32, "div", 18)(33, "article", 19)(34, "div", 20)(35, "div")(36, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Estado del pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " \uD83D\uDE9A En proceso de despacho ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 24)(43, "div", 25)(44, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Confirmado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Pago validado y pedido creado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 28)(49, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Empaque");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Estamos preparando tus productos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 28)(54, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Entrega");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "article", 19)(59, "div", 29)(60, "div")(61, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Productos comprados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Resumen del pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](66, OrderConfirmationPageComponent_Conditional_2_For_67_Template, 16, 7, "div", 31, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "aside", 32)(69, "article", 19)(70, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Direcci\u00F3n de env\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Entrega a domicilio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 34)(75, "p")(76, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, OrderConfirmationPageComponent_Conditional_2_Conditional_82_Template, 2, 1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "article", 19)(86, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Resumen de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Totales del pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 36)(91, "div", 37)(92, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Subtotal sin IGV");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](96, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 37)(98, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "IGV (18%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](102, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, OrderConfirmationPageComponent_Conditional_2_Conditional_103_Template, 6, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 37)(105, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Env\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, OrderConfirmationPageComponent_Conditional_2_Conditional_107_Template, 2, 0, "span", 39)(108, OrderConfirmationPageComponent_Conditional_2_Conditional_108_Template, 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 40)(110, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Total pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](114, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Gracias por comprar en CompraEnUna. Tu pedido #CEU-", ctx_r0.orden.id, " est\u00E1 siendo procesado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("CEU-", ctx_r0.orden.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.orden.pago == null ? null : ctx_r0.orden.pago.metodo_pago);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](30, 19, ctx_r0.orden.fecha_creacion, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.orden.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Se despachar\u00E1 a ", ctx_r0.orden.envio == null ? null : ctx_r0.orden.envio.ciudad, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r0.orden.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.orden.envio == null ? null : ctx_r0.orden.envio.nombre_completo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.orden.envio == null ? null : ctx_r0.orden.envio.direccion, " ", ctx_r0.orden.envio == null ? null : ctx_r0.orden.envio.numero, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx_r0.orden.envio == null ? null : ctx_r0.orden.envio.ciudad, ", ", ctx_r0.orden.envio == null ? null : ctx_r0.orden.envio.region, ", ", ctx_r0.orden.envio == null ? null : ctx_r0.orden.envio.pais, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](82, (ctx_r0.orden.envio == null ? null : ctx_r0.orden.envio.apartamento) ? 82 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Celular: ", ctx_r0.orden.envio == null ? null : ctx_r0.orden.envio.telefono, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](96, 22, ctx_r0.orden.subtotal, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](102, 25, ctx_r0.orden.igv, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](103, ctx_r0.orden.descuento_cupon > 0 ? 103 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](107, ctx_r0.orden.costo_envio === 0 ? 107 : 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](114, 28, ctx_r0.orden.total, "1.2-2"), "");
  }
}
class OrderConfirmationPageComponent {
  route;
  api;
  orden = null;
  loading = true;
  error = '';
  constructor(route, api) {
    this.route = route;
    this.api = api;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.fetchOrder(id);
      } else {
        this.error = 'No se especificó un ID de orden válido.';
        this.loading = false;
      }
    });
  }
  fetchOrder(id) {
    this.api.getOrderById(id).subscribe({
      next: data => {
        this.orden = data;
        this.loading = false;
      },
      error: err => {
        this.error = err.error?.error || 'No se pudo cargar la información de la orden.';
        this.loading = false;
      }
    });
  }
  static ɵfac = function OrderConfirmationPageComponent_Factory(t) {
    return new (t || OrderConfirmationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_store_api_service__WEBPACK_IMPORTED_MODULE_0__.StoreApiService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OrderConfirmationPageComponent,
    selectors: [["app-order-confirmation-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [[1, "flex", "h-64", "items-center", "justify-center"], [1, "text-lg", "font-semibold", "text-[#3f403f]"], [1, "flex", "h-64", "flex-col", "items-center", "justify-center", "gap-4"], [1, "text-lg", "font-semibold", "text-red-600"], ["routerLink", "/", 1, "border", "border-[#475841]", "bg-[#475841]", "px-6", "py-3", "text-sm", "font-semibold", "text-white"], [1, "border", "border-[#ced0ce]", "bg-[#475841]", "px-8", "py-10", "text-[#e6e8e6]", "lg:px-10", "lg:py-12"], [1, "grid", "grid-cols-1", "gap-8", "lg:grid-cols-[1.3fr_0.7fr]", "lg:items-end"], [1, "inline-flex", "items-center", "gap-2", "border", "border-[#9fb8ad]", "px-3", "py-1", "text-xs", "font-bold", "uppercase", "tracking-[0.18em]", "text-[#ced0ce]"], [1, "mt-5", "max-w-3xl", "text-4xl", "font-semibold", "tracking-tight", "sm:text-5xl"], [1, "mt-4", "max-w-2xl", "text-sm", "leading-6", "text-[#d7dbd7]", "sm:text-base"], [1, "mt-7", "flex", "flex-col", "gap-3", "sm:flex-row"], ["routerLink", "/mis-compras", 1, "inline-flex", "items-center", "justify-center", "border", "border-[#9fb8ad]", "bg-[#9fb8ad]", "px-5", "py-3", "text-sm", "font-semibold", "text-[#475841]", "transition-colors", "hover:bg-[#b5c8bf]"], ["routerLink", "/", 1, "inline-flex", "items-center", "justify-center", "border", "border-[#9fb8ad]", "px-5", "py-3", "text-sm", "font-semibold", "text-[#e6e8e6]", "transition-colors", "hover:bg-[#5a6c53]"], [1, "grid", "gap-px", "border", "border-[#70806a]", "bg-[#70806a]", "text-sm"], [1, "flex", "items-center", "justify-between", "bg-[#475841]", "px-4", "py-4"], [1, "text-[#ced0ce]"], [1, "font-semibold", "tracking-tight", "text-white"], [1, "mt-6", "grid", "grid-cols-1", "gap-4", "xl:grid-cols-[1.25fr_0.75fr]"], [1, "grid", "gap-4"], [1, "border", "border-[#ced0ce]", "bg-white", "p-6"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:items-start", "sm:justify-between"], [1, "text-xs", "font-bold", "uppercase", "tracking-[0.18em]", "text-[#475841]"], [1, "mt-2", "text-3xl", "font-semibold", "tracking-tight", "text-[#3f403f]"], [1, "inline-flex", "items-center", "gap-2", "border", "border-[#9fb8ad]", "bg-[#eaf1ed]", "px-3", "py-2", "text-xs", "font-bold", "uppercase", "tracking-[0.14em]", "text-[#475841]"], [1, "mt-6", "grid", "grid-cols-1", "gap-px", "border", "border-[#ced0ce]", "bg-[#ced0ce]", "md:grid-cols-3"], [1, "bg-[#f8f9f8]", "px-4", "py-4"], [1, "text-xs", "font-bold", "uppercase", "tracking-[0.14em]", "text-[#475841]"], [1, "mt-2", "text-sm", "text-[#6b6d6b]"], [1, "bg-[#f8f9f8]", "px-4", "py-4", "opacity-50"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "mt-6", "grid", "gap-px", "border", "border-[#ced0ce]", "bg-[#ced0ce]"], [1, "grid", "grid-cols-1", "gap-4", "bg-white", "p-4", "md:grid-cols-[110px_1fr_auto]", "md:items-center"], [1, "grid", "gap-4", "self-start"], [1, "mt-2", "text-2xl", "font-semibold", "tracking-tight", "text-[#3f403f]"], [1, "mt-5", "space-y-3", "text-sm", "text-[#6b6d6b]"], [1, "font-semibold", "text-[#3f403f]"], [1, "mt-5", "grid", "gap-px", "border", "border-[#ced0ce]", "bg-[#ced0ce]", "text-sm"], [1, "flex", "items-center", "justify-between", "bg-white", "px-4", "py-4"], [1, "text-[#6b6d6b]"], [1, "font-bold", "uppercase", "tracking-[0.12em]", "text-[#475841]"], [1, "flex", "items-center", "justify-between", "bg-[#f8f9f8]", "px-4", "py-4"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-[#475841]"], [1, "flex", "h-24", "items-center", "justify-center", "border", "border-[#ced0ce]", "bg-[#e6e8e6]"], [1, "h-full", "w-full", "object-contain", 3, "src", "alt"], [1, "text-lg", "font-semibold", "tracking-tight", "text-[#3f403f]"], [1, "mt-3", "flex", "flex-wrap", "items-center", "gap-2", "text-xs"], [1, "border", "border-[#ced0ce]", "bg-[#f5f6f5]", "px-2", "py-1", "font-bold", "uppercase", "tracking-[0.12em]", "text-[#475841]"], [1, "text-left", "md:text-right"], [1, "text-xs", "text-[#6b6d6b]"], [1, "mt-1", "text-2xl", "font-semibold", "tracking-tight", "text-[#475841]"], [1, "text-4xl"], [1, "font-semibold", "text-[#475841]"]],
    template: function OrderConfirmationPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OrderConfirmationPageComponent_Conditional_0_Template, 3, 0, "div", 0)(1, OrderConfirmationPageComponent_Conditional_1_Template, 5, 1)(2, OrderConfirmationPageComponent_Conditional_2_Template, 115, 31);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx.loading ? 0 : ctx.error ? 1 : ctx.orden ? 2 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8988:
/*!**********************************************************************!*\
  !*** ./store-angular/src/app/pages/product-detail-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailPageComponent: () => (/* binding */ ProductDetailPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_related_products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/related-products.component */ 7589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_store_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store-api.service */ 393);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ 7421);










const _forTrack0 = ($index, $item) => $item.id;
function ProductDetailPageComponent_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailPageComponent_a_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.filterByCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.product == null ? null : ctx_r1.product.categoria == null ? null : ctx_r1.product.categoria.nombre);
  }
}
function ProductDetailPageComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductDetailPageComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 10)(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Cargando detalle...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductDetailPageComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 10)(1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function ProductDetailPageComponent_ng_container_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 16);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.product.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r1.product.nombre);
  }
}
function ProductDetailPageComponent_ng_container_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\uD83D\uDCE6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductDetailPageComponent_ng_container_12_div_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailPageComponent_ng_container_12_div_6_For_2_Template_button_click_0_listener() {
      const img_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.selectImage(img_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("border-[#475841", (ctx_r1.selectedImage == null ? null : ctx_r1.selectedImage.id) === img_r5.id)("border-[#ced0ce", (ctx_r1.selectedImage == null ? null : ctx_r1.selectedImage.id) !== img_r5.id)("hover:border-[#475841]", (ctx_r1.selectedImage == null ? null : ctx_r1.selectedImage.id) !== img_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", img_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r1.product.nombre);
  }
}
function ProductDetailPageComponent_ng_container_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](1, ProductDetailPageComponent_ng_container_12_div_6_For_2_Template, 2, 8, "button", 50, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r1.images);
  }
}
function ProductDetailPageComponent_ng_container_12_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.cantidadVendidos, " vendidos");
  }
}
function ProductDetailPageComponent_ng_container_12_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("S/.", ctx_r1.product.precio_venta, "");
  }
}
function ProductDetailPageComponent_ng_container_12_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Ahorra ", ctx_r1.product.descuento_valor, "%");
  }
}
function ProductDetailPageComponent_ng_container_12_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Hasta ", ctx_r1.product.cuotas, " cuotas sin inter\u00E9s de S/.", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, ctx_r1.product.cuotas_mensual, "1.2-2"), " ");
  }
}
function ProductDetailPageComponent_ng_container_12_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Llega ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductDetailPageComponent_ng_container_12_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Llega entre el ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductDetailPageComponent_ng_container_12_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "GRATIS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductDetailPageComponent_ng_container_12_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " entre el ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductDetailPageComponent_ng_container_12_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58)(1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const attr_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](attr_r6.clave);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](attr_r6.valor);
  }
}
function ProductDetailPageComponent_ng_container_12_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductDetailPageComponent_ng_container_12_div_31_div_1_Template, 5, 2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.attributes);
  }
}
function ProductDetailPageComponent_ng_container_12_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 33)(1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "inventory_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Stock disponible: ", ctx_r1.product.stock_actual, " ");
  }
}
function ProductDetailPageComponent_ng_container_12_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 62)(1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Agotado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductDetailPageComponent_ng_container_12_For_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", q_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", q_r7, " ", q_r7 === 1 ? "unidad" : "unidades", "");
  }
}
function ProductDetailPageComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13)(2, "div", 14)(3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProductDetailPageComponent_ng_container_12_Conditional_4_Template, 1, 2, "img", 16)(5, ProductDetailPageComponent_ng_container_12_Conditional_5_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ProductDetailPageComponent_ng_container_12_div_6_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 18)(8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ProductDetailPageComponent_ng_container_12_p_9_Template, 2, 1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 22)(13, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ProductDetailPageComponent_ng_container_12_span_16_Template, 2, 1, "span", 24)(17, ProductDetailPageComponent_ng_container_12_span_17_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ProductDetailPageComponent_ng_container_12_p_18_Template, 3, 5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 27)(20, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\uD83D\uDE9A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div")(23, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ProductDetailPageComponent_ng_container_12_span_24_Template, 2, 0, "span", 8)(25, ProductDetailPageComponent_ng_container_12_span_25_Template, 2, 0, "span", 8)(26, ProductDetailPageComponent_ng_container_12_span_26_Template, 2, 0, "span", 8)(27, ProductDetailPageComponent_ng_container_12_span_27_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Vendido por CompraEnUna");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ProductDetailPageComponent_ng_container_12_div_31_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ProductDetailPageComponent_ng_container_12_Conditional_33_Template, 4, 1, "span", 33)(34, ProductDetailPageComponent_ng_container_12_Conditional_34_Template, 4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 34)(36, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Cantidad:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ProductDetailPageComponent_ng_container_12_Template_select_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.cantidad, $event) || (ctx_r1.cantidad = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProductDetailPageComponent_ng_container_12_Template_select_change_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onCantidadChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](39, ProductDetailPageComponent_ng_container_12_For_40_Template, 2, 3, "option", 37, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 38)(42, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailPageComponent_ng_container_12_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.addToCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "button", 40)(45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "\u2661");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Guardar para despu\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 41)(49, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Pago seguro con:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 42)(52, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "VISA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "MC");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 44)(57, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Descripci\u00F3n del Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 46)(60, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "app-related-products", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](4, ctx_r1.product.imagen ? 4 : 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.images.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.cantidadVendidos > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.product.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("S/.", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](15, 22, ctx_r1.product.precio_descuento, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.product.descuento_tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.product.descuento_tipo === "porcentaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.product.cuotas_sin_interes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.product.envio_gratis);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.product.envio_gratis);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.product.envio_gratis);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.product.envio_gratis);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r1.freeShippingFrom, " y el ", ctx_r1.freeShippingTo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.attributes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](33, ctx_r1.product.disponible && ctx_r1.product.stock_actual > 0 ? 33 : 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.product.disponible);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r1.quantityOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.product.disponible);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.product.disponible ? "A\u00F1adir al Carrito" : "Producto agotado", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.product.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("products", ctx_r1.relatedProducts);
  }
}
class ProductDetailPageComponent {
  route;
  router;
  storeApi;
  cart;
  loading = true;
  error = '';
  product = null;
  relatedProducts = [];
  images = [];
  attributes = [];
  cantidad = 1;
  selectedImage = null;
  cantidadVendidos = 0;
  quantityOptions = [1];
  freeShippingFrom = '';
  freeShippingTo = '';
  today = new Date();
  constructor(route, router, storeApi, cart) {
    this.route = route;
    this.router = router;
    this.storeApi = storeApi;
    this.cart = cart;
    this.calculateShippingDates();
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.selectedImage = null;
        this.cantidad = 1;
        this.loadProduct(+id);
        window.scrollTo(0, 0);
      } else {
        this.error = 'ID de producto no válido';
        this.loading = false;
      }
    });
  }
  calculateShippingDates() {
    const from = new Date(this.today);
    const to = new Date(this.today);
    from.setDate(from.getDate() + 3);
    to.setDate(to.getDate() + 5);
    this.freeShippingFrom = from.toLocaleDateString('es-PE', {
      day: 'numeric',
      month: 'short'
    });
    this.freeShippingTo = to.toLocaleDateString('es-PE', {
      day: 'numeric',
      month: 'short'
    });
  }
  loadProduct(id) {
    this.loading = true;
    this.storeApi.getProductById(id.toString()).subscribe({
      next: res => {
        this.product = res.product;
        this.images = res.images || [];
        this.attributes = res.attributes || [];
        this.relatedProducts = res.relatedProducts || [];
        this.cantidadVendidos = res.product?.cantidad_vendidos || 0;
        const stock = Number(res.product?.stock_actual ?? 0);
        this.quantityOptions = Array.from({
          length: Math.min(10, Math.max(1, stock))
        }, (_, i) => i + 1);
        if (this.images.length > 0) {
          const mainImage = this.images.find(img => img.orden === 0) || this.images.reduce((min, img) => img.orden < min.orden ? img : min, this.images[0]);
          this.selectedImage = mainImage;
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Error cargando producto';
        this.loading = false;
      }
    });
  }
  selectImage(img) {
    this.selectedImage = img;
  }
  filterByBrand() {
    if (this.product?.proveedor) {
      this.router.navigate(['/'], {
        queryParams: {
          marca: this.product.proveedor.id
        }
      });
    }
  }
  filterByCategory() {
    if (this.product?.categoria) {
      this.router.navigate(['/'], {
        queryParams: {
          categoria: this.product.categoria.id
        }
      });
    }
  }
  onCantidadChange() {}
  addToCart() {
    if (this.product) {
      this.cart.addProduct(this.product, Number(this.cantidad));
      this.router.navigate(['/carrito']);
    }
  }
  buyNow() {
    this.addToCart();
    this.router.navigate(['/checkout']);
  }
  static ɵfac = function ProductDetailPageComponent_Factory(t) {
    return new (t || ProductDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_store_api_service__WEBPACK_IMPORTED_MODULE_1__.StoreApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProductDetailPageComponent,
    selectors: [["app-product-detail-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 6,
    consts: [[1, "mx-auto", "w-full", "max-w-[1440px]", "px-6", "py-8", "lg:px-10", "lg:py-10"], [1, "flex", "items-center", "text-sm", "text-[#6b6d6b]", "mb-6"], ["routerLink", "/", 1, "hover:text-[#475841]", "transition-colors", "cursor-pointer"], [1, "mx-2"], ["class", "hover:text-[#475841] transition-colors cursor-pointer", 3, "click", 4, "ngIf"], ["class", "mx-2", 4, "ngIf"], [1, "text-[#3f403f]", "font-medium"], ["class", "border border-[#ced0ce] bg-white p-8 text-center", 4, "ngIf"], [4, "ngIf"], [1, "hover:text-[#475841]", "transition-colors", "cursor-pointer", 3, "click"], [1, "border", "border-[#ced0ce]", "bg-white", "p-8", "text-center"], [1, "text-[#6b6d6b]"], [1, "text-red-600"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-8"], [1, "lg:col-span-7", "flex", "flex-col", "gap-4"], [1, "w-full", "aspect-video", "md:aspect-[4/3]", "border", "border-[#ced0ce]", "bg-white", "rounded", "overflow-hidden", "flex", "items-center", "justify-center"], [1, "w-full", "h-full", "object-contain", 3, "src", "alt"], ["class", "flex gap-4 overflow-x-auto", 4, "ngIf"], [1, "lg:col-span-5", "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "gap-2"], ["class", "text-sm text-[#6b6d6b]", 4, "ngIf"], [1, "text-3xl", "font-semibold", "tracking-tight", "text-[#3f403f]"], [1, "mt-2", "flex", "items-baseline", "gap-3"], [1, "text-3xl", "font-semibold", "text-[#475841]"], ["class", "text-lg text-[#6b6d6b] line-through", 4, "ngIf"], ["class", "bg-[#eaf1ed] text-[#475841] text-xs font-bold px-2 py-1", 4, "ngIf"], ["class", "text-sm text-[#6b6d6b] mt-1", 4, "ngIf"], [1, "border", "border-[#ced0ce]", "bg-[#f8f9f8]", "rounded", "p-4", "flex", "items-start", "gap-3"], [1, "text-xl", "text-[#475841]"], [1, "text-lg", "font-semibold", "text-[#3f403f]"], [1, "text-sm", "text-[#6b6d6b]"], ["class", "grid grid-cols-2 gap-3", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "text-sm"], [1, "inline-flex", "items-center", "gap-1.5", "text-[#475841]"], [1, "flex", "items-center", "gap-3"], [1, "text-sm", "font-medium", "text-[#3f403f]"], [1, "border", "border-[#ced0ce]", "bg-white", "px-4", "py-2", "text-sm", "rounded", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "ngModelChange", "change", "ngModel", "disabled"], [3, "value"], [1, "flex", "flex-col", "gap-3"], [1, "bg-[#475841]", "text-white", "hover:bg-[#5b6d54]", "disabled:opacity-50", "disabled:cursor-not-allowed", "text-lg", "w-full", "h-12", "rounded", "flex", "items-center", "justify-center", "transition-colors", 3, "click", "disabled"], [1, "bg-transparent", "border", "border-[#475841]", "text-[#475841]", "hover:bg-[#e6e8e6]", "text-sm", "w-full", "h-11", "rounded", "flex", "items-center", "justify-center", "transition-colors", "gap-2"], [1, "flex", "items-center", "gap-3", "pt-4", "border-t", "border-[#ced0ce]"], [1, "flex", "gap-2"], [1, "w-10", "h-6", "border", "border-[#ced0ce]", "bg-white", "rounded", "flex", "items-center", "justify-center", "text-[10px]", "font-bold", "text-[#6b6d6b]"], [1, "mt-10", "border-t", "border-[#ced0ce]", "pt-10"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-[#3f403f]", "mb-4"], [1, "prose", "max-w-none", "text-sm", "text-[#6b6d6b]", "flex", "flex-col", "gap-4"], [3, "products"], [1, "text-6xl", "text-[#475841]"], [1, "flex", "gap-4", "overflow-x-auto"], [1, "flex-shrink-0", "w-24", "h-24", "border-2", "rounded", "overflow-hidden", "flex", "items-center", "justify-center", "transition-colors", 3, "border-[#475841", "border-[#ced0ce", "hover:border-[#475841]"], [1, "flex-shrink-0", "w-24", "h-24", "border-2", "rounded", "overflow-hidden", "flex", "items-center", "justify-center", "transition-colors", 3, "click"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "text-lg", "text-[#6b6d6b]", "line-through"], [1, "bg-[#eaf1ed]", "text-[#475841]", "text-xs", "font-bold", "px-2", "py-1"], [1, "text-sm", "text-[#6b6d6b]", "mt-1"], [1, "grid", "grid-cols-2", "gap-3"], ["class", "border border-[#ced0ce] bg-white rounded p-4 flex flex-col gap-1", 4, "ngFor", "ngForOf"], [1, "border", "border-[#ced0ce]", "bg-white", "rounded", "p-4", "flex", "flex-col", "gap-1"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-[#6b6d6b]"], [1, "text-sm", "text-[#3f403f]"], [1, "material-symbols-outlined", "text-[18px]"], [1, "inline-flex", "items-center", "gap-1.5", "text-red-600", "font-medium"]],
    template: function ProductDetailPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0)(1, "nav", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u203A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ProductDetailPageComponent_a_6_Template, 2, 1, "a", 4)(7, ProductDetailPageComponent_span_7_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ProductDetailPageComponent_section_10_Template, 3, 0, "section", 7)(11, ProductDetailPageComponent_section_11_Template, 3, 1, "section", 7)(12, ProductDetailPageComponent_ng_container_12_Template, 63, 25, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product == null ? null : ctx.product.categoria);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product == null ? null : ctx.product.categoria);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product && !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _components_related_products_component__WEBPACK_IMPORTED_MODULE_0__.RelatedProductsComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7780:
/*!***************************************************************!*\
  !*** ./store-angular/src/app/pages/profile-page.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageComponent: () => (/* binding */ ProfilePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_store_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/store-api.service */ 393);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 9117);



function ProfilePageComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Cargando perfil...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfilePageComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function ProfilePageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 3)(1, "div", 4)(2, "label")(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label")(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label")(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Correo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label")(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label")(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.profile.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.profile.apellido || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.profile.correo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.profile.direccion || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.profile.rol === "administrativo" ? "Administrador" : "Cliente");
  }
}
class ProfilePageComponent {
  storeApi;
  auth;
  profile = null;
  loading = true;
  error = '';
  constructor(storeApi, auth) {
    this.storeApi = storeApi;
    this.auth = auth;
  }
  ngOnInit() {
    if (!this.auth.isAuthenticated) {
      this.error = 'Debes iniciar sesión.';
      this.loading = false;
      return;
    }
    this.storeApi.getUserProfile().subscribe({
      next: response => {
        this.profile = response.profile;
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudo cargar el perfil.';
        this.loading = false;
      }
    });
  }
  static ɵfac = function ProfilePageComponent_Factory(t) {
    return new (t || ProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_store_api_service__WEBPACK_IMPORTED_MODULE_0__.StoreApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ProfilePageComponent,
    selectors: [["app-profile-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 3,
    consts: [[1, "hero"], [1, "empty"], [1, "error"], [1, "detail__panel", 2, "margin-top", "1rem"], [1, "form-grid"], ["disabled", "", 3, "value"]],
    template: function ProfilePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Mi Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProfilePageComponent_Conditional_3_Template, 2, 0, "div", 1)(4, ProfilePageComponent_Conditional_4_Template, 2, 1, "div", 2)(5, ProfilePageComponent_Conditional_5_Template, 22, 5, "section", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](3, ctx.loading ? 3 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](4, ctx.error ? 4 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](5, !ctx.loading && !ctx.error && ctx.profile ? 5 : -1);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 1975:
/*!*****************************************************************!*\
  !*** ./store-angular/src/app/pages/purchases-page.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PurchasesPageComponent: () => (/* binding */ PurchasesPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_store_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/store-api.service */ 393);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 9117);







const _forTrack0 = ($index, $item) => $item.id;
const _c0 = a0 => ["/confirmacion", a0];
function PurchasesPageComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Cargando \u00F3rdenes...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PurchasesPageComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
function PurchasesPageComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "receipt_long");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "No has realizado ninguna compra a\u00FAn.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Ir a la tienda");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PurchasesPageComponent_Conditional_8_Conditional_1_For_2_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 33);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r2.producto.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", item_r2.producto.nombre);
  }
}
function PurchasesPageComponent_Conditional_8_Conditional_1_For_2_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "package_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PurchasesPageComponent_Conditional_8_Conditional_1_For_2_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Marca: ", item_r2.producto == null ? null : item_r2.producto.proveedorRel == null ? null : item_r2.producto.proveedorRel.nombre, "");
  }
}
function PurchasesPageComponent_Conditional_8_Conditional_1_For_2_For_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PurchasesPageComponent_Conditional_8_Conditional_1_For_2_For_18_Conditional_2_Template, 1, 2, "img", 33)(3, PurchasesPageComponent_Conditional_8_Conditional_1_For_2_For_18_Conditional_3_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 34)(5, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PurchasesPageComponent_Conditional_8_Conditional_1_For_2_For_18_Conditional_7_Template, 2, 1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 38)(11, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](2, (item_r2.producto == null ? null : item_r2.producto.imagen) ? 2 : 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.producto == null ? null : item_r2.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](7, (item_r2.producto == null ? null : item_r2.producto.proveedorRel) ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.producto == null ? null : item_r2.producto.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Cant: ", item_r2.cantidad, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S/. ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 6, item_r2.precio_unitario, "1.2-2"), "");
  }
}
function PurchasesPageComponent_Conditional_8_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "article", 12)(1, "div", 13)(2, "div", 14)(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 17)(9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Ver detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](17, PurchasesPageComponent_Conditional_8_Conditional_1_For_2_For_18_Template, 16, 9, "div", 22, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 23)(20, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "div", 26)(24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 28)(26, "div", 29)(27, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Confirmado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 28)(32, "div", 29)(33, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "inventory_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Empaque");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 28)(38, "div", 29)(39, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "local_shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Entrega");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 28)(44, "div", 29)(45, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Entregado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const orden_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Pedido #CEU-", orden_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Realizado el ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 15, orden_r3.fecha_creacion, "dd MMM yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S/. ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 18, orden_r3.total, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](21, _c0, orden_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](orden_r3.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Estado del Pedido: ", orden_r3.estado, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r0.getStepProgress(orden_r3.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.isStepActive(orden_r3.estado, 1) ? "bg-[#475841] text-white border-[#475841]" : "bg-white text-[#ced0ce] border-[#ced0ce]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.isStepActive(orden_r3.estado, 1) ? "text-primary" : "text-outline-variant");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.isStepActive(orden_r3.estado, 2) ? "bg-[#475841] text-white border-[#475841]" : "bg-white text-[#ced0ce] border-[#ced0ce]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.isStepActive(orden_r3.estado, 2) ? "text-primary" : "text-outline-variant");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.isStepActive(orden_r3.estado, 3) ? "bg-[#475841] text-white border-[#475841]" : "bg-white text-[#ced0ce] border-[#ced0ce]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.isStepActive(orden_r3.estado, 3) ? "text-primary" : "text-outline-variant");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.isStepActive(orden_r3.estado, 4) ? "bg-[#475841] text-white border-[#475841]" : "bg-white text-[#ced0ce] border-[#ced0ce]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.isStepActive(orden_r3.estado, 4) ? "text-primary" : "text-outline-variant");
  }
}
function PurchasesPageComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, PurchasesPageComponent_Conditional_8_Conditional_1_For_2_Template, 49, 23, "article", 12, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r0.ordenes);
  }
}
function PurchasesPageComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PurchasesPageComponent_Conditional_8_Conditional_0_Template, 7, 0, "div", 7)(1, PurchasesPageComponent_Conditional_8_Conditional_1_Template, 3, 0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, ctx_r0.ordenes.length === 0 ? 0 : 1);
  }
}
class PurchasesPageComponent {
  storeApi;
  auth;
  ordenes = [];
  loading = true;
  error = '';
  constructor(storeApi, auth) {
    this.storeApi = storeApi;
    this.auth = auth;
  }
  ngOnInit() {
    this.auth.sessionLoaded$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)(loaded => loaded), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => this.auth.user$)).subscribe({
      next: user => {
        if (user) {
          this.fetchOrders();
        } else {
          this.error = 'Debes iniciar sesión para ver tus compras.';
          this.loading = false;
        }
      },
      error: () => {
        this.error = 'Ocurrió un error al verificar tu sesión.';
        this.loading = false;
      }
    });
  }
  fetchOrders() {
    this.loading = true;
    this.storeApi.getUserOrders().subscribe({
      next: response => {
        this.ordenes = response.ordenes;
        this.loading = false;
      },
      error: err => {
        console.error('Error fetching orders:', err);
        this.error = 'No se pudieron cargar las órdenes.';
        this.loading = false;
      }
    });
  }
  getTotalArticulos(orden) {
    return orden.items?.reduce((acc, item) => acc + item.cantidad, 0) || 0;
  }
  getNombresProductos(orden) {
    if (!orden.items || orden.items.length === 0) return '';
    const nombres = orden.items.map(item => item.producto?.nombre).filter(Boolean);
    if (nombres.length <= 2) return nombres.join(', ');
    return `${nombres.slice(0, 2).join(', ')} y ${nombres.length - 2} artículos más.`;
  }
  getStepProgress(estado) {
    const steps = {
      'PENDIENTE': '0%',
      'PAGADA': '33.33%',
      'EMPAQUE': '66.66%',
      'ENVIADA': '100%',
      'ENTREGADA': '100%',
      'CANCELADA': '0%'
    };
    return steps[estado] || '0%';
  }
  isStepActive(estado, step) {
    const estadoMap = {
      'PENDIENTE': 0,
      'PAGADA': 1,
      'EMPAQUE': 2,
      'ENVIADA': 3,
      'ENTREGADA': 4,
      'CANCELADA': -1
    };
    const currentStep = estadoMap[estado] || 0;
    return currentStep >= step;
  }
  static ɵfac = function PurchasesPageComponent_Factory(t) {
    return new (t || PurchasesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_store_api_service__WEBPACK_IMPORTED_MODULE_0__.StoreApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PurchasesPageComponent,
    selectors: [["app-purchases-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 1,
    consts: [[1, "mx-auto", "w-full", "max-w-container-max", "px-md", "py-xl", "flex-grow", "flex", "flex-col", "gap-lg", "pb-24", "md:pb-xl"], [1, "flex", "flex-col", "gap-sm"], [1, "font-h1", "text-h1", "text-primary"], [1, "font-body-md", "text-body-md", "text-on-surface-variant"], [1, "flex", "h-64", "items-center", "justify-center"], [1, "text-lg", "font-semibold", "text-primary"], [1, "border", "border-red-500", "bg-red-50", "p-4", "text-sm", "text-red-700"], [1, "flex", "h-64", "flex-col", "items-center", "justify-center", "gap-4", "border", "border-[#ced0ce]", "bg-white", "text-center"], [1, "material-symbols-outlined", "text-6xl", "text-[#ced0ce]"], [1, "text-lg", "font-semibold", "text-[#3f403f]"], ["routerLink", "/", 1, "border", "border-[#475841]", "bg-[#475841]", "px-6", "py-3", "text-sm", "font-semibold", "text-white", "transition-colors", "hover:bg-[#5b6d54]"], [1, "flex", "flex-col", "gap-lg"], [1, "bg-surface-container-lowest", "border", "border-[#ced0ce]", "rounded-theme", "flex", "flex-col", "opacity-90", "hover:opacity-100", "transition-opacity"], [1, "flex", "flex-wrap", "justify-between", "items-center", "p-md", "bg-surface-container-low", "border-b", "border-[#ced0ce]"], [1, "flex", "flex-col", "gap-xs"], [1, "font-label", "text-label", "text-on-surface-variant", "uppercase"], [1, "font-body-sm", "text-body-sm", "text-outline"], [1, "flex", "flex-col", "items-end", "gap-xs", "mt-sm", "md:mt-0"], [1, "font-h3", "text-h3", "text-primary"], [1, "font-label", "text-label", "text-secondary", "hover:underline", "flex", "items-center", "gap-1", 3, "routerLink"], [1, "material-symbols-outlined", "text-[16px]"], [1, "p-md", "border-b", "border-[#ced0ce]", "flex", "flex-col", "gap-4"], [1, "flex", "gap-md", "items-start"], [1, "p-md", "bg-surface-container-lowest"], [1, "font-label", "text-label", "text-on-surface-variant", "uppercase", "mb-4"], [1, "relative", "flex", "items-center", "justify-between", "w-full", "max-w-3xl", "mx-auto"], [1, "absolute", "left-0", "top-1/2", "transform", "-translate-y-1/2", "w-full", "h-[2px]", "bg-[#ced0ce]", "-z-10"], [1, "absolute", "left-0", "top-1/2", "transform", "-translate-y-1/2", "h-[2px]", "bg-[#475841]", "-z-10", "transition-all", "duration-500"], [1, "flex", "flex-col", "items-center", "gap-2", "bg-surface-container-lowest", "px-2"], [1, "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "border-2", "transition-colors", 3, "ngClass"], [1, "material-symbols-outlined", "text-[18px]"], [1, "font-label", "text-label", 3, "ngClass"], [1, "flex-shrink-0", "w-20", "h-20", "border", "border-[#ced0ce]", "rounded-theme", "bg-surface-container", "flex", "items-center", "justify-center", "overflow-hidden"], [1, "w-full", "h-full", "object-contain", 3, "src", "alt"], [1, "flex", "flex-col", "text-left"], [1, "font-bold", "text-primary", "text-sm", "uppercase", "tracking-wide"], [1, "text-xs", "font-semibold", "text-secondary", "uppercase", "tracking-wider", "mb-1"], [1, "text-xs", "text-on-surface-variant", "line-clamp-2", "leading-relaxed", "max-w-2xl"], [1, "mt-2", "flex", "items-center", "gap-3"], [1, "text-xs", "font-bold", "text-[#475841]", "bg-[#eaf1ed]", "px-2", "py-0.5", "rounded-sm"], [1, "text-xs", "font-bold", "text-[#475841]"], [1, "material-symbols-outlined", "text-3xl", "text-[#ced0ce]"]],
    template: function PurchasesPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Mis Compras");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Historial detallado de tus pedidos realizados.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PurchasesPageComponent_Conditional_6_Template, 3, 0, "div", 4)(7, PurchasesPageComponent_Conditional_7_Template, 2, 1)(8, PurchasesPageComponent_Conditional_8_Template, 2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](6, ctx.loading ? 6 : ctx.error ? 7 : 8);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9117:
/*!********************************************************!*\
  !*** ./store-angular/src/app/services/auth.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _store_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-api.service */ 393);



class AuthService {
  api;
  userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  user$ = this.userSubject.asObservable();
  sessionLoadedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
  sessionLoaded$ = this.sessionLoadedSubject.asObservable();
  constructor(api) {
    this.api = api;
  }
  get snapshot() {
    return this.userSubject.value;
  }
  get isAuthenticated() {
    return Boolean(this.userSubject.value);
  }
  get isAdmin() {
    return this.userSubject.value?.rol === 'administrativo';
  }
  loadSession() {
    this.api.getCurrentSession().subscribe({
      next: response => {
        this.userSubject.next(response.user);
        this.sessionLoadedSubject.next(true);
      },
      error: () => {
        this.userSubject.next(null);
        this.sessionLoadedSubject.next(true);
      }
    });
  }
  register(payload) {
    return this.api.register(payload);
  }
  login(payload) {
    return this.api.login(payload);
  }
  logout() {
    return this.api.logout();
  }
  setUser(user) {
    this.userSubject.next(user);
  }
  static ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_store_api_service__WEBPACK_IMPORTED_MODULE_0__.StoreApiService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7421:
/*!********************************************************!*\
  !*** ./store-angular/src/app/services/cart.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartService: () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _store_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-api.service */ 393);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 9117);




const STORAGE_KEY = 'mini-dashboard-cart';
class CartService {
  api;
  auth;
  stateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
    items: [],
    totalItems: 0,
    subtotalProductos: 0,
    subtotalEnvios: 0,
    descuentoCupon: 0,
    cupon: null,
    total: 0
  });
  cart$ = this.stateSubject.asObservable();
  errorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
  error$ = this.errorSubject.asObservable();
  couponCode = '';
  constructor(api, auth) {
    this.api = api;
    this.auth = auth;
    this.auth.user$.subscribe(() => {
      this.loadCart();
    });
  }
  get snapshot() {
    return this.stateSubject.value;
  }
  loadCart() {
    if (this.auth.isAuthenticated) {
      this.api.getCart(this.couponCode).subscribe({
        next: cart => {
          this.errorSubject.next('');
          this.stateSubject.next(cart);
        },
        error: () => this.errorSubject.next('No se pudo cargar el carrito.')
      });
      return;
    }
    this.calculateLocalCart();
  }
  setCoupon(code) {
    this.couponCode = code.trim().toUpperCase();
  }
  applyCoupon(code) {
    const normalized = code.trim().toUpperCase();
    if (!normalized) {
      this.couponCode = '';
      this.errorSubject.next('');
      this.recalculate();
      return;
    }
    const monto = this.snapshot.subtotalProductos + this.snapshot.subtotalEnvios;
    this.api.validateCoupon({
      codigo: normalized,
      monto
    }).subscribe({
      next: () => {
        this.couponCode = normalized;
        this.errorSubject.next('');
        this.recalculate();
      },
      error: error => {
        this.errorSubject.next(error.error?.error || 'Cupón inválido o vencido.');
      }
    });
  }
  addProduct(product, cantidad = 1) {
    if (this.auth.isAuthenticated) {
      this.api.addCartItem({
        productoId: product.id,
        cantidad,
        couponCode: this.couponCode
      }).subscribe({
        next: cart => {
          this.errorSubject.next('');
          this.stateSubject.next(cart);
        },
        error: error => this.errorSubject.next(error.error?.error || 'No se pudo agregar el producto.')
      });
      return;
    }
    const items = this.readLocalItems();
    const prodId = Number(product.id);
    const existing = items.find(item => item.productoId === prodId);
    if (existing) {
      existing.cantidad += cantidad;
    } else {
      items.push({
        productoId: prodId,
        cantidad,
        producto: product
      });
    }
    this.saveLocalItems(items);
    this.calculateLocalCart();
  }
  updateQuantity(productoId, cantidad) {
    if (this.auth.isAuthenticated) {
      this.api.updateCartItem(productoId, {
        cantidad,
        couponCode: this.couponCode
      }).subscribe({
        next: cart => {
          this.errorSubject.next('');
          this.stateSubject.next(cart);
        },
        error: error => this.errorSubject.next(error.error?.error || 'No se pudo actualizar el carrito.')
      });
      return;
    }
    let items = this.readLocalItems();
    const aggregated = new Map();
    for (const entry of items) {
      const pid = Number(entry.productoId);
      if (!aggregated.has(pid)) {
        aggregated.set(pid, {
          ...entry,
          productoId: pid
        });
      } else {
        aggregated.get(pid).cantidad += Number(entry.cantidad);
      }
    }
    items = Array.from(aggregated.values());
    const item = items.find(entry => entry.productoId === productoId);
    if (!item) return;
    if (cantidad <= 0) {
      this.saveLocalItems(items.filter(entry => entry.productoId !== productoId));
    } else {
      item.cantidad = cantidad;
      this.saveLocalItems(items);
    }
    this.calculateLocalCart();
  }
  removeProduct(productoId) {
    if (this.auth.isAuthenticated) {
      this.api.removeCartItem(productoId, this.couponCode).subscribe({
        next: cart => {
          this.errorSubject.next('');
          this.stateSubject.next(cart);
        },
        error: error => this.errorSubject.next(error.error?.error || 'No se pudo eliminar el producto.')
      });
      return;
    }
    this.saveLocalItems(this.readLocalItems().filter(entry => Number(entry.productoId) !== Number(productoId)));
    this.calculateLocalCart();
  }
  hasLocalCart() {
    return this.readLocalItems().length > 0;
  }
  importLocalCart() {
    if (!this.auth.isAuthenticated) return;
    const items = this.readLocalItems().map(item => ({
      productoId: item.productoId,
      cantidad: item.cantidad
    }));
    if (!items.length) return;
    this.api.importCart({
      items,
      couponCode: this.couponCode
    }).subscribe({
      next: cart => {
        this.clearLocalCart();
        this.errorSubject.next('');
        this.stateSubject.next(cart);
      },
      error: error => {
        this.errorSubject.next(error.error?.error || 'No se pudo importar el carrito.');
      }
    });
  }
  recalculate() {
    if (this.auth.isAuthenticated) {
      this.loadCart();
      return;
    }
    this.calculateLocalCart();
  }
  calculateLocalCart() {
    const items = this.readLocalItems().map(item => ({
      productoId: item.productoId,
      cantidad: item.cantidad
    }));
    this.api.calculateCart({
      items,
      couponCode: this.couponCode
    }).subscribe({
      next: cart => {
        this.errorSubject.next('');
        this.stateSubject.next(cart);
      },
      error: error => this.errorSubject.next(error.error?.error || 'No se pudo calcular el carrito.')
    });
  }
  readLocalItems() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return parsed.map(item => ({
        productoId: Number(item.productoId),
        cantidad: Math.max(Number(item.cantidad || 1), 1),
        producto: item.producto
      })).filter(item => Number.isFinite(item.productoId));
    } catch {
      return [];
    }
  }
  saveLocalItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }
  clearLocalCart() {
    localStorage.removeItem(STORAGE_KEY);
  }
  emptyState() {
    return {
      items: [],
      totalItems: 0,
      subtotalProductos: 0,
      subtotalEnvios: 0,
      descuentoCupon: 0,
      cupon: null,
      total: 0
    };
  }
  static ɵfac = function CartService_Factory(t) {
    return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_store_api_service__WEBPACK_IMPORTED_MODULE_0__.StoreApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: CartService,
    factory: CartService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4835:
/*!************************************************************!*\
  !*** ./store-angular/src/app/services/checkout.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutService: () => (/* binding */ CheckoutService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _store_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-api.service */ 393);


class CheckoutService {
  api;
  constructor(api) {
    this.api = api;
  }
  placeOrder(checkoutData) {
    return this.api.placeOrder(checkoutData);
  }
  static ɵfac = function CheckoutService_Factory(t) {
    return new (t || CheckoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_store_api_service__WEBPACK_IMPORTED_MODULE_0__.StoreApiService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CheckoutService,
    factory: CheckoutService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8641:
/*!**********************************************************!*\
  !*** ./store-angular/src/app/services/coupon.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CouponService: () => (/* binding */ CouponService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class CouponService {
  http;
  constructor(http) {
    this.http = http;
  }
  getActiveCoupons() {
    return this.http.get('/api/cupones/activos', {
      withCredentials: true
    });
  }
  static ɵfac = function CouponService_Factory(t) {
    return new (t || CouponService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CouponService,
    factory: CouponService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 393:
/*!*************************************************************!*\
  !*** ./store-angular/src/app/services/store-api.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreApiService: () => (/* binding */ StoreApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class StoreApiService {
  http;
  constructor(http) {
    this.http = http;
  }
  getCatalog(filters) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filters.page) params = params.set('page', String(filters.page));
    if (filters.limit) params = params.set('limit', String(filters.limit));
    if (filters.search) params = params.set('search', filters.search);
    if (filters.categoria) params = params.set('categoria', filters.categoria);
    return this.http.get('/api/productos/public', {
      params,
      withCredentials: true
    });
  }
  getProductById(id) {
    return this.http.get(`/api/productos/public/${id}`, {
      withCredentials: true
    });
  }
  getCategories() {
    return this.http.get('/api/categorias/all', {
      withCredentials: true
    });
  }
  getCurrentSession() {
    return this.http.get('/api/auth/me', {
      withCredentials: true
    });
  }
  register(payload) {
    return this.http.post('/api/auth/register', payload, {
      withCredentials: true
    });
  }
  login(payload) {
    return this.http.post('/api/auth/login', payload, {
      withCredentials: true
    });
  }
  logout() {
    return this.http.post('/api/auth/logout', {}, {
      withCredentials: true
    });
  }
  getCart(couponCode = '') {
    const options = {
      withCredentials: true
    };
    if (couponCode) {
      options.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('couponCode', couponCode);
    }
    return this.http.get('/api/carrito', options);
  }
  calculateCart(payload) {
    return this.http.post('/api/carrito/calcular', payload, {
      withCredentials: true
    });
  }
  addCartItem(payload) {
    return this.http.post('/api/carrito/items', payload, {
      withCredentials: true
    });
  }
  updateCartItem(productoId, payload) {
    return this.http.patch(`/api/carrito/items/${productoId}`, payload, {
      withCredentials: true
    });
  }
  removeCartItem(productoId, couponCode = '') {
    return this.http.request('DELETE', `/api/carrito/items/${productoId}`, {
      withCredentials: true,
      body: {
        couponCode
      }
    });
  }
  importCart(payload) {
    return this.http.post('/api/carrito/import', payload, {
      withCredentials: true
    });
  }
  validateCoupon(payload) {
    return this.http.post('/api/cupones/validar', payload, {
      withCredentials: true
    });
  }
  getPurchases() {
    return this.http.get('/api/compras', {
      withCredentials: true
    });
  }
  createPurchase(payload) {
    return this.http.post('/api/compras', payload, {
      withCredentials: true
    });
  }
  getUserProfile() {
    return this.http.get('/api/auth/profile', {
      withCredentials: true
    });
  }
  getFeaturedProducts() {
    return this.http.get('/api/productos/destacados', {
      withCredentials: true
    });
  }
  getCouponOfTheDay() {
    return this.http.get('/api/cupones/dia', {
      withCredentials: true
    });
  }
  placeOrder(payload) {
    return this.http.post('/api/checkout', payload, {
      withCredentials: true
    });
  }
  getOrderById(id) {
    return this.http.get(`/api/orders/${id}`, {
      withCredentials: true
    });
  }
  getUserOrders() {
    return this.http.get('/api/orders', {
      withCredentials: true
    });
  }
  static ɵfac = function StoreApiService_Factory(t) {
    return new (t || StoreApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: StoreApiService,
    factory: StoreApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5182:
/*!***********************************!*\
  !*** ./store-angular/src/main.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 4124);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 5498);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.component */ 925);




(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(error => {
  console.error('No se pudo iniciar la tienda Angular:', error);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5182)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map