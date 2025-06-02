import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this._isAuthenticated.asObservable();

  constructor(private router: Router) {
    // Inicializar el estado de autenticación desde localStorage
    this._isAuthenticated.next(!!localStorage.getItem('authToken'));
  }

  // Simular el login y almacenar un token
  login(username: string, password: string): Observable<boolean> {
    // En una aplicación real, harías una llamada HTTP a tu backend aquí
    // y recibirías un token JWT.
    return new Observable(observer => {
      setTimeout(() => {
        if (username === 'user' && password === 'password') {
          const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
          localStorage.setItem('authToken', fakeToken);
          this._isAuthenticated.next(true);
          observer.next(true);
          observer.complete();
        } else {
          observer.next(false);
          observer.complete();
        }
      }, 1000); // Simula un retraso de red
    });
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this._isAuthenticated.next(false);
    this.router.navigate(['seguridad-angular/http-interceptor/login2']);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
