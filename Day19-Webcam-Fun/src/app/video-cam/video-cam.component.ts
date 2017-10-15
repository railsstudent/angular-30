import { Component, OnInit, ViewChild, ElementRef, Renderer, AfterViewInit, OnDestroy } from '@angular/core';
import { PhotoLink } from '../shared/photo-link';

@Component({
  selector: 'app-video-cam',
  templateUrl: './video-cam.component.html',
  styleUrls: ['./video-cam.component.css']
})
export class VideoCamComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('video')
  video: ElementRef;

  @ViewChild('canvas')
  canvas: ElementRef;

  redMin: number;
  redMax: number;
  greenMin: number;
  greenMax: number;
  blueMin: number;
  blueMax: number;
  ctx: any;
  photos: PhotoLink[];

  constructor(private renderer: Renderer) { }

  ngOnInit() {
    this.redMin = 100;
    this.redMax = 200;
    this.greenMin = 100;
    this.greenMax = 200;
    this.blueMin = 100;
    this.blueMax = 200;
    this.getVideo();
  }

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    console.log(this.ctx);
    console.dir(this.video.nativeElement);
    this.video.nativeElement.addEventListener('canplay', this.paintToCanvas.bind(this));
  }

  ngOnDestroy() {
    this.video.nativeElement.removeEventListener('canplay', this.paintToCanvas);
  }

  takePhoto(snap) {
    snap.currentTime = 0;
    snap.play();

    console.log(this.redMin, this.redMax, this.greenMin, this.greenMax, this.blueMin, this.blueMax);

    // take the data out of the canvas
    const data = this.canvas.nativeElement.toDataURL('image/jpeg');
    const photo: PhotoLink = {
      data: data,
      alt: 'creepy lady'
    };
    this.photos = [photo, ...this.photos];
  }

  getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
      .then(localMediaStream => {
          console.log(localMediaStream);
          this.renderer.setElementProperty(this.video.nativeElement, 'src', window.URL.createObjectURL(localMediaStream));
          this.video.nativeElement.play();
      }).catch(err => console.error(`OH NO!!!`, err));
  }

  paintToCanvas() {
    const {videoWidth: width, videoHeight: height} = this.video.nativeElement;
    this.renderer.setElementProperty(this.canvas.nativeElement, 'width', width);
    this.renderer.setElementProperty(this.canvas.nativeElement, 'height', height);

    return setInterval(() => {
      this.ctx.drawImage(this.video.nativeElement, 0, 0, width, height);
      let pixels = this.ctx.getImageData(0, 0, width, height);
      // mess with them
      // pixels = redEffect(pixels);
      // pixels = rgbSplit(pixels);
      // ctx.globalAlpha = 0.8;
      pixels = this.greenScreen(pixels);
      this.ctx.putImageData(pixels, 0, 0)
    }, 16);
  }

  redEffect(pixels) {
    for (let i = 0; i < pixels.data.  length; i+=4) {
        pixels.data[i+0] =  pixels.data[i+0] + 100;  // r;
        pixels.data[i+1] =  pixels.data[i+1] - 50;  // g;
        pixels.data[i+2] =  pixels.data[i+2] * 0.5;  // b;
     }
     return pixels;
  }

  rgbSplit(pixels) {
      for (let i = 0; i < pixels.data.  length; i+=4) {
          pixels.data[i-150] =  pixels.data[i+0];  // r;
          pixels.data[i+100] =  pixels.data[i+1];  // g;
          pixels.data[i-150] =  pixels.data[i+2];  // b;
       }
       return pixels;
  }

  greenScreen(pixels) {
    for (let i = 0; i < pixels.data.length; i = i + 4) {
      let red = pixels.data[i + 0];
      let green = pixels.data[i + 1];
      let blue = pixels.data[i + 2];
      let alpha = pixels.data[i + 3];

      if (red >= this.redMin
        && green >= this.greenMin
        && blue >= this.blueMin
        && red <= this.redMax
        && green <= this.greenMax
        && blue <= this.blueMax) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }
    return pixels;
  }
}
