import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComiMapsPageRoutingModule } from './comi-maps-routing.module';

import { ComiMapsPage } from './comi-maps.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComiMapsPageRoutingModule,
  ],
  declarations: [ComiMapsPage]
})
export class ComiMapsPageModule {}
