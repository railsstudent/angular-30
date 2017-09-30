import { Component, OnInit, Renderer } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private renderer: Renderer) { }

  ngOnInit() {
  }

  onMouseMove($event, speed, bar, video) {
    const {pageY} = $event;
    const {offsetTop, offsetHeight} = speed;
    const y = pageY - offsetTop;
    const percent = y / offsetHeight;

    const min = 0.4;
    const max = 4;
    const height = `${Math.round(percent * 100)}%`;
    const playbackRate = percent * (max - min) + min;

    this.renderer.setElementStyle(bar, 'height', height);
    this.renderer.setElementProperty(bar, 'textContent', `${playbackRate.toFixed(2)}x`);
    video.playbackRate = playbackRate;
  }
}
