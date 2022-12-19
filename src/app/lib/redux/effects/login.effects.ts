import { LoginService } from './../../../services/login.service';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginExito, loginError } from '../actions/login.actions';

@Injectable()
export class EfectosLogin {
  constructor(private actions$: Actions, private service: LoginService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Login] Login'),
      exhaustMap(() =>
        this.service.logearUsuario().pipe(
          map((usuario) => loginExito({ usuario })),
          catchError((e: any) => {
            console.log('error');
            return [loginError({ err: e })];
          })
        )
      )
    )
  );
}
