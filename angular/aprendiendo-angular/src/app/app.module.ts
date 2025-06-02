import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { IntroduccionAngularComponent } from './introduccion-angular/introduccion-angular.component';
import { IntroduccionAngularModule } from './introduccion-angular/introduccion-angular.module';
import { ServRoutFormComponent } from './serv-rout-form/serv-rout-form.component';
import { ServRoutFormModule } from './serv-rout-form/serv-rout-form.module';
import { AngularAvanzadoModule } from './angular-avanzado/angular-avanzado.module';
import { AngularAvanzadoComponent } from './angular-avanzado/angular-avanzado.component';

const appRoutes: Routes = [
  { path: 'inicio', component: AppComponent },
  { path: 'introduccion-angular', component: IntroduccionAngularComponent },
  { path: 'servicios-routing-forms', component: ServRoutFormComponent },
  { path: 'angular-avanzado', component: AngularAvanzadoComponent },
  { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) },
]

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    IntroduccionAngularComponent,
    ServRoutFormComponent,
    AngularAvanzadoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule, FormsModule,
    HttpClientModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }), // Configura las rutas de nivel raíz
    IntroduccionAngularModule, ServRoutFormModule,
    AngularAvanzadoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
