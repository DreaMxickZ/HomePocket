(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "6h0i":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content fullscreen=\"true\" slot=\"fixed\" >\n  <form >\n    <div class=\"Login-section ion-padding\">\n      <div class=\"heading ion-padding\">\n        <h1>Create an account !</h1>\n        <p>Start yout career with us</p>\n\n        <div class=\"login-form ion-padding\">\n\n          <div class=\"form-input\">\n            <ion-icon name=\"person-outline\"></ion-icon>\n            <ion-item>\n              <ion-label position=\"floating\">First Name</ion-label><br><br>\n              <ion-input name=\"firstName\" [(ngModel)]=\"form.firstName\"></ion-input>\n            </ion-item>\n          </div>\n\n          <div class=\"form-input\">\n            <ion-icon name=\"person-outline\"></ion-icon>\n            <ion-item>\n              <ion-label position=\"floating\">Last Name</ion-label><br><br>\n              <ion-input name=\"lastName\" [(ngModel)]=\"form.lastName\" ></ion-input>\n            </ion-item>\n          </div>\n\n          <div class=\"form-input\">\n            <ion-icon name=\"mail-outline\"></ion-icon>\n            <ion-item>\n              <ion-label position=\"floating\">Email</ion-label><br><br>\n              <ion-input name=\"email\" [(ngModel)]=\"form.email\" type=\"email\"></ion-input>\n            </ion-item>\n          </div>\n\n          <div class=\"form-input\">\n            <ion-icon name=\"lock-closed-outline\"></ion-icon>\n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label><br><br>\n              <ion-input name=\"password\" [(ngModel)]=\"form.password\" type=\"password\"></ion-input>\n            </ion-item>\n          </div>\n\n          <div class=\"form-input\">\n            <ion-icon name=\"lock-closed-outline\"></ion-icon>\n            <ion-item>\n              <ion-label position=\"floating\">Re-Password</ion-label><br><br>\n              <ion-input name=\"cpassword\" [(ngModel)]=\"form.cpassword\" type=\"password\"></ion-input>\n            </ion-item>\n          </div>\n\n\n\n\n\n\n        </div>\n      </div>\n      <div class=\"action-button ion-padding\">\n        <ion-button size=\"large\" class=\"login-button\" (click)=\"onSubmit()\">Sing up</ion-button>\n         <p>Already registered ?</p>\n        <ion-button class=\"signup-button\" size=\"large\" fill=\"outline\" routerLink=\"/login\" >Log in</ion-button>\n      </div>\n    </div>\n  </form>\n\n\n</ion-content>\n");

/***/ }),

/***/ "RPFs":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "yL7A");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "T9iC":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "RPFs");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "yL7A");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "fJgH":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: linear-gradient(0deg,rgba(0,0,0,0.7), rgba(0,0,0,0.1)),\n  url(\"/assets/bg/bg.png\");\n}\n\n.Login-section {\n  height: 95vh;\n  width: 100%;\n  max-width: 500px;\n  background: #fff;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  position: fixed;\n  margin: auto;\n  border-top-left-radius: 46px;\n  border-top-right-radius: 46px;\n}\n\n.Login-section .heading {\n  margin-top: 20;\n}\n\n.Login-section .heading h1 {\n  font-size: 1.6rem;\n  font-weight: bolder;\n}\n\n.Login-section .heading p {\n  margin-top: 20px;\n  font-size: 1rem;\n  color: #7b7b7b;\n}\n\n.Login-section .heading .login-form .form-input {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.Login-section .heading .login-form .form-input ion-item::part(native) {\n  padding-left: 0;\n}\n\n.Login-section .heading .login-form .form-input ion-icon {\n  position: absolute;\n  top: 15px;\n  z-index: 2;\n  font-size: 1.2rem;\n  left: 5px;\n}\n\n.Login-section .heading .login-form .form-input ion-label {\n  position: absolute;\n  margin-left: 35px;\n  font-weight: bolder;\n  font-size: 0.8rem;\n  top: 3px;\n}\n\n.Login-section .heading .login-form .form-input ion-input {\n  font-size: 1rem;\n  --padding-start: ;\n  --padding-top: ;\n  color: #7b7b7b;\n}\n\n.Login-section .action-button {\n  text-align: center;\n}\n\n.Login-section .action-button .login-button {\n  --backgroud: #f9b801;\n  width: 100%;\n  font-weight: bold;\n}\n\n.Login-section .action-button p {\n  margin-top: 15px;\n  font-size: 1rem;\n  color: #7b7b7b;\n}\n\n.Login-section .action-button .signup-button {\n  --border-color:#b4b4b4;\n  -color: #000000;\n  font-weight: bold;\n  margin-top: 30px;\n  width: 100%;\n}\n\n.Login-section .action-button .login-app ion-icon {\n  top: 37px;\n  z-index: 2;\n  font-size: 2rem;\n  left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTswQkFBQTtBQUVKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxjQUFBO0FBQ1I7O0FBQ1E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBQ1o7O0FBQ1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ1o7O0FBSVk7RUFDUSxrQkFBQTtFQUNBLG1CQUFBO0FBRnBCOztBQUdvQjtFQUNJLGVBQUE7QUFEeEI7O0FBR29CO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUR4Qjs7QUFJb0I7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7QUFGeEI7O0FBS29CO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFIeEI7O0FBVVE7RUFDSSxrQkFBQTtBQVJaOztBQVNZO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFQaEI7O0FBU1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBUGhCOztBQVVZO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFSaEI7O0FBZWdCO0VBRUksU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQWRwQiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCgwZGVnLHJnYmEoMCwwLDAsMC43KSwgcmdiYSgwLDAsMCwwLjEpKSxcbiAgIHVybChcIi9hc3NldHMvYmcvYmcucG5nXCIpO1xufVxuXG4uTG9naW4tc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiA5NXZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ2cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ2cHg7XG5cbiAgICAuaGVhZGluZ3sgXG4gICAgICAgIG1hcmdpbi10b3A6IDIwO1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICBib2xkZXI7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogIzdiN2I3YjtcblxuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ2luLWZvcm17XG4gICAgICAgICAgICAuZm9ybS1pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyIDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogIDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAgYm9sZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAgMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjNweDtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQgOiA7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzdiN2I3YjtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbi1idXR0b257XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAubG9naW4tYnV0dG9ue1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VkOiAjZjliODAxO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjojN2I3YjdiO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2lnbnVwLWJ1dHRvbntcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjojYjRiNGI0O1xuICAgICAgICAgICAgICAgIC1jb2xvcjojMDAwMDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubG9naW4tYXBwe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdG9wIDozN3B4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyIDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAgNXB4O1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "yL7A":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.page.html */ "6h0i");
/* harmony import */ var _signup_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signup/signup.page.scss */ "fJgH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_main_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/main-api.service */ "Zfby");






let SignupPage = class SignupPage {
    constructor(formBuilder, mainApiService) {
        this.formBuilder = formBuilder;
        this.mainApiService = mainApiService;
        this.form = {
            id: null,
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            cpassword: null,
            type: 'user'
        };
        this.formRegis = this.initUserFormGroup();
    }
    ngOnInit() {
    }
    onSubmit() {
        // console.log(this.form);
        if (this.form.firstName && this.form.email && this.form.email && this.form.password && (this.form.password === this.form.cpassword)) {
            console.log(this.form);
            this.mainApiService.signupByEmail(this.form);
        }
        else {
            alert('form ไม่ครบ');
        }
    }
    initUserFormGroup() {
        const formControls = {
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type: ['user', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        };
        return this.formBuilder.group(formControls, {
            validator: this.checkIfMatchingPasswords('password', 'cpassword')
        });
    }
    checkIfMatchingPasswords(passwordKey, passwordConfirmationKey) {
        return (group) => {
            const passwordInput = group.controls[passwordKey];
            const passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_main_api_service__WEBPACK_IMPORTED_MODULE_5__["MainApiService"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map