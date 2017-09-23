import { Component, OnInit, Input } from '@angular/core';
import { VideoItem } from '../shared/video-item';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {

  @Input()
  video: VideoItem;

  constructor() { }

  ngOnInit() {
  }

}
