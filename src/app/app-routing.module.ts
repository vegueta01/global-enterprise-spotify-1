import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanzamientosComponent } from './pages/lanzamientos/lanzamientos.component';
import { ArtistaComponent } from './pages/artista/artista.component';
import { ListaArtistasComponent } from './pages/lista-artistas/lista-artistas.component';


const routes: Routes = [
  { path: 'lanzamientos', component: LanzamientosComponent },
  { path: 'artista', component: ListaArtistasComponent },
  { path: 'artista/:id', component: ArtistaComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
