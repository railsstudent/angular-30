import { Component, OnInit, Renderer, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, AfterViewInit {

  holeIds: number[]
  lastHole;
  timeUp: boolean;
  score: number;
  currentHighScore: number;
  holes: any[];

  constructor(private renderer: Renderer, private elService: ElementRef) {
  }

  ngOnInit() {
    this.holeIds = [1, 2, 3, 4, 5, 6];
    this.currentHighScore = parseInt(localStorage.highestScore) || 0;
    this.score = 0;
  }

  ngAfterViewInit() {
    this.holes = this.elService.nativeElement.querySelectorAll('.hole');
  }

  randomTime(max, min) {
    return Math.round(Math.random() * (max - min) + min);
  }

  randomHole() {
    const idx = Math.floor(Math.random() * this.holes.length);
    const hole = this.holes[idx];
    if (hole === this.lastHole) {
      console.log('That is the same hole');
      return this.randomHole();
    }
    this.lastHole = hole;
    return hole;
  }

  peep() {
    const time = this.randomTime(200, 1000);
    const hole = this.randomHole();
    if (hole) {
      this.renderer.setElementClass(hole, 'up', true);
      setTimeout(() => {
        this.renderer.setElementClass(hole, 'up', false);
        if (!this.timeUp) {
          this.peep();
        }
      }, time);
    }
  }

  updateHighScore() {
    this.currentHighScore = localStorage.highestScore || 0;
    if (this.score > this.currentHighScore) {
      this.currentHighScore = this.score;
      localStorage.highestScore = this.score;
    }
  }

  startGame() {
    this.timeUp = false;
    this.score = 0;
    this.peep();
    setTimeout(() => {
      this.timeUp = true;
      this.updateHighScore();
    }, 10000);
  }

  bonk({isTrusted, target}) {
    if (!isTrusted) {
      return; // Cheater
    }
    this.score++;
    this.renderer.setElementClass(target.parentNode, 'up', false);
  }
}
