import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request/request.service';

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styleUrls: ['./lanzamientos.component.scss']
})
export class LanzamientosComponent implements OnInit {
  albums: [] = [];
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getReleases().subscribe((data: any) => {
      console.log(data);
      this.albums = data.albums.items;
    });
  }

}
