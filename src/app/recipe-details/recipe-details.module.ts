import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RecipeDetailsPage } from './recipe-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [RecipeDetailsPage], // Declara solo RecipeDetailsPage
  exports: [RecipeDetailsPage], // Exporta para que otros módulos puedan usarlo
})
export class RecipeDetailsPageModule {}
