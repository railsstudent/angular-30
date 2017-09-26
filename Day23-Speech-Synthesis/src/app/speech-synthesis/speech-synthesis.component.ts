import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { IWindow } from '../shared/iwindow';

declare var SpeechSynthesisUtterance: any;

@Component({
  selector: 'app-speech-synthesis',
  templateUrl: './speech-synthesis.component.html',
  styleUrls: ['./speech-synthesis.component.css']
})
export class SpeechSynthesisComponent implements OnInit, OnDestroy {

  msg: any = null;
  speechSynthesis: any = null;

  initialValues = {
    text: "Hello! I love JavaScript 👍",
    rate: '1.0',
    pitch: "1.0"
  }

  voiceOptions = [];

  constructor(private zone: NgZone) { }

  ngOnInit() {
      console.log(<IWindow>window);
      const iWindow: IWindow = <IWindow>window;
      this.speechSynthesis = iWindow.speechSynthesis;
      if (SpeechSynthesisUtterance) {
        this.msg = new SpeechSynthesisUtterance();
        console.log(this.initialValues.text);
        this.msg.text = this.initialValues.text;
      }
      if (this.speechSynthesis) {
        this.speechSynthesis.onvoiceschanged = this.populateVoices();
      }

      console.log(  this.speechSynthesis);
      console.log(this.msg);
  }

  ngOnDestroy() {
    if (this.speechSynthesis) {
      this.speechSynthesis.cancel();
    }
  }

  toggle(startOver = true) {
    this.speechSynthesis.cancel();
    if (startOver) {
      this.speechSynthesis.speak(this.msg);
    }
  }

  setOption(name) {
    console.log(this.initialValues);
    this.msg[name] = this.initialValues[name];
    this.toggle();
  }

  populateVoices() {
    console.log('populateVoices fired');
    if (this.speechSynthesis) {
      setTimeout( () => {
        const voices = this.speechSynthesis.getVoices();
        console.log(voices);
        this.voiceOptions = voices
          .filter(voice => voice.lang.includes('en') || voice.lang.includes('CA'));
        console.log(this.voiceOptions);
      }, 500);
    }
  }

  setVoice(target) {
      this.msg.voice = this.voiceOptions.find(v => v.lang === target.value);
      this.toggle();
  }
}
