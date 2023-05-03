import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diccionario',
  standalone: true
})
export class DiccionarioPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
