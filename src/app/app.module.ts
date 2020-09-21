import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Err404Component } from './complements/err404/err404.component';
import { HomeComponent } from './Modules/home/home.component';
import { LoaderComponent } from './complements/loader/loader.component';
import { MusicaComponent } from './Modules/musica/musica.component';
import { HeaderComponent } from './Modules/header/header.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    Err404Component,
    HomeComponent,
    LoaderComponent,
    MusicaComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
