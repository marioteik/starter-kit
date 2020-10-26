import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '@app/models/usuario';

@Pipe({
  name: 'filtroUsuario',
})
export class FiltroUsuarioPipe implements PipeTransform {
  transform(usuarios: Usuario[], args?: string): Usuario[] {
    if (usuarios.length === 0 || args === undefined) {
      return usuarios;
    }

    let filter = args.toLocaleLowerCase();
    return usuarios.filter((v) => v.nome.toLocaleLowerCase().indexOf(filter) != -1);
  }
}
