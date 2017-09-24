import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Iwindow, SpeechStat } from '../shared/iwindow';

@Component({
  selector: 'app-speed-recognition',
  templateUrl: './speed-recognition.component.html',
  styleUrls: ['./speed-recognition.component.css']
})
export class SpeedRecognitionComponent implements OnInit, OnDestroy {

  recognition: any;
  transcripts: SpeechStat[] = [];
  
  constructor(private zone: NgZone) { }
 
  // https://hassantariqblog.wordpress.com/2016/12/04/angular2-web-speech-api-speech-recognition-in-angular2/
  ngOnInit() {
      // window.SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
      const { SpeechRecognition, webkitSpeechRecognition }: Iwindow = <Iwindow>window;
      const ActualSpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
      if (ActualSpeechRecognition) {
        this.recognition = new ActualSpeechRecognition();
        this.recognition.interimResult = true;
        this.recognition.lang = 'en-us';
        this.recognition.onend = () => {
          this.recognition.start();
        }
        
        this.recognition.onerror = e => {
          console.error(e);
        }
        
        this.recognition.onresult = e => {
          console.log(e);
          const stat: SpeechStat = Array.from(e.results)
            .map(results => results[0])
            .map(result =>  ({ transcript: result.transcript, confidence: result.confidence }))[0];
          if (e.results[0].isFinal) {  
             this.zone.run( () => {
               this.transcripts.push(stat);
             });
          }
        }      
        this.recognition.start();
      }
  }
  
  ngOnDestroy() {
    if (this.recognition) {
      this.recognition.stop();
    }
  }
}
