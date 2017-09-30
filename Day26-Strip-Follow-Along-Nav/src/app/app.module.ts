import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FollowAlongNavComponent } from './follow-along-nav/follow-along-nav.component';
import { DropdownContentComponent } from './dropdown-content/dropdown-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowAlongNavComponent,
    DropdownContentComponent
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
