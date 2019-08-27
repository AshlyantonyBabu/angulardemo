import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { getLocaleDateFormat } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private ob:HttpClient) { }
  public getdata(){
    var url="http://localhost:8000/view"
    return this.ob.get(url)
  }
  public Addtoserver(name :string,price:number,qty:number){
    var url="http://localhost:8000/add"
   var data={itemname:name,itemprice:price,itemqty:qty}
    return this.ob.post(url,data)
  }
  public getdatadb(i){
    var url="http://localhost:8000/edit"
    return this.ob.post(url,{itemname:i})
  }
}
