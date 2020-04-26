function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-klassensteckbrief-klassensteckbrief-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/klassenkarte/klassenkarte.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/klassenkarte/klassenkarte.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsKlassenkarteKlassenkarteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card>\r\n  <img src=\"../../../assets/img/klasse4a.jpg\">\r\n  <ion-card-header>\r\n    <ion-card-subtitle>Klassensteckbrief</ion-card-subtitle>\r\n    <ion-card-title>Klasse 4a</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    <ion-list>\r\n      <ion-item button class=\"cursor\" href=\"/anwesenheit\">\r\n        <ion-label>Anzahl SchülerInnen</ion-label>\r\n        <ion-badge color=\"success\">25</ion-badge>\r\n      </ion-item>      \r\n      <ion-item>...</ion-item>\r\n      <ion-item>...</ion-item>\r\n      <ion-item>...</ion-item>\r\n    </ion-list>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-card>\r\n  <img src=\"../../../assets/img/klasse6b.jpg\">\r\n  <ion-card-header>\r\n    <ion-card-subtitle>Klassensteckbrief</ion-card-subtitle>\r\n    <ion-card-title>Klasse 6b</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    <ion-list>\r\n      <ion-item button class=\"cursor\" href=\"/anwesenheit\">\r\n        <ion-label>Anzahl SchülerInnen</ion-label>\r\n        <ion-badge color=\"success\">28</ion-badge>\r\n      </ion-item>      \r\n      <ion-item>...</ion-item>\r\n      <ion-item>...</ion-item>\r\n      <ion-item>...</ion-item>\r\n    </ion-list>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/klassensteckbrief/klassensteckbrief.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/klassensteckbrief/klassensteckbrief.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesKlassensteckbriefKlassensteckbriefPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Klassensteckbrief</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-klassenkarte></app-klassenkarte>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/components/klassenkarte/klassenkarte.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/klassenkarte/klassenkarte.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsKlassenkarteKlassenkarteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMva2xhc3NlbmthcnRlL2tsYXNzZW5rYXJ0ZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/klassenkarte/klassenkarte.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/klassenkarte/klassenkarte.component.ts ***!
    \*******************************************************************/

  /*! exports provided: KlassenkarteComponent */

  /***/
  function srcAppComponentsKlassenkarteKlassenkarteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KlassenkarteComponent", function () {
      return KlassenkarteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var KlassenkarteComponent = /*#__PURE__*/function () {
      function KlassenkarteComponent() {
        _classCallCheck(this, KlassenkarteComponent);
      }

      _createClass(KlassenkarteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KlassenkarteComponent;
    }();

    KlassenkarteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-klassenkarte',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./klassenkarte.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/klassenkarte/klassenkarte.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./klassenkarte.component.scss */
      "./src/app/components/klassenkarte/klassenkarte.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], KlassenkarteComponent);
    /***/
  },

  /***/
  "./src/app/pages/klassensteckbrief/klassensteckbrief-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/klassensteckbrief/klassensteckbrief-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: KlassensteckbriefPageRoutingModule */

  /***/
  function srcAppPagesKlassensteckbriefKlassensteckbriefRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KlassensteckbriefPageRoutingModule", function () {
      return KlassensteckbriefPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _klassensteckbrief_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./klassensteckbrief.page */
    "./src/app/pages/klassensteckbrief/klassensteckbrief.page.ts");

    var routes = [{
      path: '',
      component: _klassensteckbrief_page__WEBPACK_IMPORTED_MODULE_3__["KlassensteckbriefPage"]
    }];

    var KlassensteckbriefPageRoutingModule = function KlassensteckbriefPageRoutingModule() {
      _classCallCheck(this, KlassensteckbriefPageRoutingModule);
    };

    KlassensteckbriefPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], KlassensteckbriefPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/klassensteckbrief/klassensteckbrief.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/klassensteckbrief/klassensteckbrief.module.ts ***!
    \*********************************************************************/

  /*! exports provided: KlassensteckbriefPageModule */

  /***/
  function srcAppPagesKlassensteckbriefKlassensteckbriefModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KlassensteckbriefPageModule", function () {
      return KlassensteckbriefPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _klassensteckbrief_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./klassensteckbrief-routing.module */
    "./src/app/pages/klassensteckbrief/klassensteckbrief-routing.module.ts");
    /* harmony import */


    var _klassensteckbrief_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./klassensteckbrief.page */
    "./src/app/pages/klassensteckbrief/klassensteckbrief.page.ts");
    /* harmony import */


    var _components_klassenkarte_klassenkarte_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/klassenkarte/klassenkarte.component */
    "./src/app/components/klassenkarte/klassenkarte.component.ts");

    var KlassensteckbriefPageModule = function KlassensteckbriefPageModule() {
      _classCallCheck(this, KlassensteckbriefPageModule);
    };

    KlassensteckbriefPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _klassensteckbrief_routing_module__WEBPACK_IMPORTED_MODULE_5__["KlassensteckbriefPageRoutingModule"]],
      declarations: [_klassensteckbrief_page__WEBPACK_IMPORTED_MODULE_6__["KlassensteckbriefPage"], _components_klassenkarte_klassenkarte_component__WEBPACK_IMPORTED_MODULE_7__["KlassenkarteComponent"]]
    })], KlassensteckbriefPageModule);
    /***/
  },

  /***/
  "./src/app/pages/klassensteckbrief/klassensteckbrief.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/klassensteckbrief/klassensteckbrief.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesKlassensteckbriefKlassensteckbriefPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2tsYXNzZW5zdGVja2JyaWVmL2tsYXNzZW5zdGVja2JyaWVmLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/klassensteckbrief/klassensteckbrief.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/klassensteckbrief/klassensteckbrief.page.ts ***!
    \*******************************************************************/

  /*! exports provided: KlassensteckbriefPage */

  /***/
  function srcAppPagesKlassensteckbriefKlassensteckbriefPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KlassensteckbriefPage", function () {
      return KlassensteckbriefPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var KlassensteckbriefPage = /*#__PURE__*/function () {
      function KlassensteckbriefPage() {
        _classCallCheck(this, KlassensteckbriefPage);
      }

      _createClass(KlassensteckbriefPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KlassensteckbriefPage;
    }();

    KlassensteckbriefPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-klassensteckbrief',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./klassensteckbrief.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/klassensteckbrief/klassensteckbrief.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./klassensteckbrief.page.scss */
      "./src/app/pages/klassensteckbrief/klassensteckbrief.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], KlassensteckbriefPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-klassensteckbrief-klassensteckbrief-module-es5.js.map