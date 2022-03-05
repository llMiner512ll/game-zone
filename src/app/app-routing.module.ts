import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home', //ignorar esto, solo fue para hacer pruebas, al final se usara el inicio real
    pathMatch: 'full'
  },
  {
    path: 'crud',
    loadChildren: () => import('./paginas/crud/crud.module').then( m => m.CrudPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
