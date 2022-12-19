import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const incrementError = createAction('[Counter Component] Increment error');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
// export const login = createAction('[Login] logear usuario');
// export const loginExito = createAction('[Login] logear usuario exito');
// export const loginError = createAction('[Login] logear usuario error');
