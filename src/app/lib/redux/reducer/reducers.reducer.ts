import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '../actions/acciones.action';

export const initialState = 100;

export const counterReducer = createReducer<number>(
    initialState,
    on(increment, (state) => {
        console.log(state);
        return state + 1;
    }),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)
);
