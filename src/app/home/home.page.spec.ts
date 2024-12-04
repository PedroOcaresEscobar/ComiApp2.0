import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
<<<<<<< HEAD
=======
import { obtenerNovedades } from '../mock';
>>>>>>> NuevaRama

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(() => {
<<<<<<< HEAD
=======
    TestBed.configureTestingModule({
      declarations: [HomePage]
    }).compileComponents();

>>>>>>> NuevaRama
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

<<<<<<< HEAD
  it('should create', () => {
    expect(component).toBeTruthy();
=======
  it('debería cargar más elementos en la matriz de novedades', () => {

    component.loadMoreItems();

    expect(component.novedades.length).toBeGreaterThan(0);
    expect(component.novedades[0]).toEqual(jasmine.objectContaining({
      id: 1,
      titulo: jasmine.any(String),
      img: jasmine.any(String),
      descripcion: jasmine.any(String)
    }));
>>>>>>> NuevaRama
  });
});
