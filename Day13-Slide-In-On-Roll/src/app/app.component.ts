import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Slide In On Scroll';

  constructor(titleService: Title) {
    titleService.setTitle(this.title);
  }
}
