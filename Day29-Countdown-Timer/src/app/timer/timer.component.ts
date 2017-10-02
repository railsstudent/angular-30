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

  timer(seconds: number, elTimerDisplay: any, elEndTime: any) {
    console.log(seconds);
    clearInterval(this.countdown);

    const now = Date.now();
    const then = now + seconds * 1000;

    console.log(now, then);

    this.displayTimeLeft(elTimerDisplay, seconds);
    this.displayEndTime(elEndTime, then);

    this.countdown = setInterval(() => {
      const secondsLeft = Math.round( (then - Date.now()) / 1000 );
      if (secondsLeft < 0) {
        clearInterval(this.countdown);
        return;
      }
      this.displayTimeLeft(elTimerDisplay, secondsLeft);
    }, 1000);
  }

  displayTimeLeft(elTimerDisplay, seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? 0 : ''}${remainderSeconds}`;
    this.renderer.setElementProperty(elTimerDisplay, 'textContent', display);
    this.onUpdateTimeLeft.emit(display);
  }

  displayEndTime(elEndTime, timestamp) {
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    const adjustedHours = hours > 12 ? hours - 12 : hours;
    this.renderer.setElementProperty(elEndTime, 'textContent', `${adjustedHours}:${minutes < 10 ? 0 : ''}${minutes}`);
  }
}
