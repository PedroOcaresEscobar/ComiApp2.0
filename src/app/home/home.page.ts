import { Component } from '@angular/core';
import { obtenerNovedades } from '../mock';
<<<<<<< HEAD
import { InfiniteScrollCustomEvent } from '@ionic/angular';
=======
>>>>>>> NuevaRama

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  novedades: any[] = [];

  constructor() {
    this.loadMoreItems();
  }

  loadMoreItems() {
    const newItems = obtenerNovedades();
    this.novedades = this.novedades.concat(newItems);
  }

}