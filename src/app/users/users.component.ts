import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from './model/user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements OnInit {


  constructor(private userService: UserService, private router: Router) { }

    users = [];

    title = 'User list';


    columns = ['firstName', 'lastName', 'userName', 'eMail', 'Actions'];

    headers = ['First Name', 'Last Name', 'User Name', 'e-Mail', 'Actions'];


    searchTerm = '';

    displayedUsers = [];

    p = 1;

    sortBy = 'firstName';
    clickButton1 = 0;
    clickButton2 = 0;

  getUsers(): void {
   this.userService.getUsers()
    .subscribe(users =>
        this.users = users
      );

   for (let i = 0; i < 25 ; i++) {
    let j = 0;
    while (j < 4) {
      this.users.push(this.users[j]);
      j++;
    }
   }

   this.displayedUsers = JSON.parse(JSON.stringify(this.users));
  }

  setSearchTerm(searchTerm) {
    this.displayedUsers = JSON.parse(JSON.stringify(this.users));
    this.displayedUsers = this.displayedUsers.
    filter( user => user.userName.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()));
  }

  ngOnInit() {
    this.getUsers();
  }


  sort() {
    if (this.users) {
      if (this.sortBy === 'firstName') {
        this.clickButton1 += 1;
        if (this.clickButton1 % 2 === 1) {
          this.displayedUsers.sort(sortByFirstNameAsc);
        } else {
          this.displayedUsers = JSON.parse(JSON.stringify(this.users));
        }

    } else {
      this.clickButton2 += 1;
      if (this.clickButton2 % 2 === 1) {
        (this.displayedUsers.sort(sortByLastNameAsc));
      } else {
        this.displayedUsers = JSON.parse(JSON.stringify(this.users));
      }
     }
    }
  }
  onWhiteSpaceEmit(value) {
    if (value === '') {
      this.setSearchTerm(value);
    }
  }


  toUser() {
    this.router.navigate(['users/new']);
  }
  toView(id: number){
    this.router.navigate(['users/view/' + id])
  }
  getUser(id:number){

  }

}

function sortByFirstNameAsc(user1: User, user2: User) {


    if ( user1.firstName > user2.firstName ) {
      return 1;
    } else if ( user1.firstName === user2.firstName ) {
      return 0;
    } else { return -1; }
}


function sortByLastNameAsc(user1: User, user2: User) {
  if ( user1.lastName > user2.lastName ) {
    return 1;
  } else if ( user1.lastName === user2.lastName ) {
    return 0;
 } else { return -1; }
}




