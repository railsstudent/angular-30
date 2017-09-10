import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {

  isDrawing: boolean;
  lastX: number = 0;
  lastY: number = 0;
  hue: number = 0;
  direction: boolean = true;
  
  @ViewChild('mycanvas')
  canvas: ElementRef;
  
  ctx: any;
  
  constructor() { }

  ngOnInit() {
    this.isDrawing = false;
  }
  
  ngAfterViewInit() {
    const nativeCanvas = this.canvas.nativeElement;
    this.ctx = nativeCanvas.getContext('2d');
    nativeCanvas.width = window.innerWidth;
    nativeCanvas.height = window.innerHeight;
    
    // color
    this.ctx.strokeStyle = "#BADASS";
    // when line joins, round
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 100;
  }

  onMouseDown(eventOffsets) {
    this.isDrawing = true;
    [this.lastX = 0, this.lastY = 0] = eventOffsets;
    console.log(this.lastX, this.lastY);
  }
  
  draw(eventOffsets: number[]) {
    if (!this.isDrawing) return;

      // mouse down happens
      //console.log(e);
    this.ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
    this.ctx.beginPath();
    // start from
    this.ctx.moveTo(this.lastX, this.lastY);
    // go to
    const [offsetX, offsetY] = eventOffsets;
    this.ctx.lineTo(offsetX, offsetY);
    this.ctx.stroke();
    [this.lastX, this.lastY] = [ offsetX, offsetY ];

    // change the hue of the stroke
    this.hue++;
    if (this.hue >= 360) {
      this.hue = 0;
    }

    // change the width of the line dynamically
    if (this.ctx.lineWidth >= 100 || this.ctx.lineWidth <= 1) {
      this.direction = !this.direction;
    }
    if (this.direction) {
      this.ctx.lineWidth++;
    } else {
      this.ctx.lineWidth--;
    }
  }
}
