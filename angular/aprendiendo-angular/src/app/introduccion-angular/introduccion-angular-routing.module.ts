import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DataBindingDirectivasComponent } from './data-binding-directivas/data-binding-directivas.component';
import { PrimerComponentComponent } from './primer-component/primer-component.component';
import { DataBindingComponent } from './data-binding-directivas/data-binding/data-binding.component';
import { DirectivasEstructComponent } from './data-binding-directivas/directivas-estruct/directivas-estruct.component';
import { DirectivasAtributoComponent } from './data-binding-directivas/directivas-atributo/directivas-atributo.component';

const introduccionAngularRoutes: Routes = [
  { path: 'introduccion-angular/componentes-angular', component: PrimerComponentComponent },
  { path: 'introduccion-angular/data-binding-directivas', component: DataBindingDirectivasComponent },
  { path: 'introduccion-angular/data-bindig-directivas/data-binding', component: DataBindingComponent },
  { path: 'introduccion-angular/data-bindig-directivas/directivas-estructurales', component: DirectivasEstructComponent },
  { path: 'introduccion-angular/data-bindig-directivas/directivas-atributo', component: DirectivasAtributoComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(introduccionAngularRoutes),
  ],
  exports: [RouterModule]
})
export class IntroduccionAngularRoutingModule { }
