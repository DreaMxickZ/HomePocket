import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainApiService } from '../services/main-api.service';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],

})
export class Tab2Page implements OnInit, OnDestroy {
  fetching: { [key: string]: any } = {};
  swiths: { [key: string]: any } = {};
  gatewayId = "B66jkrVCjCCtADfhmM2C"
  gateway: any
  public sw1: boolean = false;
  public sw2: boolean = false;
  public sw3: boolean = false;
  public sw4: boolean = false;
  public pump: boolean = false;

  public tempc: number;
  public tempf: number;
  public hump: number;
  public pm25: number;
  public pm5: number;
  public pm10: number;
  public lightstatus : string;
 

  public soilmoisturepercent: number;
  public soilmoisturevalue: number;


  constructor(public mainApiService: MainApiService) {
    // const test =  this.mainApiService.dbRealtime.ref('Relay/sw1').get().then(res=>{
    //   console.log(res);

    // })
    // console.log(test);


  }

  ngOnInit(): void {
    // this.getGateway(this.gatewayId)
    this.onDRealtime()
  }

  onDRealtime() {
    if (this.fetching['dbRealtime' + this.gatewayId]) {
      this.fetching['dbRealtime' + this.gatewayId].off();
    }
    this.fetching['dbRealtime' + this.gatewayId] = this.mainApiService.dbRealtime.ref(`gateways/${this.gatewayId}`);
    this.fetching['dbRealtime' + this.gatewayId].on('value', res => {
      console.log('dbRealtime', res.val());
      this.pathValaueDBRealtime(res.val())
    });
  }

  checkValueBoolean(value): boolean {
    if (value === '1' || value === 1 || value === true) {
      return true
    }
    return false
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
      this.lightstatus = value.lightingstatus;





      this.sw1 = this.checkValueBoolean(value.sw1)
      this.sw2 = this.checkValueBoolean(value.sw2)
      this.sw3 = this.checkValueBoolean(value.sw3)
      this.sw4 = value.sw4 === '1' || value.sw4 === 1 || value.sw4 === true ? true : false
      this.pump = this.checkValueBoolean(value.pump)
    }
  }

  onChangeForDBRealtime(key, value) {
    console.log(key, value);
    const dataUpdate: { [key: string]: any } = {};
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
        this.gateway = res.data()
        this.pathValaue()
        // console.log(this.gateway);
      }
    })
  }

  pathValaue() {
    if (this.gateway) {
      this.sw1 = this.gateway.sw1 || false
      this.sw2 = this.gateway.sw2 || false
      this.sw3 = this.gateway.sw3 || false
      this.sw4 = this.gateway.sw4 || false
    }
  }

  onChange(key, value) {
    console.log(key, value);
    const dataUpdate = {}
    dataUpdate[key] = value
    this.mainApiService.dbGateways.doc(this.gatewayId).update(dataUpdate).then(res => {
      console.log('update success');

    }).catch(err => {
      console.log(err);
    })
  }

  sw1c() {
    console.log("Switch 1");

    console.log(this.sw1);
    if (this.sw1 == true) {
      console.log('1เปิดแล้ว')
    }
    else {
      console.log('1ปิดแล้ว')
    }



  }

  sw2c() {
    console.log("Switch 2 ");
    console.log(this.sw2);

    if (this.sw2 == true) {
      console.log('2เปิดแล้ว')
    }
    else {
      console.log('2ปิดแล้ว')
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

  ngOnDestroy(): void {
    for (const key in this.fetching) {
      if (this.fetching.hasOwnProperty(key) && this.fetching[key]) {
        if (key.indexOf('unsubscribe') > -1) {
          this.fetching[key].unsubscribe();
        } else if (key.indexOf('dbRealtime') > -1) {
          this.fetching[key].off();
        } else {
          this.fetching[key]();
        }
      }
    }
  }


}




