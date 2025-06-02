import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
    const router: Router = inject(Router); // Usar inject para obtener el Router

    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if(isAuthenticated){
        console.log('authGuard: Usuario autenticado. Acceso permitido.')
        return true;
    } else {
        console.log('authGuard: Usuario no autenticado. Redirigiendo a login.');
        alert('Necesitas iniciar sesión para acceder a esta ruta.');
        router.navigate(['seguridad-angular/guards/login']);
        return false;
    }
};
