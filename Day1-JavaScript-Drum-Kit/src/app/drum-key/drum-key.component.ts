import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'drum-key',
  templateUrl: './drum-key.component.html',
  styleUrls: ['./drum-key.component.css'],
  host: {
    '[class.playing]': 'isPlaying'
  }
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

  constructor() {
  }

  isPlaying: boolean;

  ngOnInit() {
    this.soundFile = `assets/sounds/${this.description}.wav`;
    this.isPlaying = false;
  }

  // https://stackoverflow.com/questions/36695922/angular-2-keyboard-events
  playSound(){
    let audio = this.audio.nativeElement;
    audio.currentTime = 0;
    audio.play();
    this.isPlaying = true;
  }

  getLetter() {
    return this.letter;
  }

}
