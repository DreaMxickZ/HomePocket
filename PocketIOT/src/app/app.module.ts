import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import firebase from 'firebase/app'
import { environment } from 'src/environments/environment';
import { MainApiService } from './services/main-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
firebase.initializeApp(environment.firebaseConfig)

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],


  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, MainApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
