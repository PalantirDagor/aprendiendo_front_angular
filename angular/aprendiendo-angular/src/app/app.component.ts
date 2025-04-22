import { Component } from '@angular/core';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aprendiendo-angular-con-polisura';
  mostrarContador: boolean = true;
}
