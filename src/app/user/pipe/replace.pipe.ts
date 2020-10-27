import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  pure: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, max: number, append = '...'): string {
    return value && value.length > max ? `${value.slice(0, max)}${append}` : value;
  }
}
