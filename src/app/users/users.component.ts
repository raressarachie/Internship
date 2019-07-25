import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements OnInit {

    users = [];

    title = 'User list';


    columns = ['firstName', 'lastName', 'userName', 'eMail' ,'Actions'];

    headers = ['First Name', 'Last Name', 'User Name', 'e-Mail', 'Actions'];


    searchTerm = '';

    displayedUsers = [];

    p: number = 1;



  constructor(private userService: UserService, private router: Router) { }

  getUsers(): void {
   this.userService.getUsers()
    .subscribe(users =>
        this.users = users
      );

   for (let i = 0; i < 25 ; i++) {
    var j = 0;
    while(j < 4){
      this.users.push(this.users[j]);
      j++;
    }
   }

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
  toView(id: number){
    this.router.navigate(['users/view/' + id])
  }
  getUser(id:number){

  }

}
