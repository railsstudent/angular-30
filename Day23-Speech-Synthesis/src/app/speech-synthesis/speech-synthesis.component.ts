import { Component, OnInit, OnDestroy } from '@angular/core';
import { IWindow } from '../shared/iwindow';

declare var SpeechSynthesisUtterance: any;

@Component({
  selector: 'app-speech-synthesis',
  templateUrl: './speech-synthesis.component.html',
  styleUrls: ['./speech-synthesis.component.css']
})
export class SpeechSynthesisComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
      console.log(<IWindow>window);
      const { speechSynthesis }: IWindow = <IWindow>window;
      //console.log(SpeechSynthesis, SpeechSynthesisUtterance); = 
      console.log(speechSynthesis);
      // if (window.speechSynthesis) {
      //   console.log('hello');
      // }
      /*if (window.SpeechSynthesisUtterance) {
        console.log('world');
      }*/
      if (SpeechSynthesisUtterance) {
        const x = new SpeechSynthesisUtterance();
        console.log(x);
        console.log('world');
      }
  }
  
  ngOnDestroy() {
    
  }

}
