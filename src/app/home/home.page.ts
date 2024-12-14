import { Component } from '@angular/core';
import { obtenerNovedades } from '../mock';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  novedades: any[] = [];

  constructor(private router: Router) {
    this.loadMoreItems();
  }

  loadMoreItems() {
    const newItems = obtenerNovedades();
    this.novedades = this.novedades.concat(newItems);
  }
  logout() {
    // Limpia los datos del usuario (localStorage o cualquier otra lógica que tengas)
    localStorage.clear(); 

    // Redirecciona a la página de inicio de sesión
    this.router.navigate(['/']);
  }

}