import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
  { path: 'user-crud', loadChildren: () => import('./user-crud/user-crud.module').then((m) => m.UserCrudModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
