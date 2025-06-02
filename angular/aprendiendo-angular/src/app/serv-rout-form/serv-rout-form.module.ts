import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServRoutFormRoutingModule } from './serv-rout-form-routing.module';
import { TiposFormulariosComponent } from './tipos-formularios/tipos-formularios.component';
import { ComunicacionModule } from './comunicacion/comunicacion.module';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';
import { SaludadorComponent } from './saludador/saludador.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroReactiveComponent } from './registro-reactive/registro-reactive.component';
import { RegistroCustomComponent } from './registro-custom/registro-custom.component';
import { ParamRutasComponent } from './param-rutas/param-rutas.component';


@NgModule({
  declarations: [
    SaludadorComponent,
    TiposFormulariosComponent,
    RegistroComponent,
    RegistroReactiveComponent,
    RegistroCustomComponent,
    ComunicacionComponent,
    ParamRutasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    ServRoutFormRoutingModule, ComunicacionModule,
  ]
})
export class ServRoutFormModule { }
