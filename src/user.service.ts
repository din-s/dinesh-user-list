import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './common/user';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {}

  public getUserList(): Observable<User[]> {
    const result: User[] = []
    const endPoint:string = "https://dummyjson.com/users";
    return this.httpClient.get<User[]>(endPoint);
  }
}