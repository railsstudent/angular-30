import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SpeechSynthesisComponent } from './speech-synthesis/speech-synthesis.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechSynthesisComponent
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
