import { Component } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router } from "@angular/router";
import { Link } from './link/link.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vote-app';
  user: SocialUser = new SocialUser;
  links: Link[];
  constructor(private authService: SocialAuthService,private router:Router) 
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
      this.router.navigate(['link'])
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
      this.router.navigate(['link'])
    });
  }

  signOut(): void {
    this.authService.signOut();
  }
}
