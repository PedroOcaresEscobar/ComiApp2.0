import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetasPage } from './recetas.page';
<<<<<<< HEAD
=======
import { RecipeDetailsPage } from '../recipe-details/recipe-details.page';
import { RecipeService } from '../service/recipe.service';
import { ModalController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
>>>>>>> NuevaRama

describe('RecetasPage', () => {
  let component: RecetasPage;
  let fixture: ComponentFixture<RecetasPage>;

<<<<<<< HEAD
  beforeEach(() => {
=======
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecetasPage],
      imports: [HttpClientTestingModule], // Agregar HttpClientTestingModule
      providers: [
        RecipeService, // Proveedor del servicio
        {
          provide: ModalController,
          useValue: jasmine.createSpyObj('ModalController', ['create']),
        },
      ],
    }).compileComponents();
  
>>>>>>> NuevaRama
    fixture = TestBed.createComponent(RecetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< HEAD
=======

  it('deberia crear un modal', async () => {
    const mockModal = { present: jasmine.createSpy('present') };
  
    component['modalController'].create = jasmine.createSpy('create').and.resolveTo(mockModal);
  
    const recipeId = 42; 
    await component.openRecipeDetails(recipeId);
  
    expect(component['modalController'].create).toHaveBeenCalledWith({
      component: RecipeDetailsPage,
      componentProps: { recipeId },
    });
  
    expect(mockModal.present).toHaveBeenCalled();
  });
  
  
>>>>>>> NuevaRama
});
