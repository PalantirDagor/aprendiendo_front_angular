import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrimerComponentComponent } from './modules/primer-component/primer-component.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivasEstructComponent } from './directivas-estruct/directivas-estruct.component';
import { DirectivasAtributoComponent } from './directivas-atributo/directivas-atributo.component';
import { SaludadorComponent } from './saludador/saludador.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroReactiveComponent } from './registro-reactive/registro-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponentComponent,
    CicloVidaComponent,
    DataBindingComponent,
    DirectivasEstructComponent,
    DirectivasAtributoComponent,
    SaludadorComponent,
    ListaUsuariosComponent,
    RegistroComponent,
    RegistroReactiveComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
