import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   
   view :boolean=false
  constructor(private r: Router) { }
  public viewa(){
    //this.view=!this.view

this.r.navigateByUrl("/home")
  }
  ngOnInit() {
  }
   
}
