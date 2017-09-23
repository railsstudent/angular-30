import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, Renderer } from '@angular/core';
import { CheckboxClickState } from './item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Output()
  onClicked = new EventEmitter<CheckboxClickState>();

  @ViewChild('myCheckbox')
  myCheckbox: ElementRef;

  constructor(private renderer: Renderer) { }

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
    this.renderer.setElementProperty(this.myCheckbox.nativeElement, 'checked', true);
  }
}
