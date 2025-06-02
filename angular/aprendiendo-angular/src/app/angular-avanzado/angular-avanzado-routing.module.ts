import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesOperAsyncComponent } from './pipes-oper-async/pipes-oper-async.component';
import { ManejoEstadosComponent } from './manejo-estados/manejo-estados.component';
import { BehaviorReplaySubjectComponent } from './behavior-replay-subject/behavior-replay-subject.component';
import { ContadorSignalsComponent } from './contador-signals/contador-signals.component';
import { SeguridadAngularComponent } from './seguridad-angular/seguridad-angular.component';

const angularAvanzadoRoutes: Routes = [
  { path: 'angular-avanzado/pipes-operaciones-async', component: PipesOperAsyncComponent },
  { path: 'angular-avanzado/manejo-estados', component: ManejoEstadosComponent },
  { path: 'angular-avanzado/manejo-estados/behavior-replay-subject', component: BehaviorReplaySubjectComponent },
  { path: 'angular-avanzado/manejo-estados/contador-signals', component: ContadorSignalsComponent },
  { path: 'angular-avanzado/seguridad-angular', component: SeguridadAngularComponent },
  /*{ path: 'angular-avanzado/saludador', component: SaludadorComponent },
  { path: 'angular-avanzado/saludador', component: SaludadorComponent },*/
];

@NgModule({
  imports: [RouterModule.forChild(angularAvanzadoRoutes)],
  exports: [RouterModule]
})
export class AngularAvanzadoRoutingModule { }
