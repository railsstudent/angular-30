import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  host: {
      '[class.open]': 'isOpen',
      '[class.open-active]': 'isOpenActive'
  }
})
export class PanelComponent implements OnInit {

  isOpen: boolean;
  isOpenActive: boolean;

  constructor() { }

  ngOnInit() {
    this.isOpen = false;
    this.isOpenActive = false;
  }
  
  @HostListener('click', [])
  click($event) {
    this.isOpen = !this.isOpen;
  }

  @HostListener('transitionend', ['$event'])
  transitionEnd($event) {
    if ($event.propertyName.includes('flex')) {
      this.isOpenActive = this.isOpen;
    }
  }
}
