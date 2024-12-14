import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'comimaps',
        loadChildren: () => import('../comi-maps/comi-maps.module').then(m => m.ComiMapsPageModule)
      },
      {
        path: 'recetas',
        loadChildren: () => import('../recetas/recetas.module').then(m => m.RecetasPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full' 
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabsM',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
