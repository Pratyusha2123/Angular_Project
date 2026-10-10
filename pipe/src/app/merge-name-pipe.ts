import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mergeName',
  standalone: true
})
export class MergeNamePipe implements PipeTransform {

  transform(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
  }

}
