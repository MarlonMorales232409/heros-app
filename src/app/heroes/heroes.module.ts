import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { FindHeroComponent } from './pages/find-hero/find-hero.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeHeroComponent } from './pages/home-hero/home-hero.component';
import { ListHeroComponent } from './pages/list-hero/list-hero.component';
import { EditHeroComponent } from './pages/edit-hero/edit-hero.component';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [
    AddHeroComponent,
    FindHeroComponent,
    HeroComponent,
    HomeHeroComponent,
    ListHeroComponent,
    EditHeroComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
