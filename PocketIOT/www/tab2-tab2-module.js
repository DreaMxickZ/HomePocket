(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  position: absolute;\n  z-index: 2;\n  font-size: 1.2rem;\n  left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFFQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBQUoiLCJmaWxlIjoidGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgXG4gICAgei1pbmRleDogMiA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbGVmdDogIDVweDtcbn1cblxuICAgIFxuIl19 */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_main_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/main-api.service */ "Zfby");





let Tab2Page = class Tab2Page {
    constructor(mainApiService) {
        // const test =  this.mainApiService.dbRealtime.ref('Relay/sw1').get().then(res=>{
        //   console.log(res);
        this.mainApiService = mainApiService;
        this.fetching = {};
        this.swiths = {};
        this.gatewayId = "B66jkrVCjCCtADfhmM2C";
        this.sw1 = false;
        this.sw2 = false;
        this.sw3 = false;
        this.sw4 = false;
        this.pump = false;
        // })
        // console.log(test);
    }
    ngOnInit() {
        // this.getGateway(this.gatewayId)
        this.onDRealtime();
    }
    onDRealtime() {
        if (this.fetching['dbRealtime' + this.gatewayId]) {
            this.fetching['dbRealtime' + this.gatewayId].off();
        }
        this.fetching['dbRealtime' + this.gatewayId] = this.mainApiService.dbRealtime.ref(`gateways/${this.gatewayId}`);
        this.fetching['dbRealtime' + this.gatewayId].on('value', res => {
            console.log('dbRealtime', res.val());
            this.pathValaueDBRealtime(res.val());
        });
    }
    checkValueBoolean(value) {
        if (value === '1' || value === 1 || value === true) {
            return true;
        }
        return false;
    }
    pathValaueDBRealtime(value) {
        if (value) {
            this.tempc = value.tempc;
            this.tempf = value.tempf;
            this.hump = value.hump;
            this.soilmoisturepercent = value.soilmoisturepercent;
            this.soilmoisturevalue = value.soilmoisturevalue;
            this.pm25 = value.pm25;
            this.pm5 = value.pm5;
            this.pm10 = value.pm10;
            this.sw1 = this.checkValueBoolean(value.sw1);
            this.sw2 = this.checkValueBoolean(value.sw2);
            this.sw3 = this.checkValueBoolean(value.sw3);
            this.sw4 = value.sw4 === '1' || value.sw4 === 1 || value.sw4 === true ? true : false;
            this.pump = this.checkValueBoolean(value.pump);
        }
    }
    onChangeForDBRealtime(key, value) {
        console.log(key, value);
        const dataUpdate = {};
        dataUpdate[`${key}`] = value;
        this.mainApiService.dbRealtime.ref(`gateways/${this.gatewayId}`).update(dataUpdate).then(res => {
            console.log('update success');
        }).catch(err => {
            console.error(err);
        });
    }
    getGateway(id) {
        this.fetching['getGateway'] = this.mainApiService.dbGateways.doc(id).onSnapshot(res => {
            if (res.exists) {
                this.gateway = res.data();
                this.pathValaue();
                // console.log(this.gateway);
            }
        });
    }
    pathValaue() {
        if (this.gateway) {
            this.sw1 = this.gateway.sw1 || false;
            this.sw2 = this.gateway.sw2 || false;
            this.sw3 = this.gateway.sw3 || false;
            this.sw4 = this.gateway.sw4 || false;
        }
    }
    onChange(key, value) {
        console.log(key, value);
        const dataUpdate = {};
        dataUpdate[key] = value;
        this.mainApiService.dbGateways.doc(this.gatewayId).update(dataUpdate).then(res => {
            console.log('update success');
        }).catch(err => {
            console.log(err);
        });
    }
    sw1c() {
        console.log("Switch 1");
        console.log(this.sw1);
        if (this.sw1 == true) {
            console.log('1เปิดแล้ว');
        }
        else {
            console.log('1ปิดแล้ว');
        }
    }
    sw2c() {
        console.log("Switch 2 ");
        console.log(this.sw2);
        if (this.sw2 == true) {
            console.log('2เปิดแล้ว');
        }
        else {
            console.log('2ปิดแล้ว');
        }
    }
    sw3c() {
        console.log("Switch 3");
        console.log(this.sw3);
    }
    sw4c() {
        console.log("Switch 4");
        console.log(this.sw4);
    }
    ngOnDestroy() {
        for (const key in this.fetching) {
            if (this.fetching.hasOwnProperty(key) && this.fetching[key]) {
                if (key.indexOf('unsubscribe') > -1) {
                    this.fetching[key].unsubscribe();
                }
                else if (key.indexOf('dbRealtime') > -1) {
                    this.fetching[key].off();
                }
                else {
                    this.fetching[key]();
                }
            }
        }
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_main_api_service__WEBPACK_IMPORTED_MODULE_4__["MainApiService"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Dashboard\n\n        </ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n    <ion-card name=\"Sw\">\n        <ion-item>\n\n            <ion-label>{{mainApiService?.user?.device1}}</ion-label>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <ion-list>\n                <ion-item>\n                    <ion-label>Switch 1 : {{mainApiService?.user?.sw1}}</ion-label>\n                    <ion-toggle color=\"primary\" [(ngModel)]=\"sw1\" (ionChange)=\"onChangeForDBRealtime('sw1',sw1)\"></ion-toggle>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>Switch 2 : {{mainApiService?.user?.sw2}}</ion-label>\n                    <ion-toggle color=\"secondary\" [(ngModel)]=\"sw2\" (ionChange)=\"onChangeForDBRealtime('sw2',sw2)\"></ion-toggle>\n                </ion-item>\n\n                <!--     <ion-item>\n                    <ion-label>Switch 3 : </ion-label>\n                    <ion-toggle color=\"danger\" [(ngModel)]=\"sw3\" (ionChange)=\"onChangeForDBRealtime('sw3',sw3)\" disabled=\"true\"></ion-toggle>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>Switch 4 : </ion-label>\n                    <ion-toggle color=\"success\" [(ngModel)]=\"sw4\" (ionChange)=\"onChangeForDBRealtime('sw4',sw4)\" disabled=\"true\"></ion-toggle>\n                </ion-item> -->\n            </ion-list>\n\n\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-item>\n\n            <ion-label>{{mainApiService?.user?.device2}}</ion-label>\n\n        </ion-item>\n\n        <ion-card-content>\n            <!-- \n            <p>สถานะการทำงาน :\n                <a>\n                    <ion-badge color=\"success\">ON</ion-badge>\n                </a>\n            </p> -->\n            <ion-list>\n                <ion-item>\n                    <ion-label>ปั๊มน้ำ : </ion-label>\n                    <ion-toggle color=\"danger\" [(ngModel)]=\"pump\" (ionChange)=\"onChangeForDBRealtime('pump',pump)\" disabled=\"true\"></ion-toggle>\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>ความชื้นในดิน :\n                        <ion-badge color=\"tertiary\">{{this.soilmoisturevalue}}</ion-badge>\n\n                    </ion-label>\n\n\n                </ion-item>\n\n                <!--   <ion-item>\n                    <ion-label>ความชื้นในดิน (คิดเป็นเปอร์เซ็น) :\n\n                        <ion-badge color=\"secondary\">{{this.soilmoisturepercent}}</ion-badge>\n\n\n                    </ion-label>\n                </ion-item> -->\n            </ion-list>\n\n\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-item>\n\n            <ion-label>{{mainApiService?.user?.device3}}</ion-label>\n        </ion-item>\n\n        <ion-card-content>\n            <!-- \n            <p>สถานะการทำงาน :\n                <a>\n                    <ion-badge color=\"success\">ON</ion-badge>\n                </a>\n            </p> -->\n            <ion-list>\n\n\n                <ion-item>\n                    <ion-label>อุณหภูมิ :\n                        <ion-badge color=\"warning\">{{this.tempc}}°C</ion-badge>\n                    </ion-label>\n                    <ion-label>อุณหภูมิ :\n                        <ion-badge color=\"danger\">{{this.tempf}}°F</ion-badge>\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label>ความชื้นในอากาศ :\n                        <ion-badge color=\"success\">{{this.hump}}</ion-badge>\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label>วัดฝุ่น P.M.</ion-label>\n                </ion-item>\n                <ion-item>\n\n                    <ion-label>P.M. 2.5 :\n                        <ion-badge color=\"light\">{{this.pm25}}</ion-badge>\n                    </ion-label>\n                    <ion-label>P.M. 5 :\n                        <ion-badge color=\"medium\">{{this.pm5}}</ion-badge>\n                    </ion-label>\n                    <ion-label>P.M. 10 :\n                        <ion-badge color=\"dark\">{{this.pm10}}</ion-badge>\n                    </ion-label>\n\n                </ion-item>\n                <!--   <ion-item>\n                    <ion-label>PM 2.5 :\n                           <ion-badge color=\"light\">55</ion-badge>\n                    </ion-label>\n                    <ion-label>PM 10 :\n                        <ion-badge color=\"medium\">88</ion-badge>\n                    </ion-label>\n                </ion-item> -->\n\n\n            </ion-list>\n\n\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map