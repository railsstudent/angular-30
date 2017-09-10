import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Title]
})
export class AppComponent {
  title = 'HTML5 Canvas';
  
  constructor(titleService: Title) {
    titleService.setTitle(this.title);
  }
}
