import { ItemComponent } from './item/item.component';

export interface CheckboxClickState {
  shiftKey: boolean;
  checked: boolean;
  selected: ItemComponent;
}
