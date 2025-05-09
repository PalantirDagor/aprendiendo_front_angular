import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesOperAsyncComponent } from './pipes-oper-async.component';
import { PipesOperAsyncRoutingModule } from './pipes-oper-async-routing.module';
import { PipePersonalizadoPipe } from './pipe-personalizado.pipe';
import { MiPipePersonalizadoComponent } from './mi-pipe-personalizado/mi-pipe-personalizado.component';



@NgModule({
  declarations: [
    PipesOperAsyncComponent,
    PipePersonalizadoPipe,
    MiPipePersonalizadoComponent
  ],
  imports: [
    CommonModule,
    PipesOperAsyncRoutingModule
  ]
})
export class PipesOperAsyncModule { }
