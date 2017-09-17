import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemState } from '../shared/item-state';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input()
  items: any;

  @Output()
  onDone = new EventEmitter<ItemState>();

  numPlatesChecked: number;

  constructor() { }

  ngOnInit() {
    this.numPlatesChecked = this.items.filter(item => item.done).length;
  }

  trackByFunc(index, current) {
    return index;
  }

  updateItemCount(itemState: ItemState) {
    this.numPlatesChecked = this.items.filter(item => item.done).length;
    // Inform item form to update button text
    // Inform item form to update local storage
    this.onDone.emit(itemState);
  }
}
