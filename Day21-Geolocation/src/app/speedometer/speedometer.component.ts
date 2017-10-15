import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speedometer',
  templateUrl: './speedometer.component.html',
  styleUrls: ['./speedometer.component.css']
})
export class SpeedometerComponent implements OnInit {

  speed: number = 0;
  translation: string = '';

  constructor() { }gOnInit() {
  }

  ngOnInit() {
    navigator.geolocation.watchPosition(data => {
        console.log(data);
        this.speed = data.coords.speed;
        this.translation = `rotate(${data.coords.heading}deg)`;
    });
  }

  rotation() {
    console.log(`rotation fired, ${this.translation}`);
    return this.translation;
  }
}
