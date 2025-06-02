import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  mensajeParaHijo = '¡Hola desde el componente padre!';
  valorInicial = 10;
  mensajeRecibidoDelHijo = '';

  recibirMensajeDelHijo(mensaje: string) {
    this.mensajeRecibidoDelHijo = mensaje;
    console.log('Mensaje recibido del hijo:', mensaje);
  }
}
