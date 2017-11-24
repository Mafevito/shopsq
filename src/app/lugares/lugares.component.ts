import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'shopsq';
  lugares:any = [
    {plan:'gratuito', cercania: 1, distancia:1, active: true, nombre: 'Cachorros Lulu'},
    {plan:'pagado', cercania: 2, distancia:1.2, active: false, nombre: 'Floristeria Lulu'},
    {plan:'pagado', cercania: 3, distancia:1.5, active: true, nombre: 'Supermercado'},
    {plan:'gratuito', cercania: 1, distancia:12, active: false, nombre: 'TodoOfertas'}
  ];

  lat: number = 4.6560553;
  lng: number = -74.0595918;

  constructor() { }
}
