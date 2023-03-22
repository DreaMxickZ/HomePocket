import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceslistPage } from './deviceslist.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceslistPageRoutingModule {}
