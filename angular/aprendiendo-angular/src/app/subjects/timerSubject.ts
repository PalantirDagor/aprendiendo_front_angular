import { ReplaySubject } from 'rxjs';

// Crear un ReplaySubject que almacena valores emitidos en los últimos 100ms
const timerSubject = new ReplaySubject<number>(undefined, 100);

setTimeout(() => timerSubject.next(1), 10);
setTimeout(() => timerSubject.next(2), 50);
setTimeout(() => timerSubject.next(3), 150);

setTimeout(() => {
  timerSubject.subscribe(valor => console.log('Suscriptor X:', valor));
}, 200);
// Salida (aproximadamente): Suscriptor X: 2, Suscriptor X: 3 (el valor 1 ya expiró)
