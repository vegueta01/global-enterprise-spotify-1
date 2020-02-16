import { Component, Type } from '@angular/core';
import { Enums } from './models/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotify';
  logged = false;
  constructor() {
    //TODO: es preferible validar la expiración del token antes de hacer la siguiente validación
    if (this.getHashParams()[Enums.access_token]) {
      sessionStorage.setItem(Enums.access_token, this.getHashParams()[Enums.access_token]);
      this.logged = true;
    }
  }
  getHashParams(): { access_token: string, refresh_token: string } {
    var hashParams = { access_token: null, refresh_token: null };
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
}
