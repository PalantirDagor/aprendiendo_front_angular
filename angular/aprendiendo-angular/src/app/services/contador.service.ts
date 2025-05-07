import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  private contadorSubject = new BehaviorSubject<number>(0); // Inicializamos con 0
  public contador$ = this.contadorSubject.asObservable(); // Observable para los componentes

  constructor() { }

  incrementarContador() {
    this.contadorSubject.next(this.contadorSubject.value + 1);
  }

  decrementarContador() {
    this.contadorSubject.next(this.contadorSubject.value - 1);
  }

  obtenerValorActual(): number {
    return this.contadorSubject.value;
  }
}
