import { Component, OnInit, Output, OnDestroy, EventEmitter, Renderer } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output()
  onUpdateTimeLeft = new EventEmitter<string>();

  countdown: any;

  timerOptions = [];

  constructor(private renderer: Renderer) { }

  ngOnInit() {
    this.timerOptions = [{
      value: 20,
      description: '20 Secs'
    },
    {
      value: 300,
      description: 'Work 5'
    },
    {
      value: 900,
      description: 'Quick 15'
    },
    {
      value: 1200,
      description: 'Snack 20'
    },
    {
      value: 3600,
      description: 'Lunch Break'
    }]
  }

  ngOnDestroy() {
    clearInterval(this.countdown);
  }

  timer(seconds: number, elTimeLeft: any, elEndTime: any) {
    console.log(seconds);
    clearInterval(this.countdown);

    const now = Date.now();
    const then = now + seconds * 1000;

    console.log(now, then);

    this.displayTimeLeft(elTimeLeft, seconds);
    this.displayEndTime(elEndTime, then);
  }

  displayTimeLeft(elTimeLeft, seconds) {

  }

  displayEndTime(elEndTime, timestamp) {
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    const adjustedHours = hours > 12 ? hours - 12 : hours;
    const adjustedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    this.renderer.setElementProperty(elEndTime, 'textContent', `${adjustedHours}:${adjustedMinutes}`);
  }
}
