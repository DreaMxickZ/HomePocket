(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_main_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/main-api.service */ "Zfby");





let LoginPage = class LoginPage {
    constructor(mainApiService) {
        this.mainApiService = mainApiService;
        this.email = '';
        this.password = '';
        this.isShowForgot = false;
        // this.getGatewysonSnapshot()
    }
    ngOnInit() {
        this.getGatewys();
    }
    onClick() {
        // console.log(this.email, this.password);
        this.mainApiService.loginByEmail(this.email, this.password);
    }
    checkForm() {
        if (this.email && this.password) {
            this.isShowForgot = true;
            return false;
        }
        return true;
    }
    getGatewysonSnapshot() {
        this.mainApiService.dbGateways.onSnapshot(res => {
            const gateways = [];
            res.forEach(doc => {
                if (doc.exists) {
                    const data = doc.data();
                    data.id = doc.id;
                    gateways.push(data);
                }
            });
            this.gateways = gateways;
            console.log(gateways);
        });
    }
    getGatewys() {
        this.mainApiService.dbGateways.get().then(res => {
            const gateways = [];
            res.forEach(doc => {
                if (doc.exists) {
                    const data = doc.data();
                    data.id = doc.id;
                    gateways.push(data);
                }
            });
            this.gateways = gateways;
            // console.log(gateways);
            // this.test(gateways[0])
            this.basicLoop();
        }).catch(err => {
            console.log(err);
        });
    }
    test(doc) {
        this.mainApiService.dbGateways.doc(doc.id).update({
            name: 'นุ๊ค2'
        }).catch(err => {
            console.log(err);
        });
    }
    login() {
        const { email, password } = this;
    }
    basicLoop() {
        //  for (let index = 0; index < this.gateways.length; index++) {
        //   //  console.log(index);
        //    const element = this.gateways[index];
        //    console.log(element);
        //  }
        //  this.gateways.forEach((element,index) => {
        //    console.log(element,index);
        //  });
        //  for (const iterator of this.gateways) {
        //    console.log(iterator);
        //  }
        //  for (const key in this.gateways) {
        //    console.log(key);
        //    if (Object.prototype.hasOwnProperty.call(this.gateways, key)) {
        //      const element = this.gateways[key];
        //      console.log(element);
        //    }
        //  }
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_main_api_service__WEBPACK_IMPORTED_MODULE_4__["MainApiService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"Login-section ion-padding\">\n    <div class=\"heading ion-padding\">\n      <h1>Welcome Pocket IOT</h1>\n      <p>Sign in to continue</p>\n      <!-- <p *ngFor=\"let gateway of gateways\">{{gateway.name}}</p> -->\n      \n      <div class=\"login-form ion-padding\">\n        <div class=\"form-input\">\n          <ion-icon name=\"mail-outline\"></ion-icon>\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label><br><br>\n            <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n          </ion-item>\n        </div>\n\n        <div class=\"form-input\">\n          <ion-icon name=\"lock-closed-outline\"></ion-icon>\n          <ion-item>\n            <ion-label position=\"floating\">Password</ion-label><br><br>\n            <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n          </ion-item>\n        </div>\n\n\n\n      </div>\n    </div>\n    <div class=\"action-button ion-padding\">\n      <ion-button size=\"large\" class=\"login-button\" (click)=\"onClick()\" [disabled]=\"checkForm()\">Log in</ion-button>\n      <p *ngIf=\"isShowForgot\">Forgot password ?</p>\n      <ion-button class=\"signup-button\" size=\"large\" fill=\"outline\" routerLink=\"/signup\">Sign up</ion-button>\n      <br>\n      <p></p>\n      <div class=\"login-app ion-paddind\">\n        <br>\n        <ion-icon name=\"logo-facebook\" ></ion-icon>\n        &nbsp;&nbsp;&nbsp;\n        <ion-icon name=\"logo-google\"></ion-icon>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: linear-gradient(0deg,rgba(0,0,0,0.7), rgba(0,0,0,0.1)),\n  url(\"/assets/bg/bg.png\");\n}\n\n.Login-section {\n  height: 80vh;\n  width: 100%;\n  max-width: 500px;\n  background: #fff;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  position: fixed;\n  margin: auto;\n  border-top-left-radius: 46px;\n  border-top-right-radius: 46px;\n}\n\n.Login-section .heading {\n  margin-top: 20;\n}\n\n.Login-section .heading h1 {\n  font-size: 1.6rem;\n  font-weight: bolder;\n}\n\n.Login-section .heading p {\n  margin-top: 20px;\n  font-size: 1rem;\n  color: #7b7b7b;\n}\n\n.Login-section .heading .login-form .form-input {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.Login-section .heading .login-form .form-input ion-item::part(native) {\n  padding-left: 0;\n}\n\n.Login-section .heading .login-form .form-input ion-icon {\n  position: absolute;\n  top: 15px;\n  z-index: 2;\n  font-size: 1.2rem;\n  left: 5px;\n}\n\n.Login-section .heading .login-form .form-input ion-label {\n  position: absolute;\n  margin-left: 35px;\n  font-weight: bolder;\n  font-size: 0.8rem;\n  top: 3px;\n}\n\n.Login-section .heading .login-form .form-input ion-input {\n  font-size: 1rem;\n  --padding-start: ;\n  --padding-top: 50 ;\n  color: #7b7b7b;\n}\n\n.Login-section .action-button {\n  text-align: center;\n}\n\n.Login-section .action-button .login-button {\n  --backgroud: #f9b801;\n  width: 100%;\n  font-weight: bold;\n}\n\n.Login-section .action-button p {\n  margin-top: 15px;\n  font-size: 1rem;\n  color: #7b7b7b;\n}\n\n.Login-section .action-button .signup-button {\n  --border-color:#b4b4b4;\n  -color: #000000;\n  font-weight: bold;\n  margin-top: 30px;\n  width: 100%;\n}\n\n.Login-section .action-button .login-app ion-icon {\n  top: 37px;\n  z-index: 2;\n  font-size: 2rem;\n  left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzBCQUFBO0FBRUo7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFDSTtFQUNJLGNBQUE7QUFDUjs7QUFDUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFDWjs7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDWjs7QUFJWTtFQUNRLGtCQUFBO0VBQ0EsbUJBQUE7QUFGcEI7O0FBR29CO0VBQ0ksZUFBQTtBQUR4Qjs7QUFHb0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBRHhCOztBQUlvQjtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtBQUZ4Qjs7QUFLb0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFIeEI7O0FBVVE7RUFDSSxrQkFBQTtBQVJaOztBQVNZO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFQaEI7O0FBU1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBUGhCOztBQVVZO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFSaEI7O0FBZWdCO0VBRUksU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQWRwQiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kIDogbGluZWFyLWdyYWRpZW50KDBkZWcscmdiYSgwLDAsMCwwLjcpLCByZ2JhKDAsMCwwLDAuMSkpLFxuICAgdXJsKFwiL2Fzc2V0cy9iZy9iZy5wbmdcIik7XG59XG5cbi5Mb2dpbi1zZWN0aW9uIHtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDZweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDZweDtcblxuICAgIC5oZWFkaW5neyBcbiAgICAgICAgbWFyZ2luLXRvcDogMjA7XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogIGJvbGRlcjtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjN2I3YjdiO1xuXG4gICAgICAgIH1cblxuICAgICAgICAubG9naW4tZm9ybXtcbiAgICAgICAgICAgIC5mb3JtLWlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBpb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIgO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAgNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICBib2xkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICAwLjhyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6M3B4O1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydCA6IDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDUwIDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjN2I3YjdiO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuYWN0aW9uLWJ1dHRvbntcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIC5sb2dpbi1idXR0b257XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdWQ6ICNmOWI4MDE7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiM3YjdiN2I7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaWdudXAtYnV0dG9ue1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiNiNGI0YjQ7XG4gICAgICAgICAgICAgICAgLWNvbG9yOiMwMDAwMDA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dpbi1hcHB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0b3AgOjM3cHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIgO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICA1cHg7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map