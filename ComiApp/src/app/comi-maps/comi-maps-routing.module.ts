import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComiMapsPage } from './comi-maps.page';

const routes: Routes = [
  {
    path: '',
    component: ComiMapsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComiMapsPageRoutingModule {}
