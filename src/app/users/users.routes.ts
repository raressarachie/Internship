import { UsersComponent } from './users.component'
import { ViewUserComponent } from './view-user/view-user.component'
import { CreateUserComponent } from './create-user/create-user.component'
import { UserRouteActivator } from './view-user/user-route-activator.service';

export const userRoutes = [

  { path: 'edit/:id', component: CreateUserComponent},
  { path: 'view/:id', component: ViewUserComponent, canActivate: [UserRouteActivator] },
  { path: 'new', component: CreateUserComponent },
  { path: '', component: UsersComponent },
]
