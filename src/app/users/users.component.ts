import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users = [];

    title = 'User list';

    columns = ['id', 'firstName', 'lastName', 'userName', 'eMail', 'actions'];

  constructor(private userService: UserService, private router: Router) { }

  getUsers(): void {
   this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
  }

  toUser() {
    this.router.navigate(['users/new']);
  }

  editUser(){
    this.router.navigate(['users/new']);
  }

}
