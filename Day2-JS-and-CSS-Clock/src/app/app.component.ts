import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JS and CSS Clock';

  constructor() {
  }

  secondDegrees: number;
  minuteDegrees: number;
  hourDegrees: number;

  ngOnInit() {
    setInterval(this.setDate.bind(this), 1000);
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
