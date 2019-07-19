import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { User } from '../user.model';
import { UserService } from '../user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  firstName: FormControl;
  lastName: FormControl;
  userName: FormControl;
  newUserForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.firstName = new FormControl('')
    this.lastName = new FormControl('')
    this.userName = new FormControl('')

    this.newUserForm= new FormGroup({
      firstName : this.firstName,
      lastName : this.lastName,
      userName : this.userName
    })
  }

  saveUser(formValues){

    let user: User = {
      id: undefined,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      userName: formValues.userName

    }
    this.userService.saveUser(user);
    this.router.navigate(['/users']);
  }

  cancel(){
    this.router.navigate(['/users'])
  }


}
