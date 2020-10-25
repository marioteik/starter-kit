import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
moment.locale('pt-br');

@Pipe({
  name: 'localDateTime',
})
export class LocalDateTimePipe implements PipeTransform {
  transform(date: string): string {
    let newDate: moment.Moment = moment(date);
    return newDate.format('LLL');
  }
}
