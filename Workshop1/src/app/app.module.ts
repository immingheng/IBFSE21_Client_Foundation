import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TotoroImgComponent } from './totoro-img/totoro-img.component';

@NgModule({
  declarations: [
    AppComponent,
    TotoroImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
