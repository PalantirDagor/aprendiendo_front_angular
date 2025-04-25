import { Component } from '@angular/core';

import { SaludoService } from '../services/saludo.service';

@Component({
  selector: 'app-saludador',
  templateUrl: './saludador.component.html',
  styleUrls: ['./saludador.component.css']
})
export class SaludadorComponent {
  nombreUsuario: string = '';
  mensajeSaludo: string = '';

  constructor(private saludoService: SaludoService) { }

   saludar(): void {
    this.mensajeSaludo = this.saludoService.generarSaludo(this.nombreUsuario);
  }

}
