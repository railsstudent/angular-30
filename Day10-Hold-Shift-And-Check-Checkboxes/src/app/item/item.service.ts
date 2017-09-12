import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Item } from './item';


@Injectable()
export class ItemService {

  constructor() { }
  
  getItems(): Observable<Item[]> {
    const items = 
          [{
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
    return Observable.of<Item[]>(items);
  }
}
