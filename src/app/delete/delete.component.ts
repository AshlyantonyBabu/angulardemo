import { Component, OnInit } from '@angular/core';
// import{LOCAL_STORAGE,WebStorageService}from 'angular-webstorage-service'
// import{Inject,Injectable}from '@angular/core'
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
val
val1
val2
user
cart=[]
  constructor() { }//@Inject(LOCAL_STORAGE) private ob:WebStorageService

  ngOnInit() {
    this.user=localStorage.getItem("username")
    // this.user=this.ob.get("username")
    var sessiondtd=JSON.parse(localStorage.getItem("cart"))
     if(sessiondtd!=null)
     this.cart=sessiondtd
  }
  public Add(){
    localStorage.setItem("username",this.val)
    // this.ob.set("username",this.val)
  }
  public Addcart(){
var item={name:this.val,price:this.val1,qty:this.val2}
this.cart.push(item)
localStorage.setItem("cart",JSON.stringify(this.cart))
  }
 

}
