import { Users } from './../../model/users';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listPipe',
})
export class ListPipePipe implements PipeTransform {
  transform(user: Users, ...args: Users[]): any {
    return user.type;
  }
}
