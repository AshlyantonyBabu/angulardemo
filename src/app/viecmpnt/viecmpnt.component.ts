import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viecmpnt',
  templateUrl: './viecmpnt.component.html',
  styleUrls: ['./viecmpnt.component.css']
})
export class ViecmpntComponent implements OnInit {
name:String
Age
hobbies:String[]
projectss:any[]=[]
day:Date

  constructor() {
  this.name="Arohi"
  this.Age=24
  this.hobbies=["reading","thinking"]
  this.projectss=[{name:"p1",duration:"30days",enddate:"12/12/2019"},{name:"p2",duration:"20days",enddate:"12/11/2019"}]
   }

  ngOnInit() {
  }
public  Add(){
let data={name:"p13",duration:"50days",enddate:"1/12/2019"};
this.projectss.push(data);

}



}
