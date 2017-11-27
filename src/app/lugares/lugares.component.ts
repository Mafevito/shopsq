import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
  // // Animaciones en angular
  // animations: [
  //   trigger('contenedorAnimable', [
  //     state('inicial', style({
  //       opacity: 0,
  //       backgroundColor: 'green',
  //       transform: 'rotate3d(0,0,0,0deg)',
  //     })),
  //     state('final', style({
  //       opacity: 1,
  //       backgroundColor: 'purple',
  //       transform: 'rotate3d(5,10,20,30deg)',
  //     })),
  //     transition('inicial => final', animate(2000) ),
  //     transition('final => inicial', animate(1000) ),
  //   ])
  // ]
})

export class LugaresComponent {
  state = 'inicial';

  lat: number = 40.4378693;
  lng: number = -3.8199654;
  lugares = null;
  animar() {
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }

  animacionInicio(e) {
    console.log(e);
  }

  animacionTermina(e) {
    console.log('terminado');
    console.log(e);
  }

// Para acceder a los lugares desde services
constructor( private lugaresService: LugaresService) {
  lugaresService.getLugares()
     .subscribe(lugares => {
       this.lugares = lugares;
       var me = this;
      //  Convirtiendo un objeto en un array
         me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares[key]; })
         this.state = 'final';
         }, error => {
           console.log(error);
           alert('Tenemos algunos problemas. Error' + error.statusText);
         });
     };
  }
