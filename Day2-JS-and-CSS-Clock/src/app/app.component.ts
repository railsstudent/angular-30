import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'JS and CSS Clock';

  @ViewChild('hourhand')
  hourHand: ElementRef;

  @ViewChild('minhand')
  minHand: ElementRef;

  @ViewChild('secondhand')
  secondHand: ElementRef;

  constructor(private renderer: Renderer) {
  }

  ngOnInit() {
    console.log(this.hourHand);
    setInterval(this.setDate.bind(this), 1000);
  }

  setDate() {
    const now = new Date()

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;

    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + 90;

    this.renderer.setElementStyle(this.secondHand.nativeElement, 'transform', `rotate(${secondDegrees}deg)`)
    this.renderer.setElementStyle(this.minHand.nativeElement, 'transform', `rotate(${minuteDegrees}deg)`)
    this.renderer.setElementStyle(this.hourHand.nativeElement, 'transform', `rotate(${hourDegrees}deg)`)
  }
}
