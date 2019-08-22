import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   
   view :boolean=false
  constructor() { }
  public viewa(){
    this.view=!this.view
  }
  ngOnInit() {
  }
   
}
