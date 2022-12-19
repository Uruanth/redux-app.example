import { createAction, props } from '@ngrx/store';
import { Usuario } from '../reducer/user.reducer';

export const login = createAction('[Login] Login');
export const loginExito = createAction(
  '[Login] Login exito',
  props<{ usuario: Usuario }>()
);
export const loginError = createAction(
  '[Login] Login error',
  props<{ err: any }>()
);
