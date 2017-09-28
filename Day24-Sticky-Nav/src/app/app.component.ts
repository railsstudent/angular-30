import { Component, HostListener, ViewChild, ElementRef, OnInit, Renderer, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sticky Nav'

  @ViewChild(NavComponent)
  navComponent: NavComponent;

  @ViewChild(ContentComponent)
  contentComponent: ContentComponent;

  topOfNav: number;

  constructor (titleService: Title, private renderer: Renderer, @Inject(DOCUMENT) private document: any) {
    titleService.setTitle(this.title);
  }

  ngOnInit() {
    this.topOfNav = this.navComponent.getOffsetTop();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    const currentOffsetTop = this.navComponent.getOffsetTop();
    console.log(currentOffsetTop, window.scrollY);
    this.navComponent.setFixedNav(window.scrollY >= this.topOfNav);
    this.contentComponent.setFixedNav(window.scrollY >= this.topOfNav);
    if (window.scrollY >= this.topOfNav) {
      this.renderer.setElementStyle(this.document.body, 'paddingTop', '70px');
    } else {
      this.renderer.setElementStyle(this.document.body, 'paddingTop', '0');
    }
  }
}
