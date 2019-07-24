import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';


const routes: Routes = [
  { path: 'users/new', component: CreateUserComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/edit/:id', component: CreateUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
