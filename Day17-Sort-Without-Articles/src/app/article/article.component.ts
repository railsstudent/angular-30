import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  bands: string[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getBands().subscribe(bands => {
      this.bands = bands.sort((a,b) => {
        return this.strip(a) > this.strip(b) ? 1 : -1;
      });
    });
  }

  strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
  }
}
