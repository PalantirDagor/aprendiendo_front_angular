import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-estandar',
  templateUrl: './pipes-estandar.component.html',
  styleUrls: ['./pipes-estandar.component.css']
})
export class PipesEstandarComponent {
  fechaActual: Date = new Date();
}
