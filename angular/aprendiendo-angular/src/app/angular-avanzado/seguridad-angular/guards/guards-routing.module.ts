import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EdicionComponent } from './edicion/edicion.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

const guardsRoutes: Routes = [
    { path: 'angular-avanzado/seguridad-angular/guards/home', component:  HomeComponent},
    { path: 'angular-avanzado/seguridad-angular/guards/dashboard', component:  DashboardComponent},
    { path: 'angular-avanzado/seguridad-angular/guards/edicion', component:  EdicionComponent},
    { path: 'angular-avanzado/seguridad-angular/guards/login', component:  LoginComponent},
];

@NgModule({
  imports: [
    CommonModule,
    //RouterModule.forChild(guardsRoutes),
    FormsModule,
  ],
  exports: [RouterModule]
})
export class GuardsRoutingModule { }
