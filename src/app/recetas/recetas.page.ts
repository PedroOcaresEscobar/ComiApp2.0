import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecipeService } from '../service/recipe.service';
import { RecipeDetailsPage } from '../recipe-details/recipe-details.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {
  recipes: any[] = []; // Recetas cargadas
  filteredRecipes: any[] = []; // Recetas filtradas por búsqueda
  searchQuery: string = ''; // Consulta de búsqueda
  loading: boolean = false; // Estado de carga
  offset: number = 0; // Offset para paginación

  constructor(
    private recipeService: RecipeService,
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadRecipes(); // Cargar recetas iniciales
  }

  // Cargar recetas con paginación
  loadRecipes() {
    if (this.loading) return; // Evitar nuevas solicitudes si ya se está cargando
    this.loading = true;

    // Cargar recetas según la consulta de búsqueda y el offset
    this.recipeService.searchRecipes(this.searchQuery, this.offset).subscribe((data: any) => {
      // Simular un retraso para la barra de carga
      setTimeout(() => {
        this.recipes = [...this.recipes, ...data.results]; // Agregar nuevas recetas
        this.filteredRecipes = [...this.recipes]; // Copiar recetas a la lista filtrada
        this.offset += 10; // Incrementar offset para la próxima carga
        this.loading = false; // Desactivar estado de carga
      }, 1000); // Retraso de 1 segundo para simular carga
    });
  }

  // Filtrar recetas en base a la búsqueda
  onSearch(event: any) {
    this.searchQuery = event.target.value?.toLowerCase();
    this.offset = 0; // Reiniciar el offset para nueva búsqueda
    this.recipes = []; // Limpiar recetas cargadas
    this.loadRecipes(); // Recargar recetas
  }

  // Abrir modal con los detalles de la receta
  async openRecipeDetails(recipeId: number) {
    const modal = await this.modalController.create({
      component: RecipeDetailsPage, // Página del modal
      componentProps: { recipeId }, // Pasar el ID de la receta al modal
    });
    await modal.present();
  }

  // Cargar más recetas al hacer scroll infinito
  loadData(event: any) {
    this.loadRecipes(); // Cargar más recetas

    // Simular un retraso para la barra de carga
    setTimeout(() => {
      event.target.complete(); // Finalizar el evento de scroll infinito
    }, 1000); // Retraso de 1 segundo para mostrar la barra de carga
  }

  logout() {
    // Limpia los datos del usuario (localStorage o cualquier otra lógica que tengas)
    localStorage.clear(); 

    // Redirecciona a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}
