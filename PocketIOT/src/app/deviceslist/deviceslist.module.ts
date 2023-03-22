import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceslistPageRoutingModule } from './deviceslist-routing.module';

import { DeviceslistPage } from './deviceslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceslistPageRoutingModule
  ],
  declarations: [DeviceslistPage]
})
export class DeviceslistPageModule {}
