import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users = [];

    title = 'User list';

    columns = ['id', 'firstName', 'lastName', 'userName', 'eMail'];

    searchTerm: string = '';



  constructor(private userService: UserService, private router: Router) { }

  getUsers(): void {
   this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  setSearchTerm(searchTerm){
    this.searchTerm = searchTerm;
  }

  filterByUserame(username : string){
    return username.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase());
  }

  ngOnInit() {
    this.getUsers();
  }

  toUser() {
    this.router.navigate(['users/new']);
  }

}
