import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  items = [];

  constructor() { }

  ngOnInit() {
      this.items = [{
                description: 'This is an inbox layout.'
              },
              {
                description: 'Check one item'
              },
              { 
                description: 'Hold down your Shift key'
              },
              {
                description: 'Check a lower item'
              },
              {
                description: 'Everything inbetween should also be set to checked'
              },
              {
                description: 'Try do it with out any libraries'
              },
              {
                description: 'Just regular JavaScript'
              },
              {
                description: 'Good Luck!'
              },
              {
                description: 'Don\'t forget to tweet your result!'
              }
            ];
  }

}
