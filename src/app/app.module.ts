import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatacmpntComponent } from './datacmpnt/datacmpnt.component';
import { ViecmpntComponent } from './viecmpnt/viecmpnt.component';

@NgModule({
  declarations: [
    AppComponent,
    DatacmpntComponent,
    ViecmpntComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
