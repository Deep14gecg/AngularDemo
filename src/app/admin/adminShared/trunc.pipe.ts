import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trunc'
})

export class TruncPipe implements PipeTransform {

  transform(value: string, chars: number): string {
    let text = `${value.substring(0,chars)} ...`;
    return text;
  }

}
