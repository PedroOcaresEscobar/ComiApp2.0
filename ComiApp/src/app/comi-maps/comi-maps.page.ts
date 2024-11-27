import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-comi-maps',
  templateUrl: './comi-maps.page.html',
  styleUrls: ['./comi-maps.page.scss'],
})
export class ComiMapsPage implements OnInit {

  constructor() { }

  ngOnInit() {
	(mapboxgl as any).accessToken = environment.mapbox.accessToken;


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {this.iniciarMap(pos.coords.latitude,pos.coords.longitude)});
    } 
    
  


}  iniciarMap(lat:number,lon:number){
  // Create a new marker.

	const map = new mapboxgl.Map({
	container: 'map', 
	style: 'mapbox://styles/mapbox/streets-v12', 
	center: [lon, lat], 
	zoom: 14, 
  
  });
  const marker = new mapboxgl.Marker()
  .setLngLat([lon, lat])
  .addTo(map);



}
}
