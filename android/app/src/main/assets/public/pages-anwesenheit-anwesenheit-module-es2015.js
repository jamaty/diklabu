(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-anwesenheit-anwesenheit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-schueler/list-schueler.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-schueler/list-schueler.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<!-- List of Text Items -->\r\n<h4>Anwesend</h4>\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"../../../assets/img/schueler.jpg\">\r\n    </ion-avatar>\r\n    <ion-label>Max Mustermann</ion-label>\r\n    <ion-toggle checked></ion-toggle>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"../../../assets/img/schueler.jpg\">\r\n    </ion-avatar>\r\n    <ion-label>Max Mustermann</ion-label>\r\n    <ion-toggle checked></ion-toggle>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"../../../assets/img/schueler.jpg\">\r\n    </ion-avatar>\r\n    <ion-label>Max Mustermann</ion-label>\r\n    <ion-toggle checked></ion-toggle>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"../../../assets/img/schueler.jpg\">\r\n    </ion-avatar>\r\n    <ion-label>Max Mustermann</ion-label>\r\n    <ion-toggle checked></ion-toggle>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"../../../assets/img/schueler.jpg\">\r\n    </ion-avatar>\r\n    <ion-label>Max Mustermann</ion-label>\r\n    <ion-toggle checked></ion-toggle>\r\n  </ion-item>\r\n  \r\n  <h4>Krankgemeldet</h4>  \r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"../../../assets/img/schueler.jpg\">\r\n    </ion-avatar>\r\n    <ion-label>Max Mustermann</ion-label>\r\n    <ion-toggle></ion-toggle>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"../../../assets/img/schueler.jpg\">\r\n    </ion-avatar>\r\n    <ion-label>Max Mustermann</ion-label>\r\n    <ion-toggle></ion-toggle>\r\n  </ion-item>\r\n  <h4>Unentschuldigt</h4>  \r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"../../../assets/img/schueler.jpg\">\r\n    </ion-avatar>\r\n    <ion-label>Max Mustermann</ion-label>\r\n    <ion-toggle></ion-toggle>\r\n  </ion-item>\r\n</ion-list>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/anwesenheit/anwesenheit.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/anwesenheit/anwesenheit.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Anwesenheit</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-list-schueler></app-list-schueler>\r\n  <ion-button expand=\"full\" color=\"primary\">Schulbeginn</ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/components/list-schueler/list-schueler.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/list-schueler/list-schueler.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1zY2h1ZWxlci9saXN0LXNjaHVlbGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/list-schueler/list-schueler.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/list-schueler/list-schueler.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListSchuelerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSchuelerComponent", function() { return ListSchuelerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListSchuelerComponent = class ListSchuelerComponent {
    constructor() { }
    ngOnInit() { }
};
ListSchuelerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-schueler',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-schueler.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-schueler/list-schueler.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-schueler.component.scss */ "./src/app/components/list-schueler/list-schueler.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ListSchuelerComponent);



/***/ }),

/***/ "./src/app/pages/anwesenheit/anwesenheit-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/anwesenheit/anwesenheit-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AnwesenheitPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnwesenheitPageRoutingModule", function() { return AnwesenheitPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _anwesenheit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anwesenheit.page */ "./src/app/pages/anwesenheit/anwesenheit.page.ts");




const routes = [
    {
        path: '',
        component: _anwesenheit_page__WEBPACK_IMPORTED_MODULE_3__["AnwesenheitPage"]
    }
];
let AnwesenheitPageRoutingModule = class AnwesenheitPageRoutingModule {
};
AnwesenheitPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AnwesenheitPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/anwesenheit/anwesenheit.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/anwesenheit/anwesenheit.module.ts ***!
  \*********************************************************/
/*! exports provided: AnwesenheitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnwesenheitPageModule", function() { return AnwesenheitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _anwesenheit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./anwesenheit-routing.module */ "./src/app/pages/anwesenheit/anwesenheit-routing.module.ts");
/* harmony import */ var _anwesenheit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./anwesenheit.page */ "./src/app/pages/anwesenheit/anwesenheit.page.ts");
/* harmony import */ var _components_list_schueler_list_schueler_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/list-schueler/list-schueler.component */ "./src/app/components/list-schueler/list-schueler.component.ts");








let AnwesenheitPageModule = class AnwesenheitPageModule {
};
AnwesenheitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _anwesenheit_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnwesenheitPageRoutingModule"]
        ],
        declarations: [_anwesenheit_page__WEBPACK_IMPORTED_MODULE_6__["AnwesenheitPage"], _components_list_schueler_list_schueler_component__WEBPACK_IMPORTED_MODULE_7__["ListSchuelerComponent"]]
    })
], AnwesenheitPageModule);



/***/ }),

/***/ "./src/app/pages/anwesenheit/anwesenheit.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/anwesenheit/anwesenheit.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fud2VzZW5oZWl0L2Fud2VzZW5oZWl0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/anwesenheit/anwesenheit.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/anwesenheit/anwesenheit.page.ts ***!
  \*******************************************************/
/*! exports provided: AnwesenheitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnwesenheitPage", function() { return AnwesenheitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnwesenheitPage = class AnwesenheitPage {
    constructor() { }
    ngOnInit() {
    }
};
AnwesenheitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anwesenheit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./anwesenheit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/anwesenheit/anwesenheit.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./anwesenheit.page.scss */ "./src/app/pages/anwesenheit/anwesenheit.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AnwesenheitPage);



/***/ })

}]);
//# sourceMappingURL=pages-anwesenheit-anwesenheit-module-es2015.js.map