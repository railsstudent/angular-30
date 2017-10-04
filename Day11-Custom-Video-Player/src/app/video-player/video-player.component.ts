import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  mousedown: boolean;

  constructor() { }

  ngOnInit() {
    this.mousedown = false;
  }

  handleRangeUpdate({target}, video) {
    const {name, value} = target;
    console.log(name, value);
    video[name] = value;
  }

}
