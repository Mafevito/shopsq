import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loggedIn = false;
  loggedUser:any = null;
  constructor(private authService: AuthService) {
    this.authService.isLogged()
      .subscribe((result) => {
        if(result && result.uid){
          this.loggedIn = true;
          setTimeout(() => {
            // Traemos el correo de la persona logueada
            this.loggedUser = this.authService.getUser().currentUser.email;
            console.log(this.loggedUser);
          }, 500);
        } else {
          this.loggedIn = false;
        }
      }, (error) => {
        this.loggedIn = false;
      })
  }
  logout(){
    this.authService.logout();
  }
}
