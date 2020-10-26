import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { UsuarioComponent } from './usuario.component';

const routes: Routes = [{ path: '', component: UsuarioComponent, data: { title: marker('Usuarios') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class UsuarioRoutingModule {}
