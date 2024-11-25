import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-comi-maps',
  templateUrl: './comi-maps.page.html',
  styleUrls: ['./comi-maps.page.scss'],
})
export class ComiMapsPage implements OnInit {

  constructor() { }

  ngOnInit() {
	(mapboxgl as any).accessToken = 'pk.eyJ1IjoibWF4aW1pbGlhbm9vcnRlZ2EzIiwiYSI6ImNtMnNjdTJvczFsYjcydnE5N3Y1NHc0OWcifQ.fDAKvE1d0T3M0zKU5UIVCg';
	const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: [-74.5, 40], // starting position [lng, lat]
	zoom: 9, // starting zoom
  });

}}
