import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'sesion',
    loadChildren: () => import('./paginas/sesion/sesion.module').then( m => m.SesionPageModule)
  },  {
    path: 'juegos',
    loadChildren: () => import('./paginas/juegos/juegos.module').then( m => m.JuegosPageModule)
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
