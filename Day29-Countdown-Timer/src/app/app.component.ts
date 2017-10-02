import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Countdown Timer';

  constructor(private titleService: Title) {
     this.titleService.setTitle(this.title);
  }

  updateTitleDisplay(strTime: string) {
    this.titleService.setTitle(strTime);
  }
}
