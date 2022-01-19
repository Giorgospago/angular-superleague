import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {

  transform(value: string): string {
    const a = Date.parse(value);
    const b = Date.now();

    const diff = Math.floor((b - a) / 1000 / 60 / 60 / 24);

    return `${diff} days ago`;
  }

}
