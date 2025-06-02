import { Component, Input, OnInit,
  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() mensajeDelPadre: string = '';
  @Input() contadorInicial: number = 0;
  @Output() eventoDesdeHijo = new EventEmitter<string>();

  constructor() {
    console.log('Hijo construido');
  }

  ngOnInit(): void {
    console.log('Hijo inicializado. Mensaje del padre:', this.mensajeDelPadre, 'Contador inicial:', this.contadorInicial);
  }

  incrementarContador() {
    this.contadorInicial++;
    this.eventoDesdeHijo.emit(`El contador ha aumentado a: ${this.contadorInicial}`);
  }
}
