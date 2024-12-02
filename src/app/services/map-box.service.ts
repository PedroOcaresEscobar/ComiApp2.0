import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as mapboxgl from 'mapbox-gl';
@Injectable({
  providedIn: 'root'
})
export class MapBoxService {
  private accessToken = environment.mapbox.accessToken
  map!: mapboxgl.Map;
  constructor() {
  
    } 
    
    permisosMapa(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {this.iniciarMap(pos.coords.latitude,pos.coords.longitude)});
      }
      (mapboxgl as any).accessToken= this.accessToken   
    }


  iniciarMap(lat:number,lon:number){

  
    this.map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v12', 
    center: [lon, lat], 
    zoom: 14, 
    });
  
    const marcadorUsuario = document.createElement('div')
    marcadorUsuario.classList.add('iconoUsuario')
  
  
    const marker = new mapboxgl.Marker(marcadorUsuario)
    .setLngLat([lon, lat])
    .addTo(this.map);


    this.obtenerrestaurantes(lat,lon)
  }

  async obtenerrestaurantes(lat:number,lon:number){
    const accessToken = this.accessToken;
    const url=  `https://api.mapbox.com/geocoding/v5/mapbox.places/restaurant.json?proximity=${lon},${lat}&access_token=${accessToken}`;
  
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    data.features.forEach((feature:any) => {
  
      const restaurantLngLat = feature.geometry.coordinates;
      const nombreRestaurant = feature.place_name;
  
      new mapboxgl.Marker()
      .setLngLat(restaurantLngLat)
      .setPopup(new mapboxgl.Popup().setHTML(`<h3>${nombreRestaurant}</h3>`))
      .addTo(this.map);
  
    })
  
  }
  



}
