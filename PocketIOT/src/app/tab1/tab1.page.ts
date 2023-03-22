import { Component } from '@angular/core';
import { MainApiService } from '../services/main-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // user;
  constructor(public mainApiService: MainApiService) {
    // this.user = this.mainApiService.user;
  }

  logout() {
    this.mainApiService.logout();
  }

}
