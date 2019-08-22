import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    product =[]
    i :Number
    cartadd =[]
    v =[]
    view:boolean=false
  constructor() {
this.product=[{name:"printer",price:23000,company:"HP"},{name:"Scanner",price:13000,company:"HP"},{name:"Keybord",price:200,company:"HP"}]

   }
   public Cart(i)
   {
      this.v=this.product[i]
    
     this.cartadd.push(this.v)
    
   }
   public delete(i){
    this.cartadd.splice(i,1)
     
   }
   public viewt(){
     this.view=true
   }
   public hide(){
    this.view=false
  }
  ngOnInit() {
  }

}
