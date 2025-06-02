import { ReplaySubject } from 'rxjs';

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
