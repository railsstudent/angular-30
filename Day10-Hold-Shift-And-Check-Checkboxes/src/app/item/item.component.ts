import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { CheckboxClickState } from '../checkbox-click-state';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Output()
  onClicked = new EventEmitter<CheckboxClickState>();
  
  @ViewChild('#myCheckbox')
  myCheckbox: ElementRef;

  constructor() { }

  ngOnInit() {
  }
    
  handleCheck($event, isChecked) {
    console.log($event);
    console.log(isChecked);
    const checkboxClickState = { 
        shiftKey: $event.shiftKey, 
        checked: isChecked,
        selected: this
      };
    this.onClicked.emit(checkboxClickState);
  }
  
  selectCheckbox(value: boolean) {
    this.myCheckbox.nativeElement.checked = value;
  }
}
