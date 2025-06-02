import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

interface CustomPreloadRoute extends Route {
  preload?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadStrategyService {
  preload(route: CustomPreloadRoute, load: () => Observable<any>): Observable<any> {
    if (route.data?.['preload']) {
      console.log('Precargando:', route.path);
      return load();
    } else {
      return of(null);
    }
  }
}
