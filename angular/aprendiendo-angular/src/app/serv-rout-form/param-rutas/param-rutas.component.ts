import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';

import { ObtenerUsuariosService, Usuario } from '../../services/obtener-usuarios.service';

@Component({
  selector: 'app-param-rutas',
  templateUrl: './param-rutas.component.html',
  styleUrls: ['./param-rutas.component.css']
})
export class ParamRutasComponent implements OnInit, OnDestroy{
  usuario: Usuario | null = null;
  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private UsuarioService: ObtenerUsuariosService
  ) {}

  ngOnInit(): void {
    // Opción 1: Suscribirse a los cambios en los parámetros (recomendado para navegación dentro del mismo componente)
    this.routeSub = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        if (id) {
          return this.UsuarioService.obtenerUsuarioPorId(parseInt(id));
        }
        return []; // O un observable que emita null o un valor por defecto
      })
    ).subscribe(usuario => {
      this.usuario = usuario as Usuario;
    });

    // Opción 2: Obtener los parámetros una sola vez al inicializar (si no esperas que los parámetros cambien en este componente)
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.productoService.obtenerProducto(id).subscribe(producto => this.producto = producto);
    // }
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe(); // Importante para evitar fugas de memoria
    }
  }
}
