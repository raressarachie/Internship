import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Error404Component} from './errors/404.component';

export const routes: Routes = [
  { path: 'users', loadChildren: './users/users.module#UsersModule'  },
  { path: 'invoice', loadChildren: './invoice/invoice.module#InvoiceModule'},
  { path: '404', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
