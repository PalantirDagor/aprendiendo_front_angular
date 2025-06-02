import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularAvanzadoRoutingModule } from './angular-avanzado-routing.module';
import { PipesOperAsyncModule } from './pipes-oper-async/pipes-oper-async.module';
import { ManejoEstadosComponent } from './manejo-estados/manejo-estados.component';
import { SeguridadAngularModule } from './seguridad-angular/seguridad-angular.module';


@NgModule({
  declarations: [
    ManejoEstadosComponent,
  ],
  imports: [
    CommonModule,
    AngularAvanzadoRoutingModule,
    PipesOperAsyncModule,
    SeguridadAngularModule,
  ]
})
export class AngularAvanzadoModule { }
