import { BehaviorSubject } from 'rxjs';

// Crear un BehaviorSubject con un valor inicial de 0
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
