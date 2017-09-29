import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  numbers: number[];

  constructor() { }

  ngOnInit() {
    const numbers = Array(25).fill(1);
    this.numbers = numbers.map((n, i) => i + 1);
    console.log(this.numbers);
  }

}
