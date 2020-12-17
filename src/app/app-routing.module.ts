import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkComponent } from 'src/app/link/link.component';
import { AppComponent } from 'src/app/app.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'link', component: LinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
