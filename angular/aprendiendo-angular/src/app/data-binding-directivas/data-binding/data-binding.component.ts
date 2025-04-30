import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  // Interpolación ({{ }}):
  nombre = 'Juan Pérez';
  edad = 30;

  //Property Binding ([]):
  imagenURL = 'https://i1.sndcdn.com/avatars-000288731353-ck71rx-t500x500.jpg'
  estaDeshabilitado = true;
  miClaseCSS = 'resaltado';

  //Event Binding (()):
  contador = 0;

  incrementarContador() {
    this.contador++;
    console.log('Contador:', this.contador);
  }

  mostrarMensaje(evento: any) {
    console.log('Evento:', evento);
    alert('¡Botón clickeado!');
  }

  actualizarValor(valor: string) {
    console.log('Valor del input:', valor);
  }

  //Two-Way Binding ([()] o [(ngModel)]):
  nombreModelo = '';
}
