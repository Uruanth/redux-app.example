import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { incrementError } from '../actions/acciones.action';



@Injectable()
export class EfectosMU {

    constructor(private actions$: Actions,
    ) { }

    // @Effect()
    // serviceEfecto() {
    //     return this.actions$.pipe(
    //         ofType('[Counter Component] Increment'),
    //         tap(console.log),
    //         map(opcional => incrementError())
    //     );
    // };


    incremetarEfecto$ = createEffect(() => this.actions$.pipe(
        ofType('[Counter Component] Increment'),
        map(accion => incrementError())
    ));
}