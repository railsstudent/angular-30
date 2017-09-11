import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CheckboxClickState } from '../checkbox-click-state';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Output()
  onClicked = new EventEmitter<CheckboxClickState>();

  constructor() { }

  ngOnInit() {
  }
    
  handleCheck($event, isChecked) {
    console.log($event);
    console.log(isChecked);
    const checkboxClickState = { 
        shiftKeyPressed: $event.shiftKey, 
        checked: isChecked,
        lastCheck: $event.target
      };
    this.onClicked.emit(checkboxClickState);
  }
}
