import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { WindowService } from './shared/window.service';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Title,
    WindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
