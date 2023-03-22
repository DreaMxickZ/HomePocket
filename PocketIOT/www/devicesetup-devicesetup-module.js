(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["devicesetup-devicesetup-module"],{

/***/ "/IR0":
/*!*************************************************!*\
  !*** ./src/app/devicesetup/devicesetup.page.ts ***!
  \*************************************************/
/*! exports provided: DevicesetupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesetupPage", function() { return DevicesetupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_devicesetup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./devicesetup.page.html */ "XzbJ");
/* harmony import */ var _devicesetup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devicesetup.page.scss */ "xHXV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DevicesetupPage = class DevicesetupPage {
    constructor() { }
    ngOnInit() {
    }
};
DevicesetupPage.ctorParameters = () => [];
DevicesetupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-devicesetup',
        template: _raw_loader_devicesetup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_devicesetup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DevicesetupPage);



/***/ }),

/***/ "9fF5":
/*!***************************************************!*\
  !*** ./src/app/devicesetup/devicesetup.module.ts ***!
  \***************************************************/
/*! exports provided: DevicesetupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesetupPageModule", function() { return DevicesetupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _devicesetup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./devicesetup-routing.module */ "zPye");
/* harmony import */ var _devicesetup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devicesetup.page */ "/IR0");







let DevicesetupPageModule = class DevicesetupPageModule {
};
DevicesetupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _devicesetup_routing_module__WEBPACK_IMPORTED_MODULE_5__["DevicesetupPageRoutingModule"]
        ],
        declarations: [_devicesetup_page__WEBPACK_IMPORTED_MODULE_6__["DevicesetupPage"]]
    })
], DevicesetupPageModule);



/***/ }),

/***/ "XzbJ":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/devicesetup/devicesetup.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>devicesetup</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "xHXV":
/*!***************************************************!*\
  !*** ./src/app/devicesetup/devicesetup.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2VzZXR1cC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "zPye":
/*!***********************************************************!*\
  !*** ./src/app/devicesetup/devicesetup-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DevicesetupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesetupPageRoutingModule", function() { return DevicesetupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _devicesetup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devicesetup.page */ "/IR0");




const routes = [
    {
        path: '',
        component: _devicesetup_page__WEBPACK_IMPORTED_MODULE_3__["DevicesetupPage"]
    }
];
let DevicesetupPageRoutingModule = class DevicesetupPageRoutingModule {
};
DevicesetupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DevicesetupPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=devicesetup-devicesetup-module.js.map