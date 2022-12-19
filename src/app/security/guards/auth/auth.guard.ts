import { LoginService } from './../../../services/login.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { catchError, map } from 'rxjs/operators';
import {
  login,
  loginError,
  loginExito,
} from 'src/app/lib/redux/actions/login.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private service: LoginService, private store: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log("route", route);
    console.log("state", state);

    console.log('can active guard');
    this.store.dispatch(login());
    return this.service.logearUsuario().pipe(
      map((respuesta) => {
        console.log('can active guard exito');
        this.store.dispatch(loginExito({ usuario: respuesta }));
        return true;
      }),
      catchError((error) => {
        console.log('can active guard error');
        this.store.dispatch(loginError({ err: error }));
        return [false];
      })
    );
  }
}
