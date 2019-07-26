import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import {ViewUserComponent} from './users/view-user/view-user.component'
import {Error404Component} from './errors/404.component'
import{UserRouteActivator} from './users/view-user/user-route-activator.service'

 export const routes: Routes = [
  { path: 'users/edit/:id', component: CreateUserComponent},
  { path: 'users/view/:id', component: ViewUserComponent,
  canActivate: [UserRouteActivator] },
  { path: 'users/new', component: CreateUserComponent },
  { path: 'users', component: UsersComponent },
  { path: '404',component:Error404Component },
  
  {path: '', redirectTo: '/users',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
