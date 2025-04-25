import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {

  constructor() { }

  generarSaludo(nombre: string): string {
    console.log(nombre + ': el estudiante');
    return `¡Hola, ${nombre}! Bienvenido a nuestra aplicación.`;
  }

}
