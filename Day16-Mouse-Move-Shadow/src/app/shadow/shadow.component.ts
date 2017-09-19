import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.css']
})
export class ShadowComponent implements OnInit {

  walk: number = 100;

  @ViewChild('hero')
  hero: ElementRef;

  @ViewChild('text')
  text: ElementRef;

  constructor(private renderer: Renderer) { }

  ngOnInit() {
  }

  shadow(event) {
    const {offsetWidth: width, offsetHeight: height} = this.hero.nativeElement;
    let {offsetX: x, offsetY: y} = event;

    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;

    const xwalk = Math.round((x / width * this.walk) - (this.walk / 2));
    const ywalk = Math.round((y / height * this.walk) - (this.walk / 2));
    const textShadowCss =
    `
      ${xwalk}px ${ywalk}px 0 rgba(255,0,255,0.7),
      ${xwalk * -1}px ${ywalk}px 0 rgba(0,255,255,0.7),
      ${ywalk}px ${xwalk * -1}px 0 rgba(0,255,0,0.7),
      ${ywalk * -1}px ${ywalk}px 0 rgba(0,0,255,0.7),
      ${ywalk * -1}px ${ywalk * -1}px 0 rgba(255,0,0,0.7)
    `
    // offset x, offset y, blur radius, color
    this.renderer.setElementStyle(this.text.nativeElement, 'text-shadow', textShadowCss);
  }

}
