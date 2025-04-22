import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-estruct',
  templateUrl: './directivas-estruct.component.html',
  styleUrls: ['./directivas-estruct.component.css']
})
export class DirectivasEstructComponent {
  mostrarMensaje = true;
  productos = [
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 75 },
    { nombre: 'Monitor', precio: 300 },
    { nombre: 'Diadema Gamer', precio: 100 }
  ];
  opcionSeleccionada = 2;

  toggleMensaje() {
    this.mostrarMensaje = !this.mostrarMensaje;
  }
}
