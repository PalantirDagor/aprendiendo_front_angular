import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GuardsComponent } from './guards/guards.component';
import { SeguridadAngularComponent } from './seguridad-angular.component';
import { HomeComponent } from './guards/home/home.component';
import { DashboardComponent } from './guards/dashboard/dashboard.component';
import { EdicionComponent } from './guards/edicion/edicion.component';
import { LoginComponent } from './guards/login/login.component';
import { Login2Component } from './login/login2.component';
import { authGuard } from './guards/auth.guard';
import { pendingChangesGuard } from './guards/pending-changes.guard';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';
import { ProtectedComponent } from './protected/protected.component';

const seguridadAngularRoutes: Routes = [
    { path: 'angular-avanzado/seguridad-angular', component: SeguridadAngularComponent },
    { path: 'angular-avanzado/seguridad-angular/guards', component: GuardsComponent },
    { path: 'angular-avanzado/seguridad-angular/guards/home', component:  HomeComponent},
    { path: 'angular-avanzado/seguridad-angular/guards/login', component:  LoginComponent},
    {
      path: 'angular-avanzado/seguridad-angular/guards/dashboard',
      component:  DashboardComponent,
      canActivate: [authGuard]},
    {
      path: 'angular-avanzado/seguridad-angular/guards/edicion',
      component:  EdicionComponent,
      canDeactivate: [pendingChangesGuard] // Usar el guard de cambios pendientes
    },
    { path: 'angular-avanzado/seguridad-angular/http-interceptor', component: HttpInterceptorComponent },
    { path: 'angular-avanzado/seguridad-angular/http-interceptor/login2', component: Login2Component },
    { path: 'angular-avanzado/seguridad-angular/http-interceptor/protected', component: ProtectedComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(seguridadAngularRoutes),
    FormsModule,
  ],
  exports: [RouterModule]
})
export class SeguridadAngularRoutingModule { }
