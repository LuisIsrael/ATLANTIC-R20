import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Modules/home/home.component';
import {Err404Component} from './complements/err404/err404.component';
import {LoaderComponent} from './complements/loader/loader.component';
import {MusicaComponent} from './Modules/musica/musica.component';
import {LoginComponent} from './login/login.component';
import {RegistrarseComponent} from './registrarse/registrarse.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'crear-cuenta', component: RegistrarseComponent},
  {path: 'musica', component: MusicaComponent},
  {path: 'loader', component: LoaderComponent},
  {path: '**', component: Err404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
