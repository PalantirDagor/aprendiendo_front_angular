import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

// BehaviorSubject **************************
const contadorSubject = new BehaviorSubject<number>(0);

// Primer suscriptor
contadorSubject.subscribe(valor => console.log('Suscriptor 1:', valor)); // Salida: Suscriptor 1: 0

// Emitir nuevos valores
contadorSubject.next(1); // Salida: Suscriptor 1: 1
contadorSubject.next(2); // Salida: Suscriptor 1: 2

// Segundo suscriptor (se subscribe después de que se emitieron valores)
contadorSubject.subscribe(valor => console.log('Suscriptor 2:', valor)); // Salida: Suscriptor 2: 2 (recibe el valor actual)

// Emitir otro valor
contadorSubject.next(3); // Salida: Suscriptor 1: 3, Suscriptor 2: 3

// ReplaySubject con bufferSize *********************
// Crear un ReplaySubject que almacena los últimos 2 valores
const historialSubject = new ReplaySubject<number>(2);

// Emitir valores
historialSubject.next(1);
historialSubject.next(2);
historialSubject.next(3);

// Primer suscriptor
historialSubject.subscribe(valor => console.log('Suscriptor A:', valor));
// Salida: Suscriptor A: 2, Suscriptor A: 3 (recibe los últimos 2 valores)

// Emitir otro valor
historialSubject.next(4); // Salida: Suscriptor A: 4

// Segundo suscriptor
historialSubject.subscribe(valor => console.log('Suscriptor B:', valor));
// Salida: Suscriptor B: 3, Suscriptor B: 4 (recibe los últimos 2 valores al momento de la suscripción)


// ReplaySubject con windowTime *********************
// Crear un ReplaySubject que almacena valores emitidos en los últimos 100ms
const timerSubject = new ReplaySubject<number>(undefined, 100);

setTimeout(() => timerSubject.next(1), 10);
setTimeout(() => timerSubject.next(2), 50);
setTimeout(() => timerSubject.next(3), 150);

setTimeout(() => {
  timerSubject.subscribe(valor => console.log('Suscriptor X:', valor));
}, 200);
// Salida (aproximadamente): Suscriptor X: 2, Suscriptor X: 3 (el valor 1 ya expiró)


@Component({
  selector: 'app-behavior-replay-subject',
  templateUrl: './behavior-replay-subject.component.html',
  styleUrls: ['./behavior-replay-subject.component.css']
})
export class BehaviorReplaySubjectComponent {

}
