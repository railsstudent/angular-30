import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemState } from '../shared/item-state';
import { Item } from '../shared/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  item: Item;

  @Input()
  index: number;

  @Output()
  onDone = new EventEmitter<ItemState>();

  constructor() { }

  ngOnInit() {
  }

  toggleDone() {
    this.item.done = !this.item.done;
    const itemState: ItemState = { done: this.item.done, index: this.index }
    console.log(itemState);
    this.onDone.emit(itemState);
  }

}
