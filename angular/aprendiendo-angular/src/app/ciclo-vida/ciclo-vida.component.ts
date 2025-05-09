import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';

import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit, OnDestroy {
  fechaActual: Date = new Date();
  precio: number = 1234.567;
  texto: string = 'este texto será convertido a mayúsculas';
  mensaje$: Observable<number>;
  numeroPromesa: Promise<number>;
  private intervalSubscription: Subscription | undefined;
  contador: number = 0;
  //intervalSubscription: Subscription | undefined;
  private contadorSubscription: Subscription | undefined;

  constructor(private contadorService: ContadorService) {
    console.log('Componente Counter construido');

    this.mensaje$ = interval(1000).pipe(
      take(5)
    );

    this.numeroPromesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(42);
      }, 2000);
    });
  }

  ngOnInit(): void {
    console.log('Componente Counter inicializado (OnInit)');
    /*this.intervalSubscription = interval(1000).subscribe(() => {
      this.counter++;
      console.log('Contador:', this.counter);
    });*/
    this.contadorSubscription = this.contadorService.contador$.subscribe(valor => {
      this.contador = valor;
    });

    console.log('Componente Async inicializado');
  }

  ngOnDestroy(): void {
    console.log('Componente Counter destruido (OnDestroy)');
    /*if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
      console.log('Intervalo del contador detenido');
    }*/
    if (this.contadorSubscription) {
      this.contadorSubscription.unsubscribe();
    }

    console.log('Componente Async destruido');
    // El pipe async se encarga de desuscribirse del Observable
    // No necesitamos desuscribir 'mensaje$' manualmente aquí
  }
}
