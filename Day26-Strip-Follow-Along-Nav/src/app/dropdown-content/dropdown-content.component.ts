import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-content',
  templateUrl: './dropdown-content.component.html',
  styleUrls: ['./dropdown-content.component.css']
})
export class DropdownContentComponent implements OnInit {

  @Input()
  linkName: string = '';

  @Input()
  href: string;

  @Input()
  dropdownClass: string;

  constructor() { }

  ngOnInit() {
  }

}
