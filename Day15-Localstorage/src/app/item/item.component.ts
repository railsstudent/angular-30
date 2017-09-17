import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemState } from '../shared/item-state';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // TODO: Make an item interface
  @Input()
  item: any;

  @Input()
  index: number;

  @Output()
  onDone = new EventEmitter<ItemState>();

  constructor() { }

  ngOnInit() {
    //console.log(this.item);
    //console.log(this.index);
  }

  toggleDone() {
    this.item.done = !this.item.done;
    const itemState: ItemState = { done: this.item.done, index: this.index }
    console.log(itemState);
    this.onDone.emit(itemState);
  }

}
