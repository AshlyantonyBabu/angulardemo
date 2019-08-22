import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { DatacmpntComponent } from './datacmpnt/datacmpnt.component';
import { ViecmpntComponent } from './viecmpnt/viecmpnt.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RamComponent } from './ram/ram.component';
import { CalcComponent } from './calc/calc.component';
import { MarkComponent } from './mark/mark.component';

import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    DatacmpntComponent,
    ViecmpntComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    RamComponent,
    CalcComponent,
    MarkComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
