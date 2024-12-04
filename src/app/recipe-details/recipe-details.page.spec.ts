import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeDetailsPage } from './recipe-details.page';
<<<<<<< HEAD
=======
import { IonicModule, NavParams } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
>>>>>>> NuevaRama

describe('RecipeDetailsPage', () => {
  let component: RecipeDetailsPage;
  let fixture: ComponentFixture<RecipeDetailsPage>;

<<<<<<< HEAD
=======
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailsPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule 
      ],
      providers: [
        { provide: NavParams, useValue: { get: () => 'valor_mock' } }
      ]
    }).compileComponents();
  });

>>>>>>> NuevaRama
  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
