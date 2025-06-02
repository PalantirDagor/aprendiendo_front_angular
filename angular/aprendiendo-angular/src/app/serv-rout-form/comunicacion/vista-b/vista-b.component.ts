import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ContadorService } from '../../../services/contador.service';

@Component({
  selector: 'app-vista-b',
  templateUrl: './vista-b.component.html',
  styleUrls: ['./vista-b.component.css']
})
export class VistaBComponent implements OnInit, OnDestroy {
  contador: number = 0;
  private contadorSubscription: Subscription | undefined;

  constructor(private contadorService: ContadorService) { }

  ngOnInit(): void {
    this.contadorSubscription = this.contadorService.contador$.subscribe(valor => {
      this.contador = valor;
    });
  }

  ngOnDestroy(): void {
    if (this.contadorSubscription) {
      this.contadorSubscription.unsubscribe();
    }
  }

  decrementar() {
    this.contadorService.decrementarContador();
  }

  obtenerValorActual() {
    alert('Valor actual del contador: ' + this.contadorService.obtenerValorActual());
  }
}
