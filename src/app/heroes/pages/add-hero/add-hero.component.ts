import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interface';

import { HeroesService } from '../../heroes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styles: [
    `.container {
      display: flex;
    },
     .form {
      display: flex;
      flex-direction: column;
     } 
    `
  ]
})
export class AddHeroComponent implements OnInit{



  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  hero: Hero = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_image: ''
  }


  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    ){}

  ngOnInit(): void {

    if(!this.router.url.includes('edit')) return

      this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.heroService.getHeroById(id))
      )
      .subscribe( (hero)=> this.hero = hero )
  }

  saveNewHero(){
    
    if(!this.hero.superhero) return

    if(!this.hero.alt_image && !this.hero.id){
      this.hero.alt_image = 'assets/no-image.png'
    }

    if(this.hero.id){

      this.heroService.updateHero(this.hero)
      .subscribe( hero => {
        this.showSnackbar('Hero updated correctly')
        this.router.navigate(['/heroes', hero.id])
        }
      )

    }else {
      
      this.heroService.addNewHero(this.hero)
      .subscribe(hero => {
        this.router.navigate(['/heroes', hero.id])
          this.showSnackbar('New Hero added')
        }
      )

    }

  }

  deleteHero(){
    this.heroService.deleteHero(this.hero.id!)
    .subscribe( ()=> this.router.navigate(['/heroes/']))
  }

  showSnackbar( message: string){
    this.snackbar.open(message, 'ok!', {
      duration: 2500,
    })
  }

}
