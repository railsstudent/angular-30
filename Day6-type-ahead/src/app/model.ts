export class Suggestion {

  city: string;
  state: string;
  population: string;
}

export class HighlightedSuggestion extends Suggestion {
  highlightCityState: string;  
}

export class City {
  city: string;
  growth_from_2000_to_2013: string;
  latitude: number;
  longitude: number;
  population: string;
  rank: string;
  state: string;
}
