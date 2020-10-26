import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
    path: 'about',
  },
  {
    path: 'listExample',
    loadChildren: () => import('./list-example/list-example.module').then((m) => m.ListExampleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
