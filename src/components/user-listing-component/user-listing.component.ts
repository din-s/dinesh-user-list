import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../common/user';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css'],
  providers: [UserService]
})
export class UserListingComponent implements OnInit {

  public users: User[] = [
    {
      "id":1,
      "firstName":"Terry",
      "lastName":"Medhurst",
      "age":50,
      "gender":"male",
      "email":"atuny0@sohu.com",
      "username":"atuny0",
      "image":"https://robohash.org/hicveldicta.png"
    },
    {
      "id":2,
      "firstName":"Tom",
      "lastName":"Medhurst",
      "age":20,
      "gender":"male",
      "email":"tom@sohu.com",
      "username":"atuny0",
      "image":"https://robohash.org/hicveldicta.png"
    },
    {
      "id":3,
      "firstName":"Jerry",
      "lastName":"Medhurst",
      "age":23,
      "gender":"male",
      "email":"jerry@sohu.com",
      "username":"atuny0",
      "image":"https://robohash.org/hicveldicta.png"
    }
  ]

  constructor(private useService: UserService) { }

  ngOnInit() {
    // request to API
    this.useService.getUserList().subscribe((result: any) =>
    {console.log("result", result);
     this.users = result.users;
    
    });
  }

}