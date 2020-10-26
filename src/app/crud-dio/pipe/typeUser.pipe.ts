import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo_usuario',
  pure: true,
})
export class TypeUserPIPE implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let retUserType = '';

    switch (value) {
      case 'User':
        retUserType = 'Usuário';
        break;

      case 'Organization':
        retUserType = 'Empresa';
        break;

      default:
        retUserType = value;
        break;
    }

    return retUserType;
  }
}
