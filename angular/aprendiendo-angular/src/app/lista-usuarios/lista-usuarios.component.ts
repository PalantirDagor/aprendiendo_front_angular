import { Component } from '@angular/core';
import { ObtenerUsuariosService } from '../services/obtener-usuarios.service';
import { Usuario } from '../services/obtener-usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
  usuarios: Usuario[] = [];
  errorMessage: string = '';

  constructor(private usuarioService: ObtenerUsuariosService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar los usuarios.';
        console.error('Error:', error);
      },
    });
  }
}
