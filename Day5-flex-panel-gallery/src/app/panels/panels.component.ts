import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements OnInit {
  panelData = [];

  ngOnInit() {
    this.panelData = [
      ['Hey', 'Let\'s', 'Dance'],
      ['Give', 'Take', 'Receive'],
      ['Experience', 'It', 'Today'],
      ['Give', 'All', 'You can'],
      ['Life', 'In', 'Motion']
    ]
  }
}
