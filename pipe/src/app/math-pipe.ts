import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'math',
  standalone: true
})
export class MathPipe implements PipeTransform {

  transform(a: number, b: number, operation: string): number {

    if (operation === 'add') {
      return a + b;
    }

    if (operation === 'multiply') {
      return a * b;
    }

    if (operation === 'divide') {
      return a / b;
    }

    return 0;
  }

}
