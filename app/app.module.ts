import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AppComponent }         from './app.component';
import {HelltriangleComponent} from './helltriangle/helltriangle.component';
import {ResizeimageComponent} from './resizeimage/resizeimage.component';
import {ImageService} from './resizeimage/image.service';
import { routing } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HelltriangleComponent,
    ResizeimageComponent
  ],
  providers: [
    ImageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
