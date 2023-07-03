import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserListingComponent } from "../components/user-listing-component/user-listing.component";
import { UserComponent } from "../components/user/user.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserListingComponent,
    UserComponent
  ],
  exports: [
    UserListingComponent,
    UserComponent
  ]
})
export class UserModule { }