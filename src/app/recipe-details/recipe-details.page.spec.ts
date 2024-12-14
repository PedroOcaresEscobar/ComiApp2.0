import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeDetailsPage } from './recipe-details.page';
import { IonicModule, NavParams } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RecipeDetailsPage', () => {
  let component: RecipeDetailsPage;
  let fixture: ComponentFixture<RecipeDetailsPage>;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
