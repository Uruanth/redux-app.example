import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '../actions/acciones.action';

export const initialState = 100;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        console.log(state);
        return state + (100 * Math.random());
    }),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)
);
