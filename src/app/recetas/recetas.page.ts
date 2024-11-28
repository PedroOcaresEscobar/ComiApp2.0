import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss']
})
export class RecetasPage {
  recipes: any[] = [];

  constructor(private recipeService: RecipeService) {}

  onSearch(event: any) {
    const query = event.target.value;

    if (query && query.trim() !== '') {
      this.recipeService.searchRecipes(query).subscribe((data: any) => {
        this.recipes = data.results; 
      });
    }
  }
}
