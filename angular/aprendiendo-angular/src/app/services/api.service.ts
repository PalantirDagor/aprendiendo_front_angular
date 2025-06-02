import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Una API pública de ejemplo

  constructor(private http: HttpClient) { }

  // Esta función hará una petición a una API que simularemos protegida
  // En una aplicación real, usarías tu propio endpoint.
  // Aquí usamos jsonplaceholder que no requiere autenticación,
  // pero el interceptor intentará añadir el token de todas formas.
  getProtectedData(): Observable<any> {
    console.log('ApiService: Realizando petición a la API protegida...');
    // Simular un endpoint que requiera autenticación
    return this.http.get(this.apiUrl);
  }

  // Simular una petición que NO requiere autenticación (para verificar que el interceptor no interfiera)
  getPublicData(): Observable<any> {
    console.log('ApiService: Realizando petición a la API pública...');
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
