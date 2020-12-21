import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL = "http://localhost/api/";
  constructor(private http: HttpClient) { }

  obtenerUsuario(){
    return this.http.get(`${this.URL}ObtenerUsuario.php`)
  }
  seleccionarUsuario(usuario: any){
    return this.http.get(`${this.URL}SeleccionarUsuario.php?idUsuario=${usuario}`)
  }
  eliminarUsuario(usuario: any){
    return this.http.get(`${this.URL}EliminarUsuario.php?idUsuario=${usuario}`)
  }
  guardarUsuario(usuario:any){
    return this.http.post(`${this.URL}GuardarUsuario.php`,JSON.stringify(usuario))
  }
  editarUsuario(usuario:any){
    return this.http.post(`${this.URL}EditarUsuario.php`,JSON.stringify(usuario))
  }
  Login(usuario:any){
    return this.http.post(`${this.URL}LoginUsuario.php`,JSON.stringify(usuario))
  }
}
