import { AuthServiceService } from '../../services/auth-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthServiceService
    ){}

  login(){
    this.authService.login()
    .subscribe(resp => {

      if(resp.id){
        this.router.navigate(['/heroes/list'])
      }
      
    })

  }

}
