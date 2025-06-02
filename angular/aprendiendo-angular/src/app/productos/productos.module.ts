import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './productos.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';


const routes: Routes = [
  { path: '', component: ProductosComponent }
];

@NgModule({
  declarations: [
    ProductosComponent,
    ListaProductosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductosModule { }
