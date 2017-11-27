import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component ({
  selector: 'app-login',
  templateUrl: './login.component.html'

})

export class LoginComponent {
  loginParams:any = {};
  constructor(private authService: AuthService){
  }

  login() {
    this.authService.login(this.loginParams.email, this.loginParams.password);
  }

  facebookLogin(){
    this.authService.facebookLogin();
  }
}
