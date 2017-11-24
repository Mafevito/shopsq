import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  lat: number = 4.6560553;
  lng: number = -74.0595918;
  lugares = null;

// Para acceder a los lugares desde services
  constructor(LugaresService: LugaresService) {
    this.lugares = LugaresService.getLugares();
   }
}
