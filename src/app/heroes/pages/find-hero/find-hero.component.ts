import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-find-hero',
  templateUrl: './find-hero.component.html',
  styles: [
    `.form-container {
      padding: 15px 0;
      display: flex;
    }
    .input-container {
      flex: 1
    }
    `
  ]
})
export class FindHeroComponent implements OnInit{

  selectedHero!:  Hero | undefined
  heroes:         Hero[] = []
  terms:          string = ''

  constructor(private heroesService: HeroesService){}

  ngOnInit(): void {
  }

  searchingTerms(){
    if(this.terms.trim().length < 1) return
    this.heroesService.getSuggestion(this.terms.trim())
    .subscribe( heroes => this.heroes = heroes )
  }

  selectHero( event: MatAutocompleteSelectedEvent ){
    if(!event.option.value) {
      this.selectedHero = undefined
      return 
    }

    
    const hero: Hero = event.option.value
    this.terms = hero.superhero

    this.heroesService.getHeroById(hero.id!)
    .subscribe( hero => this.selectedHero = hero)
  }

}
