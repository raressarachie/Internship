import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { userRoutes } from './users.routes'
import { UsersComponent } from './users.component'
import { ViewUserComponent } from './view-user/view-user.component'
import { CreateUserComponent } from './create-user/create-user.component'
import { UserService } from './user.service';
import { UserRouteActivator } from './view-user/user-route-activator.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    UsersComponent,
    ViewUserComponent,
    CreateUserComponent,
  ],
  providers: [
    UserService,
    UserRouteActivator
  ]
})
export class UsersModule {}
