import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunicacionRoutingModule } from './comunicacion-routing.module';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { VistaAComponent } from './vista-a/vista-a.component';
import { VistaBComponent } from './vista-b/vista-b.component';
import { ComunicacionComponent } from './comunicacion.component';


@NgModule({
  declarations: [
    PadreComponent,
    HijoComponent,
    VistaAComponent,
    VistaBComponent,
    ComunicacionComponent,
  ],
  imports: [
    CommonModule,
    ComunicacionRoutingModule
  ]
})
export class ComunicacionModule { }
