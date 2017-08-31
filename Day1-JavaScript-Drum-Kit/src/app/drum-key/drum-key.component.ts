import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'drum-key',
  templateUrl: './drum-key.component.html',
  styleUrls: ['./drum-key.component.css']
})
export class DrumKeyComponent implements OnInit {

  @Input('value')
  aciiValue: string;

  @Input()
  letter: string;

  @Input()
  description: string;

  soundFile: string;

  @ViewChild('myaudio')
  audio: ElementRef;

  constructor() { }

  ngOnInit() {
    this.soundFile = `assets/sounds/${this.description}.wav`;
  }

  // https://stackoverflow.com/questions/36695922/angular-2-keyboard-events
  playSound(){
    console.log(`${this.letter} is played`);
    //let audio = (Audio) this.audio;
    let audio = this.audio.nativeElement;
    audio.currentTime = 0;
    audio.play();
    //key.classList.add('playing');
  }

  getLetter() {
    return this.letter;
  }

}
