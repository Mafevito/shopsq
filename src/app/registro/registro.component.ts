import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component ({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})

export class RegistroComponent {
  registro:any = {};
    constructor(private authService: AuthService){
  }
  
  registrar() {
    this.authService.registro(this.registro.email, this.registro.password);
  }

}
