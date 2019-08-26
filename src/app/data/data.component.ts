import { Component, OnInit } from '@angular/core';
import {CalcService} from '../calc.service'
import{ MsgService }from '../msg.service'
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
val;
num1:string
num2:string
n1:number
n2
view:boolean=false
name1
m
  constructor(private ds :CalcService,private ms:MsgService) { }

  ngOnInit() {
  //this. m=
   this.name1= this.ds.msg({name:'Arun'})
   // this.val=this.ds.add();
  }
  public sum()
  {
   this.n1=parseInt(this.num1);
   this.n2=parseInt(this.num2);
   this.val=this.ds.add(this.n1,this.n2)   
    this.view=true
  }
  public dif()
  {
   this.n1=parseInt(this.num1);
   this.n2=parseInt(this.num2);
   this.val=this.ds.differnce(this.n1,this.n2)   
this.view=true
  }
  show(){
    this.view=true
this.ms.getData().subscribe(data=>{this.m=data;
  console.log(this.m.msg)
  this.view=true
})
  }
  
}
