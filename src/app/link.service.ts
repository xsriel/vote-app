import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  URL = "http://localhost/api/";
  constructor(private http: HttpClient) { }

  obtenerEncuesta(){
    return this.http.get(`${this.URL}ObtenerEncuesta.php`)
  }
  seleccionarEncuesta(encuesta: any){
    return this.http.get(`${this.URL}SeleccionaEncuesta.php?id=${encuesta}`)
  }
  eliminarEncuesta(encuesta: any){
    return this.http.get(`${this.URL}EliminarEncuesta.php?idUsuario=${encuesta}`)
  }
  guardarEncuesta(encuesta:any){
    return this.http.post(`${this.URL}GuardarEncuesta.php`,JSON.stringify(encuesta))
  }
  editarEncuesta(encuesta:any){
    return this.http.post(`${this.URL}EditarEncuesta.php`,JSON.stringify(encuesta))
  }
}
