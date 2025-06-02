import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isAuthenticated: boolean = false;

  constructor(private router: Router) {
    // Simular el estado de autenticación
    this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  }

login() {
    localStorage.setItem('isAuthenticated', 'true');
    this.isAuthenticated = true;
    alert('Sesión iniciada. Ahora puedes acceder al Dashboard.');
    this.router.navigate(['angular-avanzado/seguridad-angular/guards/dashboard']);
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticated = false;
    alert('Sesión cerrada.');
    this.router.navigate(['seguridad-angular/guards/home']);
  }
}
