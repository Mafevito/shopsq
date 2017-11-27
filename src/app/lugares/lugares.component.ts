import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})

export class LugaresComponent {
  lat: number = 40.4378693;
  lng: number = -3.8199654;
  lugares = null;

// Para acceder a los lugares desde services
constructor( private lugaresService: LugaresService) {
  lugaresService.getLugares()
     .subscribe(lugares => {
       this.lugares = lugares;
       var me = this;
      //  Convirtiendo un objeto en un array
         me.lugares = Object.keys(me.lugares).map(function (key) {
           return me.lugares[key];
         }, error => {
           console.log(error);
           alert('Tenemos algunos problemas. Error' + error.statusText);
         });
     });
   }
}
