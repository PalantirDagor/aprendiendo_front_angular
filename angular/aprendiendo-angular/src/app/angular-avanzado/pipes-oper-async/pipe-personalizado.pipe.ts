import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePersonalizado'
})
export class PipePersonalizadoPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (!value) {
      return value;
    }

    let textoInvertido = value.split('').reverse().join('');

    if (args.includes('uppercase')) {
      textoInvertido = textoInvertido.toUpperCase();
    }

    return textoInvertido;
  }
}
