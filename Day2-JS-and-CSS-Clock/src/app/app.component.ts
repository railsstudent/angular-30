import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'JS and CSS Clock';
  intervalId: number;

  constructor() {
  }

  secondDegrees: number;
  minuteDegrees: number;
  hourDegrees: number;

  ngOnInit() {
    this.intervalId = setInterval(this.setDate.bind(this), 1000);
  }
  
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  setDate() {
    const now = new Date()

    const seconds = now.getSeconds();
    this.secondDegrees = ((seconds / 60) * 360) + 90;

    const minutes = now.getMinutes();
    this.minuteDegrees = ((minutes / 60) * 360) + 90;

    const hours = now.getHours();
    this.hourDegrees = ((hours / 12) * 360) + 90;
  }

  getHourStyle() {
    return `rotate(${this.hourDegrees}deg)`;
  }

  getMinuteStyle() {
    return `rotate(${this.minuteDegrees}deg)`;
  }

  getSecondStyle() {
    return `rotate(${this.secondDegrees}deg)`;
  }
}
