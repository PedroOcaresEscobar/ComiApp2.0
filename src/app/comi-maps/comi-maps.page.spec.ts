import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComiMapsPage } from './comi-maps.page';
import { MapBoxService } from '../services/map-box.service';


class MockMapBoxService {
  permisosMapa() {
    console.log('Mock permisosMapa called');
  }
}

describe('ComiMapsPage', () => {
  let component: ComiMapsPage;
  let fixture: ComponentFixture<ComiMapsPage>;
  let mapBoxService: MapBoxService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComiMapsPage],
      providers: [
        { provide: MapBoxService, useClass: MockMapBoxService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ComiMapsPage);
    component = fixture.componentInstance;
    mapBoxService = TestBed.inject(MapBoxService); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call permisosMapa on ngOnInit', () => {
    spyOn(mapBoxService, 'permisosMapa');
    component.ngOnInit();
    expect(mapBoxService.permisosMapa).toHaveBeenCalled();
  });
});
