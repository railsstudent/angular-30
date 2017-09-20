import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ArticleService {

  bands: string[] = ['The Plot in You',
            'The Devil Wears Prada',
            'Pierce the Veil',
            'Norma Jean',
            'The Bled',
            'Say Anything',
            'The Midway State',
            'We Came as Romans',
            'Counterparts',
            'Oh, Sleeper',
            'A Skylit Drive',
            'Anywhere But Here',
            'An Old Dog'];

  constructor() {
  }

  getBands(): Observable<string[]> {
    return Observable.of<string[]>(this.bands);
  }

}
