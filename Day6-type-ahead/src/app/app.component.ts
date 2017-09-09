import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {Suggestion,HighlightedSuggestion} from './suggestion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Type Ahead';
  cities = [
    {
      city: "New York",
      growth_from_2000_to_2013: "4.8%",
      latitude: 40.7127837,
      longitude: -74.0059413,
      population: "8405837",
      rank: "1",
      state: "New York"
    },
    {
      city: "Los Angeles",
      growth_from_2000_to_2013: "4.8%",
      latitude: 34.0522342,
      longitude: -118.2436849,
      population: "3884307",
      rank: "2",
      state: "California"
    },
    {
      city: "Chicago",
      growth_from_2000_to_2013: "-6.1%",
      latitude: 41.8781136,
      longitude: -87.6297982,
      population: "2718782",
      rank: "3",
      state: "Illinois"
    }
  ];
  showHint = true;
  suggestions: Observable<Suggestion[]>;
  private searchTerms = new Subject<string>();
  
  constructor(titleService: Title) {
    titleService.setTitle(this.title);
  }
  
  ngOnInit() {
        this.suggestions = this.searchTerms
                            .debounceTime(300)
                            .distinctUntilChanged()
                            .switchMap(term => { 
                              console.log(term);
                              this.showHint = false;
                              const highlightedPlaces = 
                                this.findMatches(term)
                                .map(place => {
                                  return this.highlightMatchedText(term, place);
                                });
                              return Observable.of<HighlightedSuggestion[]>(highlightedPlaces);
                            });
  }
  
  private highlightMatchedText(wordToMatch: string, place: Suggestion) : HighlightedSuggestion {
     const hlPlace = new HighlightedSuggestion();
     const regex = new RegExp(wordToMatch, 'gi');
     const cityName = place.city.replace(regex, `<span class='hl'>${wordToMatch}</span>`);
     const stateName = place.state.replace(regex, `<span class='hl'>${wordToMatch}</span>`);
     hlPlace.city = place.city;
     hlPlace.state = place.state;
     hlPlace.population = this.numberWithCommas(place.population);
     hlPlace.highlight = `${cityName}, ${stateName}`;
     return hlPlace;
  }
  
  private findMatches(wordToMatch: string) {
    return this.cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
      })
      .map(place => { 
        const s = new Suggestion();
        s.city = place.city;
        s.state = place.state;
        s.population = place.population;
        return s;
      });
  }

  private numberWithCommas(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  displayMatches($event) {
    // https://angular.io/tutorial/toh-pt6#!#observables
    this.searchTerms.next($event.target.value);
  }
}
