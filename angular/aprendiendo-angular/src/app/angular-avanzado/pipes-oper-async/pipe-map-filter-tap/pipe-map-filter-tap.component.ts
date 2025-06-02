import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
}

interface UsuarioFormateado {
  idUsuario: number;
  nombreCompleto: string;
}

@Component({
  selector: 'app-pipe-map-filter-tap',
  templateUrl: './pipe-map-filter-tap.component.html',
  styleUrls: ['./pipe-map-filter-tap.component.css']
})
export class PipeMapFilterTapComponent {
  // Para el operador map
  usuariosOriginales: Observable<Usuario[]> = of([
    { id: 1, nombre: 'Juan', apellido: 'Herrera', edad: 30 },
    { id: 2, nombre: 'María', apellido: 'Cardenas', edad: 25 },
    { id: 3, nombre: 'Pedro', apellido: 'Salazar', edad: 35 },
  ]);

  usuariosFormateados: Observable<UsuarioFormateado[]>;

  //para el operador filter
  numerosOriginales: Observable<number[]> = of([1, 2, 3, 4, 5, 6]);
  numerosPares: Observable<number[]>;

  // Para el operador tap
  resultado: Observable<number[]>;


  ngOnInit(): void {
    this.usuariosFormateados = this.usuariosOriginales.pipe(
      map(usuarios => usuarios.map(usuario => ({
        idUsuario: usuario.id,
        nombreCompleto: `${usuario.nombre} ${usuario.apellido}`
      })))
    );

    /*this.numerosPares = this.numerosOriginales.pipe(
      filter(numeros => numeros.filter(numero => numero % 2 === 0 ? numero : undefined))
    );*/

    this.resultado = this.numerosOriginales.pipe(
      tap(numeros => {
        console.log('Valores emitidos:', numeros); // Efecto secundario: logging
        numeros.forEach(numero => console.log('Procesando número:', numero * 2)); // Otro efecto secundario
      })
    );

    // Para ver el resultado en la plantilla, simplemente asignamos el Observable
    // El 'tap' no modifica los valores, solo realiza acciones con ellos.
  }
}
