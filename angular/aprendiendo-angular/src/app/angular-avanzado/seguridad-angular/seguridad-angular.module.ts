import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GuardsComponent } from './guards/guards.component';
import { SeguridadAngularRoutingModule } from './seguridad-angular-routing.module';
import { LoginComponent } from './guards/login/login.component';
import { Login2Component } from './login/login2.component';
import { ProtectedComponent } from './protected/protected.component';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';
import { SeguridadAngularComponent } from './seguridad-angular.component';


@NgModule({
  declarations: [
    GuardsComponent,
    LoginComponent,
    ProtectedComponent,
    HttpInterceptorComponent,
    Login2Component,
    ProtectedComponent,
    SeguridadAngularComponent,
  ],
  imports: [
    CommonModule,
    SeguridadAngularRoutingModule,
    FormsModule,
  ]
})
export class SeguridadAngularModule { }
