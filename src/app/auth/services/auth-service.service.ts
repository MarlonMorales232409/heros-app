import { Observable, of, tap } from 'rxjs';

import { Auth } from '../interfaces/auth.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _user!: Auth
  
  get getUser(){
    return {...this._user}
  }

  constructor(private http: HttpClient) { }

  // checkUser():Observable<boolean>{
  //   let user = JSON.parse(localStorage.getItem('id') || '')
    
  //   if(!user) return of(false)

  //   return this.http.get<Auth>
  // }

  login(){
    return this.http.get<Auth>('http://localhost:3000/usuarios/1')
            .pipe(
              tap(resp => this._user = resp),
              tap((resp) => {
                localStorage.setItem('id', JSON.stringify(resp.id))
                }
              )
            )
  }
}
