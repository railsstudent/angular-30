import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VideoCamComponent } from './video-cam/video-cam.component';
import { ColorRangeComponent } from './color-range/color-range.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoCamComponent,
    ColorRangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
