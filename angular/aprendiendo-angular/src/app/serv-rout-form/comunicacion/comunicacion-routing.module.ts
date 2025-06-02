import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { VistaAComponent } from './vista-a/vista-a.component';
import { VistaBComponent } from './vista-b/vista-b.component';

const comunicacionRoutes: Routes = [
  { path: 'servicios-routing-forms/comunicacion/padre', component: PadreComponent },
  { path: 'servicios-routing-forms/comunicacion/hijo', component: HijoComponent },
  { path: 'servicios-routing-forms/comunicacion/vista-a', component: VistaAComponent },
  { path: 'servicios-routing-forms/comunicacion/vista-b', component: VistaBComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(comunicacionRoutes), // Configura las rutas secundarias para este módulo
  ],
  exports: [
    RouterModule // Exporta RouterModule para que las directivas estén disponibles en el módulo
  ]
})
export class ComunicacionRoutingModule { }
