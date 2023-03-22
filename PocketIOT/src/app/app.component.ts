import { Component } from '@angular/core';
import { MainApiService } from './services/main-api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private mainApiService: MainApiService) {
    console.log(this.mainApiService.authenticated);

  }
}
