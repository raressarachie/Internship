import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../user.model";
import { UserService } from "../user.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.css"]
})
export class CreateUserComponent implements OnInit {
  id: number = +this.route.snapshot.params['id'];
  firstName: FormControl;
  lastName: FormControl;
  userName: FormControl;
  eMail: FormControl;
  newUserForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.firstName = new FormControl("", Validators.required);

    this.lastName = new FormControl("", Validators.required);
    this.userName = new FormControl("", Validators.required);

    this.eMail = new FormControl("", [Validators.required,
    Validators.pattern('([a-zA-Z0-9._%+-])+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')
    ]);

    this.newUserForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      eMail: this.eMail
    });
    if(this.route.snapshot.params['id']) {
      let id = +this.route.snapshot.params['id'];
      let user = this.userService.getUserById(+this.route.snapshot.params['id']);
      
      this.firstName.setValue(user.firstName);
      this.lastName.setValue(user.lastName);
      this.userName.setValue(user.userName);
      this.eMail.setValue(user.eMail);

    }
    
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateEmail() {
    return this.eMail.valid || this.eMail.untouched;
  }

  saveUser(formValues) {
    const user: User = (this.id) ? {
      id: this.id,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      userName: formValues.userName,
      eMail: formValues.eMail

    } :
    {
      id: undefined,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      userName: formValues.userName,
      eMail: formValues.eMail

    };
    if (this.newUserForm.valid) {
      this.userService.saveUser(user);
      this.router.navigate(["/users"]);
    }
  }

  cancel() {
    this.router.navigate(["/users"]);
  }

  
}
