import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
num1:string
num2:string
result:number
defaultValue=0

  constructor() { }

  ngOnInit() {
   
  }
public add(){
 this.result= parseInt(this.num1)+parseInt(  this.num2)

}
public minus(){
  this.result= parseInt(this.num1)-parseInt(this.num2)
  
 }
}
