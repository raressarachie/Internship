import { Component } from '@angular/core';
import { UserService } from '../users/user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #52BCE2;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color:  #92a8e1;
  }`]
})
export class NavBarComponent {

  constructor(private userService: UserService){}

}
