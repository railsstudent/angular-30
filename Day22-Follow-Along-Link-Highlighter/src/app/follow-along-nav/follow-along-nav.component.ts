import { Component, OnInit, ElementRef, ViewChild, Renderer, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-follow-along-nav',
  templateUrl: './follow-along-nav.component.html',
  styleUrls: ['./follow-along-nav.component.css']
})
export class FollowAlongNavComponent implements OnInit, OnDestroy {

  @ViewChild('myhighlight')
  highlight: ElementRef;

  callback =  [];

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    const links = this.elementRef.nativeElement.querySelectorAll('a');


    function xxx() {
        console.log(a.getBoundingClientRect());
        const linkCoords = a.getBoundingClientRect();
        console.log(linkCoords);
        const coords = {
          width: linkCoords.width,
          height: linkCoords.height,
          top: linkCoords.top + window.scrollY,
          left: linkCoords.left + window.scrollX
        };
        this.renderer.setElementStyle(this.highlight.nativeElement, 'width', `${coords.width}px`);
        this.renderer.setElementStyle(this.highlight.nativeElement, 'height', `${coords.height}px`);
        this.renderer.setElementStyle(this.highlight.nativeElement, 'transform', `translate(${coords.left}px, ${coords.top}px)`);
    }

    links.forEach(a => a.addEventListener('mouseenter', () => {
        console.log(a.getBoundingClientRect());
        const linkCoords = a.getBoundingClientRect();
        console.log(linkCoords);
        const coords = {
          width: linkCoords.width,
          height: linkCoords.height,
          top: linkCoords.top + window.scrollY,
          left: linkCoords.left + window.scrollX
        };
        this.renderer.setElementStyle(this.highlight.nativeElement, 'width', `${coords.width}px`);
        this.renderer.setElementStyle(this.highlight.nativeElement, 'height', `${coords.height}px`);
        this.renderer.setElementStyle(this.highlight.nativeElement, 'transform', `translate(${coords.left}px, ${coords.top}px)`);
    }));
  }

  ngOnDestroy() {

  }
}
