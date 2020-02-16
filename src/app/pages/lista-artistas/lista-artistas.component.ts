import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request/request.service';

@Component({
  selector: 'app-lista-artistas',
  templateUrl: './lista-artistas.component.html',
  styleUrls: ['./lista-artistas.component.scss']
})
export class ListaArtistasComponent implements OnInit {
  artists: [] = [];
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getArtistsList().subscribe((data: any) => {
      console.log(data);
      this.artists = data.artists;
    });
  }

}