(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deviceslist-deviceslist-module"],{

/***/ "7q24":
/*!***********************************************************!*\
  !*** ./src/app/deviceslist/deviceslist-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DeviceslistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceslistPageRoutingModule", function() { return DeviceslistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _deviceslist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deviceslist.page */ "w3I5");




const routes = [
    {
        path: '',
        component: _deviceslist_page__WEBPACK_IMPORTED_MODULE_3__["DeviceslistPage"]
    }
];
let DeviceslistPageRoutingModule = class DeviceslistPageRoutingModule {
};
DeviceslistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeviceslistPageRoutingModule);



/***/ }),

/***/ "PSXl":
/*!***************************************************!*\
  !*** ./src/app/deviceslist/deviceslist.module.ts ***!
  \***************************************************/
/*! exports provided: DeviceslistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceslistPageModule", function() { return DeviceslistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _deviceslist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deviceslist-routing.module */ "7q24");
/* harmony import */ var _deviceslist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deviceslist.page */ "w3I5");







let DeviceslistPageModule = class DeviceslistPageModule {
};
DeviceslistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _deviceslist_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeviceslistPageRoutingModule"]
        ],
        declarations: [_deviceslist_page__WEBPACK_IMPORTED_MODULE_6__["DeviceslistPage"]]
    })
], DeviceslistPageModule);



/***/ }),

/***/ "WYFQ":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deviceslist/deviceslist.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title> Devices List </ion-title>\n    <ion-button size=\"small\" slot=\"end\" color=\"primary\" (click)=\"showAlert()\" >Add</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n <!--   <ion-item *ngFor=\"let device of devices\">\n    <ion-icon name=\"water\" slot=\"start\"></ion-icon>\n    <ion-label> {{device.name}} </ion-label>\n    <ion-icon name=\"arrow-forward-circle\" (click)=\"deleteDevice(device.id)\"></ion-icon>\n  </ion-item> -->\n</ion-list>\n\n\n<ion-item-sliding *ngFor=\"let device of devices\">\n  <ion-item-options side=\"start\">\n    <ion-item-option color=\"danger\" (click)=\"deleteDevice(device.id)\">\n      <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon></ion-item-option>\n  </ion-item-options>\n\n  <ion-item>\n    <ion-icon name=\"logo-apple-ar\" slot=\"start\"></ion-icon>\n    <ion-label>{{device.name}}</ion-label>\n    <ion-icon name=\"arrow-forward-circle\" ></ion-icon>\n    \n  </ion-item>\n\n</ion-item-sliding> \n\n</ion-content>\n");

/***/ }),

/***/ "gLSL":
/*!***************************************************!*\
  !*** ./src/app/deviceslist/deviceslist.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2VzbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "w3I5":
/*!*************************************************!*\
  !*** ./src/app/deviceslist/deviceslist.page.ts ***!
  \*************************************************/
/*! exports provided: DeviceslistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceslistPage", function() { return DeviceslistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_deviceslist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./deviceslist.page.html */ "WYFQ");
/* harmony import */ var _deviceslist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deviceslist.page.scss */ "gLSL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_main_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/main-api.service */ "Zfby");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ "5x/H");







 //นำเข้าข้อมูล firestoreมาจาก firebase
let DeviceslistPage = class DeviceslistPage {
    constructor(alertCtrl, mainApiService) {
        this.alertCtrl = alertCtrl;
        this.mainApiService = mainApiService;
        this.fetching = {};
    }
    ngOnInit() {
        this.getDevices();
    }
    getDevices() {
        this.fetching.onSnapshotDevices = this.mainApiService.dbGateways.where('isDelete', '==', false).onSnapshot(res => {
            const devices = [];
            res.forEach(doc => {
                if (doc.exists) {
                    devices.push(doc.data());
                }
            });
            this.devices = devices;
            console.log('devices => ', this.devices);
        });
    }
    showAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.alertCtrl.create({
                header: 'Add Devices',
                subHeader: 'Devices ',
                inputs: [
                    { type: 'text', name: 'device', placeholder: 'Devices Name' }
                ],
                buttons: [
                    {
                        text: 'Add', handler: (res) => {
                            console.log(res.device);
                            if (res.device) {
                                this.addDevice(res.device);
                            }
                            else {
                                alert('ว่างเปล่า');
                            }
                        }
                    },
                    {
                        text: 'Cancel'
                    }
                ]
            }).then(res => res.present());
        });
    }
    deleteDevice(deviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.alertCtrl.create({
                header: 'Device Devices',
                subHeader: 'Devices ',
                buttons: [
                    {
                        text: 'Okay', handler: (res) => {
                            this.mainApiService.dbGateways.doc(deviceId).update({
                                isDelete: true,
                                isActive: false,
                                updatedAt: firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].firestore.FieldValue.serverTimestamp(),
                            });
                        }
                    },
                    {
                        text: 'Cancel'
                    }
                ]
            }).then(res => res.present());
        });
    }
    updateDevice(device) {
        const dataUpdate = {
            name: device.name,
            updatedAt: firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].firestore.FieldValue.serverTimestamp(),
            updateTest: 'อัพเดตนะจะ'
        };
        this.mainApiService.dbGateways.doc(device.id).update(dataUpdate).then(res => {
            alert('update success');
        }).catch(err => {
            console.log(err);
        });
    }
    addDevice(deviceName) {
        const dataAdd = {
            name: deviceName,
            createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].firestore.FieldValue.serverTimestamp(),
            isActive: true,
            isDelete: false,
        };
        this.mainApiService.dbGateways.add(dataAdd).then(resAdd => {
            this.mainApiService.dbGateways.doc(resAdd.id).update({
                id: resAdd.id
            }).then(resUpdateId => {
                alert('success');
                console.log('success');
                //แสดง log  succes ในหน้า console
            }).catch(err => {
                console.log(err);
                //แสดง log  eror ในหน้า console
            });
        }).catch(err => {
            console.log(err);
            //แสดง log eror ในหน้า console
        });
    }
    //คำสั่่ง ล้างแคชเมื่อออกจากการปิดหน้า
    ngOnDestroy() {
        for (const key in this.fetching) { //วนด้วยคำสั่ง for if
            if (this.fetching.hasOwnProperty && this.fetching[key]) {
                if (key.indexOf('unsubscribe') > -1) { //ถ้า index เป็น unsub มากกว่า -1 ให้ทำคำสั่งให้ทำ unsubscribe
                    this.fetching[key].unsubscribe();
                }
                else { //ถ้าไม่ มากกว่า -1 ไม่ทำคำสั่ง และวนๆไปเรื่อยๆ จน เป็น -1 
                    this.fetching[key]();
                }
            }
        }
    }
    devicedetail(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    nextpage() {
    }
};
DeviceslistPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_main_api_service__WEBPACK_IMPORTED_MODULE_5__["MainApiService"] }
];
DeviceslistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-deviceslist',
        template: _raw_loader_deviceslist_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_deviceslist_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeviceslistPage);



/***/ })

}]);
//# sourceMappingURL=deviceslist-deviceslist-module.js.map