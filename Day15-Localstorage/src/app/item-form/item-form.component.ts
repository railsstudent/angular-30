import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  items = null;
  text: string = '';

  @ViewChild('btnCheckAll')
  btnCheckAll: ElementRef;

  constructor(private renderer: Renderer) { }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('items')) || [];
    console.log({items: this.items});
  }

  clearItem() {
    this.items.splice(0, this.items.length);
    console.log(this.items);
    //populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(this.items));
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
    console.log(this.items);
    // TODO: update item list child component
//    populateList(items, itemsList);
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
    const item = {
      text: this.text,
      done: false
    };
    this.items.push(item);
    console.log(this.items);
    // TODO: notify item list to update later
    //populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(this.items));
    this.text = '';
  }

}
