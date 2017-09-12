import { ItemComponent } from './item.component';

export interface Item {
  description: string;
}

export interface CheckboxClickState {
  shiftKey: boolean;
  checked: boolean;
  selected: ItemComponent;
}
