import { Component, HostListener, ViewChild, ElementRef, OnInit, Renderer } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sticky Nav'

  @ViewChild(NavComponent)
  navComponent: NavComponent;

  topOfNav: number;

  constructor (titleService: Title, private renderer: Renderer) {
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
  }
}
