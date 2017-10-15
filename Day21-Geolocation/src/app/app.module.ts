import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpeedometercdComponent } from './speedometercd/speedometercd.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeedometercdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
