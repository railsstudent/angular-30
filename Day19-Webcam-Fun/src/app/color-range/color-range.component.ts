import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-range',
  templateUrl: './color-range.component.html'
})
export class ColorRangeComponent implements OnInit {

  // https://blog.thoughtram.io/angular/2016/10/13/two-way-data-binding-in-angular-2.html#creating-custom-two-way-data-bindings
  @Input()
  color: string;

  minValue: number;

  maxValue: number;

  @Output()
  minChange: EventEmitter<number> = new EventEmitter();

  @Output()
  maxChange: EventEmitter<number> = new EventEmitter();

  @Input()
  get min() {
    return this.minValue;
  }

  set min(newValue) {
    this.minValue = newValue;
    this.minChange.emit(this.minValue);
  }

  @Input()
  get max() {
    return this.maxValue;
  }

  set max(newValue) {
    this.maxValue = newValue;
    this.maxChange.emit(this.maxValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
