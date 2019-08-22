import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viecmpnt',
  templateUrl: './viecmpnt.component.html',
  styleUrls: ['./viecmpnt.component.css']
})
export class ViecmpntComponent implements OnInit {
name:String
Age:Number
hobbies:String[]
  constructor() {
  this.name="Arohi"
  this.Age=24
  this.hobbies=["reading","thinking"]
   }

  ngOnInit() {
  }

}
