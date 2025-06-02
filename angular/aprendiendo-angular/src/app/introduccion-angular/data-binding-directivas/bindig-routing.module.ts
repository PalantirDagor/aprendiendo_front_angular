import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivasEstructComponent } from './directivas-estruct/directivas-estruct.component';
import { DirectivasAtributoComponent } from './directivas-atributo/directivas-atributo.component';


const dataBindingRoutes: Routes = [
  { path: 'introduccion-angular/data-bindig-directivas/data-binding', component: DataBindingComponent },
  { path: 'introduccion-angular/data-bindig-directivas/directivas-estructurales', component: DirectivasEstructComponent },
  { path: 'introduccion-angular/data-bindig-directivas/directivas-atributo', component: DirectivasAtributoComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(dataBindingRoutes), // Configura las rutas secundarias para este módulo
  ],
  exports: [
    RouterModule // Exporta RouterModule para que las directivas estén disponibles en el módulo
  ]
})
export class BindigRoutingModule { }
