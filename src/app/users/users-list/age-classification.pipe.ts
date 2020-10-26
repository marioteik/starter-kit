import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageClassification',
})
export class AgeClassificationPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    return value < 13
      ? 'Criança'
      : value >= 13 && value <= 18
      ? 'Adolescente'
      : value >= 18 && value <= 30
      ? 'Jovem'
      : value >= 30 && value <= 60
      ? 'Adulto'
      : 'Idoso';
  }
}
