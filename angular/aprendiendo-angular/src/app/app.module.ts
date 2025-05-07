import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PrimerComponentComponent } from './modules/primer-component/primer-component.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
import { SaludadorComponent } from './saludador/saludador.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroReactiveComponent } from './registro-reactive/registro-reactive.component';
import { RegistroCustomComponent } from './registro-custom/registro-custom.component';
import { DataBindingDirectivasComponent } from './data-binding-directivas/data-binding-directivas.component';
import { DataBindingDirectivasModule } from './data-binding-directivas/data-binding-directivas.module';
import { ParamRutasComponent } from './param-rutas/param-rutas.component';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';
import { ComunicacionModule } from './comunicacion/comunicacion.module';

const appRoutes: Routes = [
  { path: 'inicio', component: AppComponent },
  { path: 'componentes-angular', component: CicloVidaComponent },
  { path: 'data-bindig-directivas', component:  DataBindingDirectivasComponent},
  { path: 'parametros-ruta/:id', component:  ParamRutasComponent},
  { path: 'comunicacion', component:  ComunicacionComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponentComponent,
    CicloVidaComponent,
    SaludadorComponent,
    ListaUsuariosComponent,
    RegistroComponent,
    RegistroReactiveComponent,
    RegistroCustomComponent,
    DataBindingDirectivasComponent,
    ParamRutasComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes), // Configura las rutas de nivel raíz
    DataBindingDirectivasModule, ComunicacionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
