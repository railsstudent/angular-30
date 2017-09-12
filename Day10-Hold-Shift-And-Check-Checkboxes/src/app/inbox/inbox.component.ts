import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CheckboxClickState } from '../checkbox-click-state';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  items = [];
  lastChecked: ItemComponent = null;
  
  @ViewChildren('#appItem')
  appItems: QueryList<ItemComponent>;
  
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
  
  handleClicked(checkboxClickState: CheckboxClickState) {
    console.log(checkboxClickState);
    
        if (checkboxClickState.shiftKey && checkboxClickState.checked) {
          // check the items in between
          // loop over every checkbox element
          let inBetween = false;
          this.appItems.forEach(appItem => {
              if (appItem == checkboxClickState.selected || appItem == this.lastChecked) {
                inBetween = !inBetween;
              }
              if (inBetween) {
                appItem.selectCheckbox(true);
              }
          });
        }

        this.lastChecked = checkboxClickState.selected;
  }
  
}
