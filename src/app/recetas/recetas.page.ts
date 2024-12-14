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
  recipes: any[] = []; 
  filteredRecipes: any[] = []; 
  searchQuery: string = ''; 
  loading: boolean = false; 
  offset: number = 0; 

  constructor(
    private recipeService: RecipeService,
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadRecipes(); 
  }


  loadRecipes() {
    if (this.loading) return; 
    this.loading = true;


    this.recipeService.searchRecipes(this.searchQuery, this.offset).subscribe((data: any) => {

      setTimeout(() => {
        this.recipes = [...this.recipes, ...data.results]; 
        this.filteredRecipes = [...this.recipes]; 
        this.offset += 10;
        this.loading = false;
      }, 1000); 
    });
  }


  onSearch(event: any) {
    this.searchQuery = event.target.value?.toLowerCase();
    this.offset = 0; 
    this.recipes = []; 
    this.loadRecipes(); 
  }


  async openRecipeDetails(recipeId: number) {
    const modal = await this.modalController.create({
      component: RecipeDetailsPage,
      componentProps: { recipeId },
    });
    await modal.present();
  }


  loadData(event: any) {
    this.loadRecipes(); 


    setTimeout(() => {
      event.target.complete(); 
    }, 1000); 
  }

  logout() {
    localStorage.clear(); 

    this.router.navigate(['/']);
  }
}
