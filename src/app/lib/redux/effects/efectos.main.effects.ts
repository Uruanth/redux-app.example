import { ServicioTestService } from './../../../services/servicio-test.service';
import { decrementExito } from './../actions/acciones.action';
import { exhaustMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { incrementExito } from '../actions/acciones.action';

@Injectable()
export class EfectosMain {
  constructor(
    private actions$: Actions,
    private service: ServicioTestService
  ) {}

  // @Effect()
  // serviceEfecto() {
  //     return this.actions$.pipe(
  //         ofType('[Counter Component] Increment'),
  //         tap(console.log),
  //         map(opcional => incrementExito())
  //     );
  // };

  incremetarEfecto$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Counter Component] Increment'),
      map((accion) => incrementExito())
    )
  );

  decrementarEfecto$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Counter Component] Decrement'),
      exhaustMap(() =>
        this.service.llamadoHttp().pipe(map((respuesta) => decrementExito()))
      )
    )
  );
}
