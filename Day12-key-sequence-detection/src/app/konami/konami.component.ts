import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-konami',
  templateUrl: './konami.component.html',
  styleUrls: ['./konami.component.css']
})
export class KonamiComponent implements OnInit {

  secretCode: string = '';
  pressed: string[] = [];
  
  constructor() { 
    this.secretCode = 'connie';
  }

  ngOnInit() {
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp($event) {
    
  }
  
    // const pressed = [];
    // const secretCode = 'connie';
    // window.addEventListener('keyup', e => {
    //   pressed.push(e.key);
    //   // Pushed out from the beginning of array length exceeds length of secret code
    //   pressed.splice(0,  pressed.length - secretCode.length);
    //   console.log(pressed);
    //   if (pressed.join('').includes(secretCode)) {
    //     console.log('DING DING');
    //     cornify_add();
    //   }
    // });
}
