import{ActivatedRouteSnapshot,CanActivate} from '@angular/router'
import{Injectable} from '@angular/core'
import { UserService } from '../user.service';
import { Router } from "@angular/router";

@Injectable()

export class UserRouteActivator implements CanActivate {
    constructor(private userService:UserService,
      private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot){
      const userExists = !!this.userService.getUser(+route.params['id'])

      if(!userExists)
        this.router.navigate(['/404'])
    
      return userExists
    }

}
