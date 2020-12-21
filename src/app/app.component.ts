import { Component } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router } from "@angular/router";
import { Link } from './link/link.model';
import { UsuarioService } from './usuario.service'
import { usuario } from './usuario.model'
//import { link } from 'fs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vote-app';
  user: SocialUser = new SocialUser;
  links: Link[];
  usuarios:any = null;
  usuario = {
    idUsuario: 0,
    nombre: '',
    email: '',
    password: '',
    tipo:'usuario'
  }
  constructor(private authService: SocialAuthService,private router:Router,private usuariosServicio: UsuarioService) 
  {
    this.links = [
      new Link('angular', 'http://angular.io', 10),
      new Link('google', 'http://google.com', 100),
      new Link('youtube', 'http://youtube.com', 1000)
    ];
  }
  addLink(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.links.push(new Link(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedLinks() {
    return this.links.sort((a: Link, b: Link) => b.votes - a.votes);
  }
  signInWithGoogle(): void {
    
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      
      this.user = userData;
      this.usuario.nombre = this.user.name;
      this.usuario.email = this.user.email;
      this.usuario.password = this.user.name;
      this.usuario.tipo = 'usuario';
      this.altaUsuario();
      this.router.navigate(['/link']);
      
    });
  }

  signInWithFB(): void {
    
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      
      this.user = userData;
      this.usuario.nombre = this.user.name;
      this.usuario.email = this.user.email;
      this.usuario.password = this.user.name;
      this.usuario.tipo = 'usuario';
      this.altaUsuario();
      this.router.navigate(['/link']);
    });
  }
  obtenerUsuarios() {
    this.usuariosServicio.obtenerUsuario().subscribe(
      result => this.usuarios = result
    );
  }

  altaUsuario() {
    this.usuariosServicio.guardarUsuario(this.usuarios).subscribe(
      datos => {
          this.obtenerUsuarios();
      }
    );
  }

  bajaUsuario(idUsuario: any) {
    this.usuariosServicio.eliminarUsuario(idUsuario).subscribe(
      datos => {
          this.obtenerUsuarios();
      }
    );
  }

  editarUsuario() {
    this.usuariosServicio.editarUsuario(this.usuario).subscribe(
      datos => {
          this.obtenerUsuarios();
      }
    );
  }
  signOut(): void {
    this.authService.signOut();
  }
}
