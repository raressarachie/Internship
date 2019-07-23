import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users = [];

    title = 'User list';

    columns = ['id', 'firstName', 'lastName', 'userName', 'eMail'];

    searchTerm = '';

    displayedUsers = [];


  constructor(private userService: UserService, private router: Router) { }

  getUsers(): void {
   this.userService.getUsers()
    .subscribe(users =>
      this.users = users
      );
   this.displayedUsers = this.users;
  }

  setSearchTerm(searchTerm) {
    this.displayedUsers = this.users;
    this.displayedUsers = this.displayedUsers.
    filter( user => user.userName.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()));
  }

  ngOnInit() {
    this.getUsers();
  }

  onWhiteSpaceEmit(value) {
    if (value === '') {
      this.setSearchTerm(value);
    }
  }


  toUser() {
    this.router.navigate(['users/new']);
  }

}
