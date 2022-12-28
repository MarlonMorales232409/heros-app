import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHeroComponent } from './pages/list-hero/list-hero.component';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { EditHeroComponent } from './pages/edit-hero/edit-hero.component';
import { FindHeroComponent } from './pages/find-hero/find-hero.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeHeroComponent } from './pages/home-hero/home-hero.component';

const routes: Routes = [
    {
        path: '',
        component: HomeHeroComponent,
        children: [
            {
                path: 'list',
                component: ListHeroComponent
            },
            {
                path: 'add',
                component: AddHeroComponent
            },
            {
                path: 'edit',
                component: EditHeroComponent
            },
            {
                path: 'find',
                component: FindHeroComponent
            },
            {
                path: ':id',
                component: HeroComponent
            },
            {
                path: '**',
                redirectTo: 'list'
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class HeroesRoutingModule {

}