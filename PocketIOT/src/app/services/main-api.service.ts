import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MainApiService {
  dbUsers = firebase.firestore().collection('users');
  dbGateways = firebase.firestore().collection('gateways');
  dbDevice = firebase.firestore().collection('device');
  dbTimeline = firebase.firestore().collection('timeline');
  dbRealtime = firebase.database();
  relay1=  firebase.database().ref('Relay/sw1'); 
  relay2=  firebase.database().ref('Relay/sw2'); 
  status = firebase.database().ref('Relay/Status')
  public firebase;
  public authState: any;
  public user: any;
  constructor(private router: Router, ) {
    firebase.auth().onAuthStateChanged(auth => {
      this.authState = auth;
      // console.log(this.authState);
      if (this.authState) {
        this.authState = auth;
        this.dbUsers.doc(this.authState.uid).get().then(res => {
          if (res.exists) {
            this.user = res.data();
            console.log(this.user);
            this.router.navigate(['/tabs/tab2']);
          }
        }).catch(err => {
          console.log(err);

        });
      } else {
        this.router.navigate(['login']);
      }
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  loginByEmail(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
      // alert('ok')
    }).catch(err => {
      console.log(err);
      alert(err);
    });
  }

  logout() {
    firebase.auth().signOut().then(res => {
      this.authState = null;
      this.user = null;
    }).catch(err => {
      console.log(err);
      alert(err);
    });
  }


  signupByEmail(form) {
    firebase.auth().createUserWithEmailAndPassword(form.email, form.password).then(res => {
      // console.log(res);
      delete form.password;
      delete form.cpassword;
      form.id = res.user.uid;
      // console.log(res.user.uid);
      this.dbUsers.doc(res.user.uid).set(form).then(resAdd => {
        // สำเร็จ


      }).catch(err => {
        console.log(err);

      });
    }).catch(err => {
      console.log(err);

    });
  }

}
