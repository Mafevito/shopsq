import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LugaresService {
  API_ENDPOINT = 'https://shopsq-2c448.firebaseio.com';
  lugares:any = [
    {id: 1, plan:'gratuito', cercania: 1, distancia:1, active: true, nombre: 'Cachorros Lulu', description: 'description de esto'},
    {id: 2, plan:'pagado', cercania: 2, distancia:1.2, active: false, nombre: 'Floristeria Lulu', description: 'description de esto'},
    {id: 3, plan:'pagado', cercania: 3, distancia:1.5, active: true, nombre: 'Supermercado', description: 'description de esto'},
    {id: 4, plan:'gratuito', cercania: 1, distancia:12, active: false, nombre: 'TodoOfertas', description: 'description de esto'}
  ];

constructor(private afDB:AngularFireDatabase, private http: Http){}
// Obteniendo todos los lugares desde firebase
  public getLugares(){
    // return this.afDB.list('lugares/');
    return this.http.get(this.API_ENDPOINT+'/.json')
// El operador map nos permite darle formato a la respuesta que nos llega cuando usamos el operador get.
      .map((resultado)=> {
        const data = resultado.json().lugares;
        return data;
      })
  }

  public buscarLugar(id) {
    return this.lugares.filter((lugar) => {return lugar.id == id}) [0] || null;
  }

  public guardarLugar(lugar){
      // this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
      const headers = new Headers({"Content-Type": "application/json"});
      // Enviando datos tipo POST
      return this.http.post(this.API_ENDPOINT+'/lugares.json', lugar, {headers:headers});
  }

  public editarLugar(lugar){
      this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion) {
    //https://maps.google.com/maps/api/geocode/json?address=1600+Amphithea+Espa%C3%B1a,Madrid
    return this.http.get('https://maps.google.com/maps/api/geocode/json?address=' + direccion);
 }

 public getLugar(id){
   return this.afDB.object('lugares/'+id);
 }
}
