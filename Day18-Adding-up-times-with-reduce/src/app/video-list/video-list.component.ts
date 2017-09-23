import { Component, OnInit } from '@angular/core';
import { VideoItem } from '../shared/video-item';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos: VideoItem[];

  constructor() { }

  ngOnInit() {
    this.videos = [
      {
        name: 'Video 1',
        time: '5:43'
      },
      {
        name: 'Video 2',
        time: '2:33'
      },
      {
        name: 'Video 3',
        time: '3:45'
      }
    ];
  }

}
