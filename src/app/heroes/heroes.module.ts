import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { CommonModule } from '@angular/common';
import { EditHeroComponent } from './pages/edit-hero/edit-hero.component';
import { FindHeroComponent } from './pages/find-hero/find-hero.component';
import { FormsModule } from '@angular/forms';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HomeHeroComponent } from './pages/home-hero/home-hero.component';
import { ImagePipe } from './pipes/image.pipe';
import { ListHeroComponent } from './pages/list-hero/list-hero.component';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddHeroComponent,
    FindHeroComponent,
    HeroComponent,
    HomeHeroComponent,
    ListHeroComponent,
    EditHeroComponent,
    HeroCardComponent,
    ImagePipe,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ]
})
export class HeroesModule { }
