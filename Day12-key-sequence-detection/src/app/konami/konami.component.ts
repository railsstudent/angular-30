import { Component, OnInit, HostListener } from '@angular/core';

// Reference:
// https://www.thepolyglotdeveloper.com/2017/03/javascript-libraries-in-a-typescript-application-revisited/
declare var cornami: any;

@Component({
  selector: 'app-konami',
  templateUrl: './konami.component.html',
  styleUrls: ['./konami.component.css']
})
export class KonamiComponent implements OnInit {

  secretCode: string = '';
  pressed: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.secretCode = 'connie';
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(e) {
    console.log({key: e.key});
    this.pressed.push(e.key);
    // Pushed out from the beginning of array length exceeds length of secret code
    this.pressed.splice(0,  this.pressed.length - this.secretCode.length);
    console.log(this.pressed);
    if (this.pressed.join('').includes(this.secretCode)) {
      console.log('DING DING');
      cornami.cornify_add();
    }
  }
}
