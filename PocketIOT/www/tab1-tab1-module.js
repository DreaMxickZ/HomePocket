(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent no-border>\n\n    <ion-header>\n        <ion-toolbar>\n\n            <ion-title>\n                Profile\n            </ion-title>\n\n\n        </ion-toolbar>\n    </ion-header>\n</ion-header>\n\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n\n\n    <div class=\"card-body\">\n        <div class=\"user-meta ion-text-center\">\n\n\n            <img src=\"/assets/member/user.png\">\n\n\n            <h3 class=\"playername\"> {{mainApiService?.user?.firstName}} {{mainApiService?.user?.lastName}}</h3>\n            <h5 class=\"country\">{{mainApiService?.user?.email}}</h5>\n            <h6 class=\"country\">{{mainApiService?.user?.City}}_{{mainApiService?.user?.County}}</h6>\n\n\n            <br>\n            <ion-button size=\"small\" slot=\"end\" color=\"danger\" (click)=\"logout()\">Sign out</ion-button>\n            <br><br><br><br>\n\n        </div>\n\n\n    </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_main_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/main-api.service */ "Zfby");





let Tab1Page = class Tab1Page {
    // user;
    constructor(mainApiService) {
        this.mainApiService = mainApiService;
        // this.user = this.mainApiService.user;
    }
    logout() {
        this.mainApiService.logout();
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_main_api_service__WEBPACK_IMPORTED_MODULE_4__["MainApiService"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-toolbar {\n  –background: transparent;\n}\n.signout-text {\n  color: red;\n  text-decoration: none;\n}\n.card {\n  margin: 0 auto;\n}\n.card .header {\n  height: 200px;\n}\n.card .header .avatar {\n  width: 160px;\n  height: 160px;\n  position: relative;\n  margin: 0 auto;\n}\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 4px));\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n.card-body {\n  height: 80vh;\n  background-color: #ffffff;\n  padding: 30px;\n  height: calc(100vh – (200px + 56px));\n  overflow: hidden;\n}\n.card-body .user-meta {\n  padding-top: 40px;\n}\n.card-body .user-meta .img {\n  padding: 20%;\n}\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n.card-about {\n  background-color: grey;\n  padding: 30px;\n  height: calc(100vh – (200px + 56px));\n  overflow: hidden;\n  border-top-left-radius: 46px;\n  border-top-right-radius: 46px;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  opacity: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUtoQjtFQUNJLHdCQUFBO0FBSEo7QUFRQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBQUxKO0FBU0E7RUFDSSxjQUFBO0FBTko7QUFRSTtFQUNJLGFBQUE7QUFOUjtBQVFRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFOWjtBQVFZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFOaEI7QUFZQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FBVEo7QUFXSTtFQUNJLGlCQUFBO0FBVFI7QUFVTztFQUNDLFlBQUE7QUFSUjtBQVdRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVRaO0FBWVE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQVZaO0FBZUE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBWkoiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50IHtcbiAgICBcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIOKAk2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG5cbn1cblxuLnNpZ25vdXQtdGV4dHtcbiAgICBjb2xvcjpyZWQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIFxufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcblxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYygtMSooODBweCArIDRweCkpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICM5RGM5MTI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcmQtYm9keSB7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmgg4oCTICgyMDBweCArIDU2cHgpKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLnVzZXItbWV0YSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgIC5pbWd7XG4gICAgICAgIHBhZGRpbmc6IDIwJTtcbiAgICAgICAgICBcbiAgICAgICB9XG4gICAgICAgIC5wbGF5ZXJuYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzMwMzk0MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgICAgY29sb3I6ICM5NDllYTY7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXJkLWFib3V0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmgg4oCTICgyMDBweCArIDU2cHgpKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ2cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ2cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBvcGFjaXR5OiA3MCU7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map