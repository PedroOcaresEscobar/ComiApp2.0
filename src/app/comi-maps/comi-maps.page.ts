import { Component, OnInit } from '@angular/core';
import { MapBoxService } from '../services/map-box.service';

@Component({
  selector: 'app-comi-maps',
  templateUrl: './comi-maps.page.html',
  styleUrls: ['./comi-maps.page.scss'],
})
export class ComiMapsPage implements OnInit {

  constructor(private mapa : MapBoxService) { }

  ngOnInit() {
    this.mapa.permisosMapa();
  }  


}
