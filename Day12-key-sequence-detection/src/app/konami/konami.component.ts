import { Component, OnInit, HostListener } from '@angular/core';
// https://stackoverflow.com/questions/44817349/how-to-include-external-js-file-in-angular-4-and-call-function-from-angular-to-j
import * as cornami from '../assets/js/cornify.js';

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
      // cornify_add();
    }

  }
}
