import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  host: {
      '[class.fixed-nav]': 'showStickyNav'
  }
})
export class ContentComponent implements OnInit {

  showStickyNav: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setFixedNav(showStickyNav) {
    this.showStickyNav = showStickyNav;
  }
}
