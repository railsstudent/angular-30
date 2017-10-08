import { Component, OnInit, Renderer } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  mousedown: boolean;

  constructor(private renderer: Renderer) { }

  ngOnInit() {
    this.mousedown = false;
  }

  handleRangeUpdate({target}, video) {
    const {name, value} = target;
    console.log(name, value);
    video[name] = value;
  }

  skip({target}, video) {
    const {dataset} = target;
    console.log(dataset.skip);
    video.currentTime += parseFloat(dataset.skip);
  }

  togglePlay(video) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  updateButton(video, toggle) {
    const icon = video.paused ? '►' : '❚ ❚';
    this.renderer.setElementProperty(toggle, 'textContent', icon);
  }

  handleProgress(video, progressBar) {
    // update flex-basis of progress bar
    const percent = (video.currentTime / video.duration) * 100;
    console.log(`flex-basis: ${percent}`);
    progressBar.style.flexBasis = `${percent}%`;
  }

  scrub(e, video, progress) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(`currentTime: ${video.currentTime}`);
  }

}
