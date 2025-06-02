import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './services/auth.service'; // Importa tu AuthService
import { Router } from '@angular/router'; // Importa el Router

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // 1. Obtener el token (si existe)
    const authToken = this.authService.getToken();

    // 2. Clonar la solicitud y añadir el token si está disponible
    if (authToken) {
      console.log('AuthInterceptor: Token encontrado. Añadiendo a la cabecera.');
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}` // Formato estándar JWT
        }
      });
    } else {
      console.log('AuthInterceptor: No se encontró token.');
    }

    // 3. Pasar la solicitud modificada (o original) al siguiente manejador
    return next.handle(request).pipe(
      // 4. Interceptar y manejar errores (especialmente 401 Unauthorized)
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.error('AuthInterceptor: Error 401 Unauthorized. Redirigiendo a login.');
          this.authService.logout(); // Limpiar el token y el estado de autenticación
          // Opcional: mostrar un mensaje al usuario
          alert('Tu sesión ha expirado o no estás autorizado. Por favor, inicia sesión de nuevo.');
          this.router.navigate(['/login']); // Redirigir a la página de login
        }
        // Re-lanzar el error para que sea manejado por el servicio o componente que hizo la petición
        return throwError(() => new Error('Error en la petición: ' + error.message));
      })
    );
  }
}
