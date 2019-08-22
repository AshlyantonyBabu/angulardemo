import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
  
})
export class RamComponent implements OnInit {
 view :boolean=false
 nameee:String
  constructor() { }
public sh(){
  this.view=true
}
  ngOnInit() {
  }

}
