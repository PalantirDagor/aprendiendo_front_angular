import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-atributo',
  templateUrl: './directivas-atributo.component.html',
  styleUrls: ['./directivas-atributo.component.css']
})
export class DirectivasAtributoComponent {
  estaResaltado = false;
  colorTexto = 'blue';
  estilosDinamicos = {
    'font-weight': 'bold',
    'font-size': '1.2em',
    'font-family': 'Cursive'
  };
  clasesDinamicas = {
    'fondo-gris': false,
    'texto-grande': true
  };

  toggleResaltado() {
    this.estaResaltado = !this.estaResaltado;
  }

  cambiarColor(nuevoColor: string) {
    this.colorTexto = nuevoColor;
  }

  toggleFondoGris() {
    this.clasesDinamicas['fondo-gris'] = !this.clasesDinamicas['fondo-gris'];
  }
}
