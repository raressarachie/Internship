import { Injectable } from '@angular/core';
import { User } from './user.model';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getNextId(): number {
    return Math.max.apply(Math, USERS.map(o => o.id)) + 1;
  }

   getUserById(id:number):User{
     for(let i= 0; i< USERS.length; i++){
       if(USERS[i].id===id)
        return USERS[i];
     }
   }

  saveUser(user) {
    for (let i =0; i< USERS.length; i++)
    {
      if(USERS[i].id === user.id)
      {
        USERS[i]=user;
        return  
      }
    }
    user.id = this.getNextId();
    USERS.push(user);
  }
  getUser(id:number){
    return USERS.find(User => User.id === id)
  }
}
