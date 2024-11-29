import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecipeService } from '../service/recipe.service';
import { RecipeDetailsPage } from '../recipe-details/recipe-details.page';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {
  recipes: any[] = []; // Recetas cargadas
  filteredRecipes: any[] = []; // Recetas filtradas por búsqueda

  constructor(
    private recipeService: RecipeService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    // Cargar recetas iniciales (puedes cambiarlo según tu preferencia)
    this.recipeService.searchRecipes('chicken').subscribe((data: any) => {
      this.recipes = data.results;
      this.filteredRecipes = [...this.recipes]; // Copiar recetas a la lista filtrada
    });
  }

  // Filtrar recetas en base a la búsqueda
  onSearch(event: any) {
    const query = event.target.value?.toLowerCase();
    if (query && query.trim() !== '') {
      this.filteredRecipes = this.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(query)
      );
    } else {
      this.filteredRecipes = [...this.recipes];
    }
  }

  // Abrir modal con los detalles de la receta
  async openRecipeDetails(recipeId: number) {
    const modal = await this.modalController.create({
      component: RecipeDetailsPage, // Página del modal
      componentProps: { recipeId }, // Pasar el ID de la receta al modal
    });
    await modal.present();
  }
}
