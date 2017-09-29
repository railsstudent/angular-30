import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  numbers: number[];
  isDown: boolean = false;
  startX: number;
  scrollLeft: number;

  @ViewChild('items')
  slider: ElementRef;

  constructor(private renderer: Renderer) { }

  ngOnInit() {
    const numbers = Array(30).fill(1);
    this.numbers = numbers.map((n, i) => i + 1);
    console.log(this.numbers);
  }

  onMouseDown($event) {
    console.log('onMouseDown fired');
    const {pageX} = $event;
    this.isDown = true;
    this.renderer.setElementClass(this.slider.nativeElement, 'active', true);
    this.startX = pageX - this.slider.nativeElement.offsetLeft;
    this.scrollLeft = this.slider.nativeElement.scrollLeft;
  }

  onMouseLeave() {
    console.log('onMouseLeave fired');

    this.isDown = false;
    this.renderer.setElementClass(this.slider.nativeElement, 'active', false);
  }

  onMouseMove($event) {
    const {pageX, target} = $event;
    if (!this.isDown) {
      return;
    }
    console.log('onMouseMove fired');

    $event.preventDefault();
    const x = pageX - this.slider.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3; // how far we deviate from the initial point
    console.log(walk);
    this.renderer.setElementProperty(this.slider.nativeElement, 'scrollLeft', this.scrollLeft - walk);
  }
}
