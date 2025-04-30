import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivasEstructComponent } from './directivas-estruct/directivas-estruct.component';
import { DirectivasAtributoComponent } from './directivas-atributo/directivas-atributo.component';

const dataBindingDirectivaRoutes: Routes = [
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directivas-estructurales', component: DirectivasEstructComponent },
  { path: 'directivas-atributo', component: DirectivasAtributoComponent },

]

@NgModule({
  declarations: [
    DataBindingComponent,
    DirectivasEstructComponent,
    DirectivasAtributoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dataBindingDirectivaRoutes) // Configura las rutas secundarias para este módulo
  ],
  exports: [
    RouterModule // Exporta RouterModule para que las directivas estén disponibles en el módulo
  ]
})
export class DataBindingDirectivasModule { }
