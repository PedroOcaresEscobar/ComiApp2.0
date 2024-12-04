<<<<<<< HEAD
import { TestBed } from '@angular/core/testing';

=======
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
>>>>>>> NuevaRama
import { RecipeService } from './recipe.service';

describe('RecipeService', () => {
  let service: RecipeService;

  beforeEach(() => {
<<<<<<< HEAD
    TestBed.configureTestingModule({});
=======
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecipeService], 
    });
>>>>>>> NuevaRama
    service = TestBed.inject(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
