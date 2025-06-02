import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ContadorService } from '../../../services/contador.service';

@Component({
  selector: 'app-vista-a',
  templateUrl: './vista-a.component.html',
  styleUrls: ['./vista-a.component.css']
})
export class VistaAComponent implements OnInit, OnDestroy {
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

  incrementar() {
    this.contadorService.incrementarContador();
  }
}
