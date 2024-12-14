import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { obtenerNovedades } from '../mock';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería cargar más elementos en la matriz de novedades', () => {

    component.loadMoreItems();

    expect(component.novedades.length).toBeGreaterThan(0);
    expect(component.novedades[0]).toEqual(jasmine.objectContaining({
      id: 1,
      titulo: jasmine.any(String),
      img: jasmine.any(String),
      descripcion: jasmine.any(String)
    }));
  });
});
