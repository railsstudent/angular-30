import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ItemService } from '../item/item.service';
import { Item, CheckboxClickState } from '../item/item';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  items: Item[] = [];
  lastChecked: ItemComponent = null;
  
  @ViewChildren('appItem')
  appItems: QueryList<ItemComponent>;
  
  constructor(private itemService: ItemService) { }
  
  ngOnInit() {
      this.itemService.getItems()
      .subscribe(items => this.items = items);
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
