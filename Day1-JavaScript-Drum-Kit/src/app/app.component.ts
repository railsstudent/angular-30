import { Component, ViewChildren, QueryList, HostListener } from '@angular/core';
import {DrumKeyComponent} from './drum-key/drum-key.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChildren(DrumKeyComponent) drumKeyComponents: QueryList<DrumKeyComponent>;

  @HostListener('window:keydown', ['$event'])
  onkeydown(ev: KeyboardEvent) {
    let drumKey = this.drumKeyComponents.filter(d => ev.key.toUpperCase() === d.getLetter());
    if (drumKey && drumKey.length > 0) {
      drumKey[0].playSound();
    }
  }
}
