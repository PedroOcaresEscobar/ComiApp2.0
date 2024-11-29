import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private baseUrl = 'https://api.spoonacular.com/recipes';

  constructor(private http: HttpClient) {}

  // Buscar recetas según una palabra clave
  searchRecipes(query: string) {
    const url = `${this.baseUrl}/complexSearch?query=${query}&apiKey=${environment.spoonacularApiKey}&number=10`;
    return this.http.get(url);
  }

  // Obtener detalles de una receta específica por ID
  getRecipeDetails(recipeId: number) {
    const url = `${this.baseUrl}/${recipeId}/information?apiKey=${environment.spoonacularApiKey}`;
    return this.http.get(url);
  }
}
