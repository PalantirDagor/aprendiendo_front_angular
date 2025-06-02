import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaludadorComponent } from './saludador/saludador.component';
import { TiposFormulariosComponent } from './tipos-formularios/tipos-formularios.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroReactiveComponent } from './registro-reactive/registro-reactive.component';
import { RegistroCustomComponent } from './registro-custom/registro-custom.component';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';
import { ParamRutasComponent } from './param-rutas/param-rutas.component';

const servRoutFormRoutes: Routes = [
  { path: 'servicios-routing-forms/saludador', component: SaludadorComponent },
  { path: 'servicios-routing-forms/tipos-formularios', component: TiposFormulariosComponent },
  { path: 'servicios-routing-forms/tipos-formularios/registro', component: RegistroComponent },
  { path: 'servicios-routing-forms/tipos-formularios/registro-reactive', component: RegistroReactiveComponent },
  { path: 'servicios-routing-forms/tipos-formularios/registro-custom', component: RegistroCustomComponent },
  { path: 'servicios-routing-forms/comunicacion', component: ComunicacionComponent },
  { path: 'servicios-routing-forms/parametros-ruta/:id', component: ParamRutasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(servRoutFormRoutes)],
  exports: [RouterModule]
})
export class ServRoutFormRoutingModule { }
