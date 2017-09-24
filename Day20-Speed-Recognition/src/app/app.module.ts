import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpeedRecognitionComponent } from './speed-recognition/speed-recognition.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeedRecognitionComponent
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
