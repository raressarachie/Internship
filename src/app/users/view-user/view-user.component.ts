import {Component,OnInit} from '@angular/core'
import { UserService } from '../user.service';
import { Router } from "@angular/router";
import { User } from "../user.model";
import {ActivatedRoute} from '@angular/router'

@Component({
selector: 'view-user',
templateUrl: "./view-user.component.html",
styles:[
`
.container
{ padding-left:20px; padding-right: 20px;}
`
]

})
export class ViewUserComponent implements OnInit{
   users:any[]
    user: User;
    
    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router){}

    ngOnInit(){
        
      this.user = this.userService.getUser(
           +this.route.snapshot.params['id'])
        console.log(this.user)
    }
    back() {
        this.router.navigate(['/users'])
      }
}