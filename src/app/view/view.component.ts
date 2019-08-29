import { Component, OnInit } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { ProductsService } from '../products.service';
import {Route, Router}from '@angular/router'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
m
n
view:boolean=false
  constructor(private sc:ProductsService,private ob:Router) { }

  ngOnInit() {
  }
public viewdata(){
  this.view=true;
this.sc.getdata().subscribe(data=>{this.m=data})
//console.log(this.m.itemname)

}
public gotoedit(i:string){
  console.log(i)
this.sc.getdatadb(i).subscribe(data=>this.n=data)
}
public Addtocart(iname){
  
}
}
