import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request/request.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {
  //TODO: estas variables deben tener sus respectivos modelos
  artist;
  tracks;
  constructor(private requestService: RequestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const artistId = this.activatedRoute.snapshot.paramMap.get('id');
    //TODO: any no debería usarse como modelo
    this.requestService.getArtist(artistId).subscribe((data: any) => {
      console.log(data);
      this.artist = data;
    });
    //TODO: any no debería usarse como modelo
    this.requestService.getAlbumsbyArtist(artistId).subscribe((data: any) => {
      console.log(data);
      this.tracks = data.tracks;
    });

  }
}
