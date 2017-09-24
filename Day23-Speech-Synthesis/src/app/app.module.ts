import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpeechSynthesisComponent } from './speech-synthesis/speech-synthesis.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechSynthesisComponent
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
