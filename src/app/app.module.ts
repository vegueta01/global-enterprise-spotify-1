import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanzamientosComponent } from './pages/lanzamientos/lanzamientos.component';
import { ArtistaComponent } from './pages/artista/artista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './services/request/request.service';
import { ListaArtistasComponent } from './pages/lista-artistas/lista-artistas.component';


@NgModule({
  declarations: [
    AppComponent,
    LanzamientosComponent,
    ArtistaComponent,
    ListaArtistasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // MaterialModule,
    HttpClientModule,
  ],
  providers: [
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
