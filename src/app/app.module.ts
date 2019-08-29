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
import {RouterModule,Routes} from '@angular/router'
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DataComponent } from './data/data.component';
import {CalcService} from './calc.service';
import {HttpClientModule} from '@angular/common/http';
import { MsgService } from './msg.service'
import {HttpClient}from '@angular/common/http'
import{ProductsService}from './products.service'
import{StorageServiceModule}from 'angular-webstorage-service'
import{FileUploadModule}from 'ng2-file-upload';
import { HomeComponent } from './home/home.component'
const approutes:Routes=[{path:"",component:LoginComponent},{path:"home",component:HomeComponent,
children:[{path:"new",component:AddComponent},
{path:"edit",component:EditComponent},
{path:"del",component:DeleteComponent},
{path:"view",component:ViewComponent},
{path:"about/:name/:cname",component:AboutComponent},
{path:"contact",component:ContactComponent},
{path:"service",component:DataComponent}]}] 
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
    HeaderComponent,
    ProductComponent,
    EditComponent,
    ViewComponent,
    AddComponent,
    DeleteComponent,
    AboutComponent,
    ContactComponent,
    DataComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(approutes),HttpClientModule,FileUploadModule,StorageServiceModule
  ],
  providers: [CalcService,MsgService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
