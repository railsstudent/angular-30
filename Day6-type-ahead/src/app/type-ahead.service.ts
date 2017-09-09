import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {City} from './model';

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

@Injectable()
export class TypeAheadService {

  constructor(private http: Http) { }
  
  getCities(): Observable<City[]> {
    return this.http
            .get(endpoint)
            .map(response => response.json() as City[]);
  }
}
