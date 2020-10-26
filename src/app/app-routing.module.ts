import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then((m) => m.UsersModule) },
  { path: 'users/create', component: CreateUserComponent },
  { path: 'users/update/:id', component: UpdateUserComponent },
  { path: 'users/delete/:id', component: DeleteUserComponent },
  // { path: 'users/create', loadChildren: () => import('./users/users.module').then(m => m.CreateUserComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
