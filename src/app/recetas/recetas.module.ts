import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecetasPageRoutingModule } from './recetas-routing.module';
import { RecetasPage } from './recetas.page';
import { RecipeDetailsPageModule } from '../recipe-details/recipe-details.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetasPageRoutingModule,
    RecipeDetailsPageModule, 
  ],
  declarations: [RecetasPage],
  providers: [
  ],
})
export class RecetasPageModule {}
