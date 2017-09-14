import { BrowserModule, Title } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KonamiComponent } from './konami/konami.component';

@NgModule({
  declarations: [
    AppComponent,
    KonamiComponent
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
