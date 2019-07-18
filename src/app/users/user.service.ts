import { Injectable } from '@angular/core';
import { User } from './user.model'
import { USERS } from './mock-users'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  saveUser(user){
    user.id = 999
    USERS.push(user)
  }



}
