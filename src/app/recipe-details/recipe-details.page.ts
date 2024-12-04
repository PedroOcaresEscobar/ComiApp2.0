import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular'; 
import { RecipeService } from '../service/recipe.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  recipeDetails: any;  
  loading: boolean = true;  

  constructor(
    private recipeService: RecipeService,
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    const recipeId = this.navParams.get('recipeId');  
    this.loadRecipeDetails(recipeId);
  }

  loadRecipeDetails(recipeId: number) {
    this.recipeService.getRecipeDetails(recipeId).subscribe(
      (data: any) => {
        this.recipeDetails = data; 
        setTimeout(() => {
          this.loading = false; 
        }, 1500);
      },
      (error) => {
        console.error('Error cargando los detalles de la receta', error);
        this.loading = false; 
      }
    );
  }


  closeModal() {
    this.modalController.dismiss();
  }
}
