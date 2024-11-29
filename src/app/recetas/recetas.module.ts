import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RecetasPageRoutingModule } from './recetas-routing.module';
import { RecetasPage } from './recetas.page';
import { RecipeDetailsPageModule } from '../recipe-details/recipe-details.module'; // Importa el módulo del modal

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetasPageRoutingModule,
    RecipeDetailsPageModule, // Importa el módulo del modal
  ],
  declarations: [RecetasPage],
})
export class RecetasPageModule {}
