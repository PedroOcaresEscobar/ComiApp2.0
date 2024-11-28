import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'https://api.spoonacular.com/recipes';

  constructor(private http: HttpClient) {}

  searchRecipes(query: string) {
    const url = `${this.baseUrl}/complexSearch?query=${query}&apiKey=${environment.spoonacularApiKey}`;
    return this.http.get(url);
  }
}
