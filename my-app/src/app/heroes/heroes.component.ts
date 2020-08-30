import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hereos: Hero[]; // mock data
  selectedHero: Hero;
  constructor(
    private heroService: HeroService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    // if click twice, remove from selected
    if (this.selectedHero === hero) {
      this.selectedHero = null;
      this.messageService.add(`HeroesComponent: Unselected hero id=${hero.id}`);
    } else {
      this.selectedHero = hero;
      this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    }
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.hereos = heroes);
  }
}
