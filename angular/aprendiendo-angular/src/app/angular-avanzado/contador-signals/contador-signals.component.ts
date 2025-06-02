import { Component, computed,
  effect, signal } from '@angular/core';

@Component({
  selector: 'app-contador-signals',
  templateUrl: './contador-signals.component.html',
  styleUrls: ['./contador-signals.component.css']
})
export class ContadorSignalsComponent {
  contador: any = signal(0);
  dobleContador = computed(() => this.contador() * 2);

  constructor() {
    effect(() => {
      console.log('El contador ha cambiado a:', this.contador());
    });

    effect(() => {
      console.log('El doble del contador es:', this.dobleContador());
    });
  }

  incrementar() {
    this.contador.update((value: number) => value + 1);
  }

  decrementar() {
    this.contador.update((value: number) => value - 1);
  }
}
