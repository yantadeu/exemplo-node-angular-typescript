import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2ImgMaxModule } from 'ng2-img-max'; // <-- import the module

import { AppComponent } from './app.component';
import {HelltriangleComponent} from './helltriangle/helltriangle.component';


@NgModule({
  declarations: [
    AppComponent,
    HelltriangleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2ImgMaxModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
