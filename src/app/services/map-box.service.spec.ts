import { TestBed } from '@angular/core/testing';
import { MapBoxService } from './map-box.service';
import * as mapboxgl from 'mapbox-gl';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MapBoxService', () => {
  let service: MapBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MapBoxService],
    });
    service = TestBed.inject(MapBoxService);

    // Mock de navigator.geolocation
    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake((success) => {
      success({
        coords: { latitude: 10, longitude: 20 },
        timestamp: Date.now(),
      } as GeolocationPosition);
    });

    // Mock de fetch
    spyOn(window, 'fetch').and.resolveTo({
      json: async () => ({
        features: [
          {
            geometry: { coordinates: [-74.006, 40.7128] },
            place_name: 'Restaurante de prueba',
          },
        ],
      }),
    } as Response);

    // Mock de mapboxgl
    spyOn(mapboxgl, 'Map').and.returnValue({
      addControl: () => {},
      on: () => {},
    } as unknown as mapboxgl.Map);

    spyOn(mapboxgl, 'Marker').and.returnValue({
      setLngLat: () => ({
        addTo: () => {},
      }),
      setPopup: () => ({
        addTo: () => {},
      }),
    } as unknown as mapboxgl.Marker);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize the map with permisosMapa', () => {
    spyOn(service, 'iniciarMap');
    service.permisosMapa();
    expect(service.iniciarMap).toHaveBeenCalledWith(10, 20); // Mocked coordinates
  });

  it('should fetch restaurants', async () => {
    await service.obtenerrestaurantes(10, 20);
    expect(fetch).toHaveBeenCalledWith(
      jasmine.stringMatching(/geocoding.v5.mapbox.places\/restaurant.json/)
    );
  });
});
