import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PrimerComponentComponent } from './modules/primer-component/primer-component.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
//import { DataBindingComponent } from './data-binding-directivas/data-binding/data-binding.component';
//import { DirectivasEstructComponent } from './data-binding-directivas/directivas-estruct/directivas-estruct.component';
//import { DirectivasAtributoComponent } from './data-binding-directivas/directivas-atributo/directivas-atributo.component';
import { SaludadorComponent } from './saludador/saludador.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroReactiveComponent } from './registro-reactive/registro-reactive.component';
import { RegistroCustomComponent } from './registro-custom/registro-custom.component';
import { DataBindingDirectivasComponent } from './data-binding-directivas/data-binding-directivas.component';
import { DataBindingDirectivasModule } from './data-binding-directivas/data-binding-directivas.module';

const appRoutes: Routes = [
  { path: 'inicio', component: AppComponent },
  { path: 'componentes-angular', component: CicloVidaComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponentComponent,
    CicloVidaComponent,
    //DataBindingComponent,
    //DirectivasEstructComponent,
    //DirectivasAtributoComponent,
    SaludadorComponent,
    ListaUsuariosComponent,
    RegistroComponent,
    RegistroReactiveComponent,
    RegistroCustomComponent,
    DataBindingDirectivasComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes), // Configura las rutas de nivel raíz
    DataBindingDirectivasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
