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

  callback: any;
  links: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    const self = this;
    this.callback =  function() {
      const linkCoords = this.getBoundingClientRect();
      const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
      };
      self.renderer.setElementStyle(self.highlight.nativeElement, 'width', `${coords.width}px`);
      self.renderer.setElementStyle(self.highlight.nativeElement, 'height', `${coords.height}px`);
      self.renderer.setElementStyle(self.highlight.nativeElement, 'transform', `translate(${coords.left}px, ${coords.top}px)`);
    }
  }

  ngOnInit() {
    this.links = this.elementRef.nativeElement.querySelectorAll('a');
    this.links.forEach(a => a.addEventListener('mouseenter', this.callback.bind(a)));
  }

  ngOnDestroy() {
    this.links.forEach(a => a.removeEventListener('mouseenter', this.callback))
  }
}
