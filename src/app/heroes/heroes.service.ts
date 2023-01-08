import { Hero } from './interfaces/heroes.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: Hero[] = []

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>('http://localhost:3000/heroes')
  }

  getHeroById( id:string ): Observable<Hero>{
    return this.http.get<Hero>(`http://localhost:3000/heroes/${id}`)
  }
  
  getSuggestion( term: string ): Observable<Hero[]>{
    return this.http.get<Hero[]>(`http://localhost:3000/heroes/?q=${term}&limit=6`)
  }

  addNewHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>('http://localhost:3000/heroes', hero)
  }

  updateHero(hero: Hero): Observable<Hero>{
    return this.http.put<Hero>(`http://localhost:3000/heroes/${hero.id}`, hero)
  }

  deleteHero(id: string): Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/heroes/${id}`)
  }
}
