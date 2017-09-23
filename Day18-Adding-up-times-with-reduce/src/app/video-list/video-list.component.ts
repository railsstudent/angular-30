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
      },
      {
        name: 'Video 4',
        time: '0:47'
      },
      {
        name: 'Video 5',
        time: '5:21'
      },
      {  name: 'Video 6',
        time: '6:56'
      },
      {
        name: 'Video 7',
        time: '3:46'
      },
      {
        name: 'Video 8',
        time: '5:25'
      },
      {
        name: 'Video 9',
        time: '3:14'
      },
      {
        name: 'Video 10',
        time: '3:31'
      },
      {
        name: 'Video 11',
        time: '5:59'
      },
      {
        name: 'Video 12',
        time: '3:07'
      },
      {
        name: 'Video 13',
        time: '11:29'
      },
      {
        name: 'Video 14',
        time: '8:57'
      },
      {
        name: 'Video 15',
        time: '5:49'
      },
      {
        name: 'Video 16',
        time: '5:52'
      },
      {
        name: 'Video 17',
        time: '5:50'
      },
      {
        name: 'Video 18',
        time: '9:13'
      },
      {
        name: 'Video 19',
        time: '11:51'
      },
      {
        name: 'Video 20',
        time: '7:58'
      },
      {
        name: 'Video 21',
        time: '4:40'
      },
      {
        name: 'Video 22',
        time: '4:45'
      },
      {
        name: 'Video 23',
        time: '6:46'
      },
      {
        name: 'Video 24',
        time: '7:24'
      },
      {
        name: 'Video 25',
        time: '7:12'
      },
      {
        name: 'Video 26',
        time: '5:23'
      },
      {
        name: 'Video 27',
        time: '3:34'
      },
      {
        name: 'Video 28',
        time: '8:22'
      },
      {
        name: 'Video 29',
        time: '5:17'
      },
      {
        name: 'Video 30',
        time: '3:10'
      },
      {
        name: 'Video 31',
        time: '4:43'
      },
      {
        name: 'Video 32',
        time: '19:43'
      },
      {
        name: 'Video 33',
        time: '0:47'
      },
      {
        name: 'Video 34',
        time: '0:47'
      },
      {
        name: 'Video 35',
        time: '3:14'
      },
      {
        name: 'Video 36',
        time: '3:59'
      },
      {
        name: 'Video 37',
        time: '2:43'
      },
      {
        name: 'Video 38',
        time: '4:17'
      },
      {
        name: 'Video 39',
        time: '6:56'
      },
      {
        name: 'Video 40',
        time: '3:05'
      },
      {
        name: 'Video 41',
        time: '2:06'
      },
      {
        name: 'Video 42',
        time: '1:59'
      },
      {
        name: 'Video 43',
        time: '1:49'
      },
      {
        name: 'Video 44',
        time: '3:36'
      },
      {
        name: 'Video 45',
        time: '7:10'
      },
      {
        name: 'Video 46',
        time: '3:44'
      },
      {
        name: 'Video 47',
        time: '3:44'
      },
      {
        name: 'Video 48',
        time: '4:36'
      },
      {
        name: 'Video 49',
        time: '3:16'
      },
      {
        name: 'Video 50',
        time: '1:10'
      },
      {
        name: 'Video 51',
        time: '6:10'
      },
      {
        name: 'Video 52',
        time: '2:14'
      },
      {
        name: 'Video 53',
        time: '3:44'
      },
      {
        name: 'Video 54',
        time: '5:05'
      },
      {
        name: 'Video 55',
        time: '6:03'
      },
      {
        name: 'Video 56',
        time: '12:39'
      },
      {
        name: 'Video 57',
        time: '1:56'
      },
      {
        name: 'Video 58',
        time: '4:11'
      }
    ];
  }

  totalTime() {
    const seconds = this.videos.reduce((acc, v) => {
        const [minute, seconds] = v.time.split(':').map(parseFloat);
        return acc + (minute * 60 + seconds);
      }, 0);
    // convert total to hour:minute:sec format
    const hours = Math.floor(seconds / (60 * 60));
    const strHours = (hours < 10) ? `0${hours}`: `${hours}`;

    let secondLeft = seconds % (60 * 60);
    const minutes = Math.floor(secondLeft / 60);
    const strMinutes = (minutes < 10) ? `0${minutes}`: `${minutes}`;

    secondLeft = secondLeft % 60;
    let strSeconds = (secondLeft < 10) ? `0${secondLeft}`: `${secondLeft}`;;
    return `${strHours}:${strMinutes}:${strSeconds}`;
  }
}
