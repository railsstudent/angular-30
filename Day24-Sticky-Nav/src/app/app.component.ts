import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sticky Nav'

  constructor (titleService: Title) {
    titleService.setTitle(this.title);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    console.log('scroll happen');
  }
}
