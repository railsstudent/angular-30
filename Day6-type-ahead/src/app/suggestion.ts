export class Suggestion {

  city: string;
  state: string;
  population: string;
}

export class HighlightedSuggestion extends Suggestion {
  highlight: string;  
}
