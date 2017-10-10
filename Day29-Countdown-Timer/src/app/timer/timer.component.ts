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
  minutes: number;
  endTime: string = '';
  timerDisplay: string = '';

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

  timer(seconds: number) {
    console.log(seconds);
    clearInterval(this.countdown);

    const now = Date.now();
    const then = now + seconds * 1000;

    console.log(now, then);

    this.displayTimeLeft(seconds);
    this.displayEndTime(then);

    this.countdown = setInterval(() => {
      const secondsLeft = Math.round( (then - Date.now()) / 1000 );
      if (secondsLeft < 0) {
        clearInterval(this.countdown);
        return;
      }
      this.displayTimeLeft(secondsLeft);
    }, 1000);
  }

  displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    this.timerDisplay = `${minutes}:${remainderSeconds < 10 ? 0 : ''}${remainderSeconds}`;
    this.onUpdateTimeLeft.emit(this.timerDisplay);
  }

  displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    const adjustedHours = hours > 12 ? hours - 12 : hours;
    this.endTime = `${adjustedHours}:${minutes < 10 ? 0 : ''}${minutes}`;
  }

  submit($event, form, elTimerDisplay, elEndTime) {
    $event.preventDefault();
    console.log(this.minutes);
    this.timer(this.minutes * 60);
    form.reset();
  }
}
