import { Component, OnInit } from '@angular/core';
import { MapBoxService } from '../services/map-box.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comi-maps',
  templateUrl: './comi-maps.page.html',
  styleUrls: ['./comi-maps.page.scss'],
})
export class ComiMapsPage implements OnInit {

  constructor(private mapa: MapBoxService, private router: Router) { }

  ngOnInit() {
    this.mapa.permisosMapa();
  }

  logout() {
    localStorage.clear();

    this.router.navigate(['/']);
  }
}
