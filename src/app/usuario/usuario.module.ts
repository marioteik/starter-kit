import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';
import { FiltroUsuarioPipe } from './filtro-usuario.pipe';

@NgModule({
  declarations: [UsuarioComponent, FiltroUsuarioPipe],
  imports: [CommonModule, UsuarioRoutingModule, FormsModule],
})
export class UsuarioModule {}
