import { Component, OnDestroy, OnInit } from '@angular/core'; 
import { AlertController } from '@ionic/angular';
import { MainApiService } from '../services/main-api.service';
import firebase from 'firebase/app';
import 'firebase/firestore'; //นำเข้าข้อมูล firestoreมาจาก firebase
@Component({
  selector: 'app-deviceslist',
  templateUrl: './deviceslist.page.html',
  styleUrls: ['./deviceslist.page.scss'],
})
export class DeviceslistPage implements OnInit, OnDestroy  { 
  fetching: { [key: string]: any } = {};
  devices: any;
  constructor(
    private alertCtrl: AlertController, private mainApiService: MainApiService
  ) { }

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
  async showAlert() { //แสดง pop up  Alert 
    await this.alertCtrl.create({
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
            } else {
              alert('ว่างเปล่า');
            }
          }
        },
        {
          text: 'Cancel'
        }
      ]
    }).then(res => res.present());
  }

  async deleteDevice(deviceId) {
    await this.alertCtrl.create({
      header: 'Device Devices',
      subHeader: 'Devices ',
      buttons: [
        {
          text: 'Okay', handler: (res) => {
            this.mainApiService.dbGateways.doc(deviceId).update({
              isDelete: true,
              isActive: false,
              updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
          }
        },
        {
          text: 'Cancel'
        }
      ]
    }).then(res => res.present());
  }

  updateDevice(device) {
    const dataUpdate = {
      name: device.name,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      updateTest: 'อัพเดตนะจะ'
    };

    this.mainApiService.dbGateways.doc(device.id).update(dataUpdate).then(res => {
      alert('update success');
      
    }).catch(err => {
      console.log(err);

    });
  }

  addDevice(deviceName) { //คำสั่ง เพิ่ม device
    const dataAdd = { //เพิ่มข้อมูล
      name: deviceName, //เพิ่ม devicename ที่มาจาก pop up showalert 
      createdAt: firebase.firestore.FieldValue.serverTimestamp(), //เพิ่มเวลาตอนที่สร้าง จาก firebase
      isActive: true, //เพิ่มค่าสถานะ isActive ให้เป็น True = แสดง
      isDelete: false, //เพิ่มค่าสถานะ isDelete เพื่อให้รู้ข้อมูลถูกลบจาก add แต่ยังคงอยู๋ใน firestore 
    };
    this.mainApiService.dbGateways.add(dataAdd).then(resAdd => { //ติดต่อ firebase ด้วย mainapiservice แล้วไปที่ dbgateway แล้ว add ข้อมูลจาก dataadd ข้างบน ลงไปอยู่ firestore
      this.mainApiService.dbGateways.doc(resAdd.id).update({ //และเพิ่ม id ลงไป firestore ด้วย
        id: resAdd.id
      }).then(resUpdateId => { //มีการ updateid ให้ขึ้น alert และแสดงใน console ว่า success
        alert('success');
        console.log('success');
        //แสดง log  succes ในหน้า console
      }).catch(err => {
        console.log(err);
        //แสดง log  eror ในหน้า console
      });
    }).catch(err => {
      console.log(err)
      //แสดง log eror ในหน้า console
    });
  }
  //คำสั่่ง ล้างแคชเมื่อออกจากการปิดหน้า
  ngOnDestroy(): void { //void ไม่คืนค่า medtord
    for (const key in this.fetching) {   //วนด้วยคำสั่ง for if
      if (this.fetching.hasOwnProperty && this.fetching[key]) {
        if (key.indexOf('unsubscribe') > -1) { //ถ้า index เป็น unsub มากกว่า -1 ให้ทำคำสั่งให้ทำ unsubscribe
          this.fetching[key].unsubscribe();
        } else {  //ถ้าไม่ มากกว่า -1 ไม่ทำคำสั่ง และวนๆไปเรื่อยๆ จน เป็น -1 
          this.fetching[key]();
        }
      }
    }
  }

  async devicedetail(id){
     
  }

  nextpage() {
  }

}
