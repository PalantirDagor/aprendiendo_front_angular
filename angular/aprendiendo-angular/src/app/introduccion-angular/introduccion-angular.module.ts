import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingDirectivasComponent } from './data-binding-directivas/data-binding-directivas.component';
import { IntroduccionAngularRoutingModule } from './introduccion-angular-routing.module';
import { PrimerComponentComponent } from './primer-component/primer-component.component';
import { DataBindingComponent } from './data-binding-directivas/data-binding/data-binding.component';
import { DirectivasEstructComponent } from './data-binding-directivas/directivas-estruct/directivas-estruct.component';
import { DirectivasAtributoComponent } from './data-binding-directivas/directivas-atributo/directivas-atributo.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';


@NgModule({
  declarations: [
    DataBindingDirectivasComponent,
    PrimerComponentComponent,
    DataBindingComponent,
    DirectivasEstructComponent,
    DirectivasAtributoComponent,
    CicloVidaComponent,
  ],
  imports: [
    CommonModule,
    IntroduccionAngularRoutingModule
  ]
})
export class IntroduccionAngularModule { }
