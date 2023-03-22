(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboarding-onboarding-module"],{

/***/ "Illq":
/*!*************************************************!*\
  !*** ./src/app/onboarding/onboarding.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\n\nion-slide {\n  display: block;\n}\n\nion-slide img {\n  padding: 15%;\n}\n\n.slider-text {\n  padding-top: 20%;\n}\n\n.navigator {\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  width: 100%;\n  left: 80%;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBRkoiLCJmaWxlIjoib25ib2FyZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVze1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmlvbi1zbGlkZXtcbiAgICBkaXNwbGF5OiBibG9jaztcblxufVxuXG5pb24tc2xpZGUgaW1nIHtcbiAgICBwYWRkaW5nOiAxNSU7XG5cbn1cbi5zbGlkZXItdGV4dHtcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xuXG4gICBcbn1cblxuXG4ubmF2aWdhdG9ye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiA4MCU7XG4gICAgYm90dG9tOiAwO1xufVxuIl19 */");

/***/ }),

/***/ "QKJs":
/*!***********************************************!*\
  !*** ./src/app/onboarding/onboarding.page.ts ***!
  \***********************************************/
/*! exports provided: OnboardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPage", function() { return OnboardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./onboarding.page.html */ "bcPs");
/* harmony import */ var _onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onboarding.page.scss */ "Illq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let OnboardingPage = class OnboardingPage {
    constructor() { }
    ngOnInit() {
    }
    next() {
        this.slides.slideNext();
    }
};
OnboardingPage.ctorParameters = () => [];
OnboardingPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"],] }]
};
OnboardingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-onboarding',
        template: _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OnboardingPage);



/***/ }),

/***/ "bcPs":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/onboarding.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <ion-header>\n \n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-slides pager=\"true\">\n    <ion-slide class=\"ion-padding\">\n      <img src=\"../../assets/onboarding/devices.png\">\n      <div class=\"slider-text\">\n        <h2>Pocket IOT</h2>\n        <p>\n          แอปสำหรับควมคุบอุปกรณ์ IOT \n        </p>\n      </div>\n      <div class=\"navigator\">\n        \n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"next()\">NEXT</ion-button>\n      </div>\n    </ion-slide>\n\n    <ion-slide class=\"ion-padding\">\n      <img src=\"../../assets/onboarding/virtual.png\">\n      <div class=\"slider-text\">\n        <h2>Easy to Use</h2>\n        <p>\n          ใช้งานง่ายเพียงปลายนิ้ว\n        </p>\n      </div>\n      <div class=\"navigator\">\n        \n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"next()\">NEXT</ion-button>\n      </div>\n\n    </ion-slide>\n\n\n    <ion-slide class=\"ion-padding\">\n      <img src=\"../../assets/onboarding/wifi.png\">\n      <div class=\"slider-text\">\n        <h2>Connect Multiple devices </h2>\n        <p>\n          เชื่อมต่อได้หลายอุปกรณ์\n        </p>\n      </div>\n      <ion-button color=\"primary\" routerLink=\"/login\">Get Started</ion-button>\n     \n\n    </ion-slide>\n\n  </ion-slides>\n \n</ion-content>\n");

/***/ }),

/***/ "eQKf":
/*!*********************************************************!*\
  !*** ./src/app/onboarding/onboarding-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OnboardingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageRoutingModule", function() { return OnboardingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding.page */ "QKJs");




const routes = [
    {
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingPage"]
    }
];
let OnboardingPageRoutingModule = class OnboardingPageRoutingModule {
};
OnboardingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnboardingPageRoutingModule);



/***/ }),

/***/ "tSXo":
/*!*************************************************!*\
  !*** ./src/app/onboarding/onboarding.module.ts ***!
  \*************************************************/
/*! exports provided: OnboardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onboarding-routing.module */ "eQKf");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboarding.page */ "QKJs");







let OnboardingPageModule = class OnboardingPageModule {
};
OnboardingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingPageRoutingModule"]
        ],
        declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPage"]]
    })
], OnboardingPageModule);



/***/ })

}]);
//# sourceMappingURL=onboarding-onboarding-module.js.map