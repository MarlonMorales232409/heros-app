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
}
