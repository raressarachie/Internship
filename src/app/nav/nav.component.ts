import { Component, Inject } from '@angular/core';
import { UserService } from '../users/user.service';
import { FormsModule } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #52BCE2;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color:  #92a8e1;
  }`]
})
export class NavBarComponent {

  constructor(
    private userService: UserService,
    // @Inject(DOCUMENT) private document
    ) {}

  // onStyleChange(event: any) {
  //   let themes = {
  //     "default": "node_modules/bootstrap/dist/css/bootstrap.min.css",
  //     "amelia": "node_modules/bootstrap/dist/css/amelia.min.css"
  //   }
  //   // jQuery(function(){
  //   //   var themesheet = jQuery('<link href="'+ themes['amelia']+'" rel="stylesheet" />');
  //   //   console.log(themesheet);
  //   //    themesheet.appendTo('head');
  //   //    jQuery('.theme-link').click(function(){
  //   //       // var themeurl = themes[$(this).attr('data-theme')];
  //   //       let themeurl = (event == "default") ? themes['default'] : themes['amelia']
  //   //        themesheet.attr('href',themeurl);
  //   //       console.log("AA");
  //   //    });
  //   // var themesheet = jQuery('<link href="'+ themes['default']+'" rel="stylesheet" type="text/css" />');
  //   // themesheet.appendTo('head');
  //   // let themeurl = (event == "default") ? themes['default'] : themes['amelia']
  //   //        themesheet.attr('href',themeurl);
  //   let style = document.createElement('style');
  //   style.type = 'text/css';
  //   style.sheet = "node_modules/bootstrap/dist/css/bootstrap.min.css";
  //   style.
  //   let head = this.document.getElementsByTagName('head')[0];
  //   head.appendChild(style)

  //   this.document.getElementById('theme').setAttribute('href', 'node_modules/bootstrap/dist/css/bootstrap.min.css');
  // }
}
