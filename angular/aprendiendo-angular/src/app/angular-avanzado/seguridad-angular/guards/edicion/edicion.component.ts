import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

// Interfaz para el guard CanDeactivate
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements CanComponentDeactivate  {
  contenido: string = 'Texto inicial';
  hasChanges: boolean = false;

  constructor() { }

  guardar() {
    alert('Cambios guardados: ' + this.contenido);
    this.hasChanges = false;
  }

  onInputChange(): void {
    this.hasChanges = true;
    console.log('El contenido ha cambiado. hasChanges es:', this.hasChanges);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.hasChanges) {
      const confirmacion = confirm('Tienes cambios no guardados. ¿Estás seguro de que quieres salir?');
      return of(confirmacion); // Devuelve un Observable de boolean
    }
    return of(true); // No hay cambios, se permite salir
  }
}
