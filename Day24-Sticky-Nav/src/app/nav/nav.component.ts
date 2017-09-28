import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  host: {
    '[class.fixed-nav]': 'showStickyNav'
  }
})
export class NavComponent implements OnInit {

  @ViewChild("mynav")
  nav: ElementRef;
  showStickyNav: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getOffsetTop() {
      return this.nav.nativeElement.offsetTop;
  }

  setFixedNav(showStickyNav) {
    this.showStickyNav = showStickyNav;
  }
}
