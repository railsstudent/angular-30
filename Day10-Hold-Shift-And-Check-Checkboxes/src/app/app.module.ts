import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { ItemComponent } from './item/item.component';
import { ItemService } from './item/item.service';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Title,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
