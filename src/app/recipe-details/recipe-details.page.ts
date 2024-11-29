import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  @Input() recipeId!: number; // ID de la receta recibida del padre
  recipeDetails: any; // Detalles de la receta

  constructor(
    private recipeService: RecipeService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    // Cargar detalles de la receta
    this.recipeService.getRecipeDetails(this.recipeId).subscribe((data: any) => {
      this.recipeDetails = data;
    });
  }

  // Cerrar el modal
  closeModal() {
    this.modalController.dismiss();
  }
}
