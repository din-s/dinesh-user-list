import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

// import { UserModule } from './user/user.module';
// import { UserComponent} from "./components/user/user.component"
import { UserModule } from './user/user.module';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UserModule, HttpClientModule],
  template: `
    <app-user-listing></app-user-listing>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
