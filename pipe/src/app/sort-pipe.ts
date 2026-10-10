import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(numbers: number[]): number[] {
    return [...numbers].sort((a, b) => a - b);
  }

}
