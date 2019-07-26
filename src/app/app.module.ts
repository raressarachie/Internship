import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav.component';
import {Error404Component} from './errors/404.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component
  ],
  imports:  [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
