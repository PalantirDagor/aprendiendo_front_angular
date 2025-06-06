import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PipesEstandarComponent } from './pipes-estandar/pipes-estandar.component';
import { MiPipePersonalizadoComponent } from './mi-pipe-personalizado/mi-pipe-personalizado.component';
import { PipeMapFilterTapComponent } from './pipe-map-filter-tap/pipe-map-filter-tap.component';


const pipesOperacionesAsyncRoutes: Routes = [
  { path: 'pipes-operaciones-async/pipes-estandar', component: PipesEstandarComponent },
  { path: 'pipes-operaciones-async/mi-pipe-personalizado', component: MiPipePersonalizadoComponent },
  { path: 'pipes-operaciones-async/pipe-map-filter-tap', component: PipeMapFilterTapComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pipesOperacionesAsyncRoutes), // Configura las rutas secundarias para este módulo
  ],
  exports: [
    RouterModule // Exporta RouterModule para que las directivas estén disponibles en el módulo
  ]
})
export class PipesOperAsyncRoutingModule { }
