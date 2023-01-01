import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../heroes.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.style.css'],
})
export class HeroComponent implements OnInit{

  hero!: Hero

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router,
  ){}

  ngOnInit(): void {
      this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroById(id)) )
      .subscribe( hero => this.hero = hero)
  }

  goBack(){
    this.router.navigate(['/heroes/list'])
  }
}
