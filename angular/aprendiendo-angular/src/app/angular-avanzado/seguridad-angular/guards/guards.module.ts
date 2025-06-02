import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EdicionComponent } from './edicion/edicion.component';
import { LoginComponent } from './login/login.component';

const guardsRoutes: Routes = [
    { path: 'seguridad-angular/guards/home', component:  HomeComponent},  
    { path: 'seguridad-angular/guards/dashboard', component:  DashboardComponent},  
    { path: 'seguridad-angular/guards/edicion', component:  EdicionComponent},  
    { path: 'seguridad-angular/guards/login', component:  LoginComponent},  
];

@NgModule({
  declarations: [
    HomeComponent, DashboardComponent, 
    EdicionComponent, LoginComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(guardsRoutes),
    FormsModule,
  ]
})
export class GuardsModule { }
