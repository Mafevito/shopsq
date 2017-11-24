import { Injectable } from '@angular/core';

@Injectable()
export class LugaresService {
  lugares:any = [
    {id: 1, plan:'gratuito', cercania: 1, distancia:1, active: true, nombre: 'Cachorros Lulu', description: 'description de esto'},
    {id: 2, plan:'pagado', cercania: 2, distancia:1.2, active: false, nombre: 'Floristeria Lulu', description: 'description de esto'},
    {id: 3, plan:'pagado', cercania: 3, distancia:1.5, active: true, nombre: 'Supermercado', description: 'description de esto'},
    {id: 4, plan:'gratuito', cercania: 1, distancia:12, active: false, nombre: 'TodoOfertas', description: 'description de esto'}
  ];

  public getLugares(){
    return this.lugares;
  }

  public buscarLugar(id) {
    return this.lugares.filter((lugar) => {return lugar.id == id}) [0] || null;
  }

}
