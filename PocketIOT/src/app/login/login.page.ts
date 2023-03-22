import { Component, OnInit } from '@angular/core';
import { MainApiService } from '../services/main-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  isShowForgot = false;
  gateways: any[];
  constructor(private mainApiService: MainApiService) {
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

}
