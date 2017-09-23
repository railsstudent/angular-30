import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { ItemState } from '../shared/item-state';
import { Item } from '../shared/item';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  items: Item[] = [];
  text: string = '';

  @ViewChild('btnCheckAll')
  btnCheckAll: ElementRef;

  constructor(private renderer: Renderer) { }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('items')) || [];
    console.log(this.items);
  }

  clearItem() {
    this.items.splice(0, this.items.length);
    console.log(this.items);
    localStorage.setItem('items', JSON.stringify(this.items));
    this.populateButtonLabel();
  }

  toggleCheckAll() {
    const btnText = this.btnCheckAll.nativeElement.value;
    if (btnText === 'Check All') {
      this.items.map(item => item.done = true);
      this.renderer.setElementProperty(this.btnCheckAll.nativeElement, 'value', 'Uncheck All');
    } else {
      this.items.map(item => item.done = false);
      this.renderer.setElementProperty(this.btnCheckAll.nativeElement, 'value', 'Check All');
    }
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  populateButtonLabel() {
    if (this.items.every(item => item.done)) {
      this.renderer.setElementProperty(this.btnCheckAll.nativeElement, 'value', 'Uncheck All');
    } else {
      this.renderer.setElementProperty(this.btnCheckAll.nativeElement, 'value', 'Check All');
    }
  }

  onSubmit($event) {
    $event.preventDefault();
    const item: Item = {
      text: this.text,
      done: false
    };
    this.items.push(item);
    localStorage.setItem('items', JSON.stringify(this.items));
    this.populateButtonLabel();
    this.text = '';
  }

  updateLocalStorage(itemState: ItemState) {
    localStorage.setItem('items', JSON.stringify(this.items));
    this.populateButtonLabel();
  }

}
