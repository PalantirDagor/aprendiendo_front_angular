import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-pipe-personalizado',
  templateUrl: './mi-pipe-personalizado.component.html',
  styleUrls: ['./mi-pipe-personalizado.component.css']
})
export class MiPipePersonalizadoComponent {
  mensaje: string = 'Hola Mundo';
}
