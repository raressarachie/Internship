import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
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
  eMail: FormControl;
  newUserForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.firstName = new FormControl('', Validators.required);

    this.lastName = new FormControl('', Validators.required);
    this.userName = new FormControl('', Validators.required);

    this.eMail = new FormControl('', [Validators.required,
    Validators.pattern('([a-zA-Z0-9._%+-])+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')
    ]);

    this.newUserForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      eMail: this.eMail
    });  
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateUserName() {
    return this.userName.valid || this.userName.untouched;
  }

  validateEmail() {
    return this.eMail.valid || this.eMail.untouched;
  }

    /**
     * Mark reactive form controls as touched.
     * @param formGroup FormGroup for which the controls are marked as touched.
     */
    markFormGroupControlsAsTouched(formGroup: FormGroup) {
      Object.keys(formGroup.controls).map(function(key) {
          formGroup.controls[key].markAsTouched();
      });
  }

  saveUser(formValues) {
    const user: User = {
      id: undefined,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      userName: formValues.userName,
      eMail: formValues.eMail,
      Actions: undefined
    };

    this.markFormGroupControlsAsTouched(this.newUserForm);

    if (this.newUserForm.valid) {
      this.userService.saveUser(user);
      this.router.navigate(['/users']);
    }
  }


  back() {
    this.router.navigate([])

  cancel() {
    this.router.navigate(['/users']);

  }
}
