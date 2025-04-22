import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit, OnDestroy {
  counter: number = 0;
  intervalSubscription: Subscription | undefined;

  constructor() {
    console.log('Componente Counter construido');
  }

  ngOnInit(): void {
    console.log('Componente Counter inicializado (OnInit)');
    this.intervalSubscription = interval(1000).subscribe(() => {
      this.counter++;
      console.log('Contador:', this.counter);
    });
  }

  ngOnDestroy(): void {
    console.log('Componente Counter destruido (OnDestroy)');
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
      console.log('Intervalo del contador detenido');
    }
  }
}
