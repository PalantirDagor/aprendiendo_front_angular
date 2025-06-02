import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindigRoutingModule } from './bindig-routing.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivasEstructComponent } from './directivas-estruct/directivas-estruct.component';
import { DirectivasAtributoComponent } from './directivas-atributo/directivas-atributo.component';


@NgModule({
  declarations: [
    DataBindingComponent,
    DirectivasEstructComponent,
    DirectivasAtributoComponent,
  ],
  imports: [
    CommonModule,
    BindigRoutingModule // Importa el módulo de enrutamiento del usuario
  ]
})
export class DataBindingDirectivasModule { }
