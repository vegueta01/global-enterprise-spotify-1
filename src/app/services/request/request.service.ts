import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Enums } from 'src/app/models/enums';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private urlReleases = 'https://api.spotify.com/v1/browse/new-releases?country=CO';
  private urlArtistsList = 'https://api.spotify.com/v1/artists?ids=6M2wZ9GZgrQXHCFfjv46we%2C0EmeFodog0BfCgMzAIvKQp%2C1i8SpTcr7yvPOmcqrbnVXY%2C4VMYDCV2IEDYJArk749S6m%2C1GDbiv3spRmZ1XdM1jQbT7%2C7FNnA9vBm6EKceENgCGRMb%2C1pQWsZQehhS4wavwh7Fnxd%2C0KPX4Ucy9dk82uj4GpKesn%2C1yxSLGMDHlW21z4YXirZDS%2C2R21vXR83lH98kGeO99Y66%2C7iK8PXO48WeuP03g8YR51W%2C4q3ewBCX7sLwd24euuV69X%2C329e4yvIujISKGKz1BZZbO%2C1mcTU81TzQhprhouKaTkpq%2C1vyhD5VmyZ7KMfW5gqLgo5%2C3fZk3Gm5dN5v5yfYMQ04Bx%2C2LmcxBak1alK1bf7d1beTr%2C37230BxxYs9ksS7OkZw3IU%2C1pQWsZQehhS4wavwh7Fnxd%2C0KPX4Ucy9dk82uj4GpKesn%2C790FomKkXshlbRYZFtlgla%2C2NjfBq1NflQcKSeiDooVjY';
  private artist = 'https://api.spotify.com/v1/artists/';
  private options = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem(Enums.access_token)

    })
  }
  constructor(private http: HttpClient) { }
  getReleases() {
    return this.http.get(this.urlReleases, this.options);
  }

  getArtistsList() {
    return this.http.get(this.urlArtistsList, this.options);
  }
  getArtist(artistId: string) {
    //TODO: usar string ES5
    return this.http.get(this.artist + artistId, this.options);
  }
  getAlbumsbyArtist(artistId: string) {
    //TODO: usar string ES5
    return this.http.get(this.artist + artistId + '/top-tracks?country=CO', this.options);
  }
}
