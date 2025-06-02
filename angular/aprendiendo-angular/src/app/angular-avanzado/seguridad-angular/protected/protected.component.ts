import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {
  protectedData: any;
  publicData: any;
  errorMensaje: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPublicData(); // Obtener datos públicos al inicio
  }

  getProtectedData(): void {
    this.errorMensaje = null; // Limpiar mensaje de error previo
    this.apiService.getProtectedData().subscribe({
      next: (data) => {
        this.protectedData = data;
        console.log('Datos protegidos recibidos:', data);
      },
      error: (err) => {
        this.errorMensaje = 'Error al obtener datos protegidos: ' + err.message;
        console.error('Error al obtener datos protegidos:', err);
      }
    });
  }

  getPublicData(): void {
    this.apiService.getPublicData().subscribe({
      next: (data) => {
        this.publicData = data;
        console.log('Datos públicos recibidos:', data);
      },
      error: (err) => {
        console.error('Error al obtener datos públicos:', err);
      }
    });
  }
}
