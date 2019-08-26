import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }
  // public add(){
  //   return 10+20;
  // }
  public add(x:number,y:number){
    return x+y
  }
  public differnce(x:number,y:number){
    return x-y
  }
  public msg(x){

    return {s:"Welcome  "+x.name};
  }
}
