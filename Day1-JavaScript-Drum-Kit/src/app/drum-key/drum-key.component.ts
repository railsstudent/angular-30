import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.soundFile = `assets/sounds/${this.description}.wav`;
    console.log(this.soundFile);
    console.log(this.aciiValue);

  }

}
