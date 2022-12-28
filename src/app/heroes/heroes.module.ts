import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { FindHeroComponent } from './find-hero/find-hero.component';
import { HeroComponent } from './hero/hero.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { ListHeroComponent } from './list-hero/list-hero.component';



@NgModule({
  declarations: [
    AddHeroComponent,
    FindHeroComponent,
    HeroComponent,
    HomeHeroComponent,
    ListHeroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
