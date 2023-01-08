import { Auth } from '../../../auth/interfaces/auth.interface';
import { AuthServiceService } from '../../../auth/services/auth-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styles: [
    `.container {margin: 10px}`
  ]
})
export class HomeHeroComponent {

  get auth(){
    return this.authService.getUser
  }

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ){}


  logout(){
    this.router.navigate(['/auth/login'])
  }

}
