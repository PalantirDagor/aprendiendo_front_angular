import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
  username: string = '';
  password: string = '';
  isAuthenticated = false; // Estado local para la UI

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
  }

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe(success => {
      if (success) {
        alert('¡Inicio de sesión exitoso!');
        this.router.navigate(['/protected']);
      } else {
        alert('Credenciales inválidas.');
      }
    });
  }

  onLogout(): void {
    this.authService.logout();
    alert('Sesión cerrada.');
  }
}
