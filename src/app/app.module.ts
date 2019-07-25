import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NavBarComponent } from './nav/nav.component';
import { CreateUserComponent } from './users/create-user/create-user.component'
import { ReactiveFormsModule } from '@angular/forms';
import {ViewUserComponent} from './users/view-user/view-user.component'
import {UserService} from './users/user.service';
import {Error404Component} from './errors/404.component'
import{UserRouteActivator} from './users/view-user/user-route-activator.service'
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavBarComponent,
    CreateUserComponent,
    ViewUserComponent,
    Error404Component
  ],
  imports:  [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [UserService,UserRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
