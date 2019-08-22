import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {
num1:string
result:string
n:number
  constructor() { }

  ngOnInit() {
  }
public add(){
this.n=parseInt(this.num1)
if(this.n>50)
{
  this.result="Passed"
}
else{
  this.result="failed"
}
}



}
