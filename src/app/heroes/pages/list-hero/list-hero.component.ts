import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../heroes.service';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styles: [
  ]
})
export class ListHeroComponent implements OnInit{

  heroes: Hero[] = []

  constructor( private heroService: HeroesService){ }

  ngOnInit(): void {
      this.heroService.getHeroes()
      .subscribe( heroes => this.heroes = heroes)
  }

}
