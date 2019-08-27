import { Component, OnInit } from '@angular/core';
import { ProductsService }from '../products.service'
import { NgModel } from '@angular/forms';
import{Router}from '@angular/router'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

m
nam:string
price:string
qty:string
p :number
q:number

  constructor(private ob1:ProductsService,private ob2:Router) { }

  ngOnInit() {
  }
public Adddata(){
this.p=parseInt(this.price)
this.q=parseInt(this.qty)

this.ob1.Addtoserver(this.nam,this.p,this.q).subscribe(datas=>this.m=datas)
this.ob2.navigateByUrl("/view")
//console.log("data added")



}
}
