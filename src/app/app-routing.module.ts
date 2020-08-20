import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Modules/home/home.component';
import {Err404Component} from './complements/err404/err404.component';
import {LoaderComponent} from './complements/loader/loader.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'loader', component: LoaderComponent},
  {path: '**', component: Err404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
