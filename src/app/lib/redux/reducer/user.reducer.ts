import { createReducer, on } from '@ngrx/store';
import { login, loginError, loginExito } from '../actions/login.actions';

export interface Usuario {
  nombre: string;
  dni: string;
  permisos: String[];
}

export interface UsuarioState {
  usuario?: Usuario;
  loading: boolean;
  error: any;
}

export const initialState: UsuarioState = {
  usuario: undefined,
  loading: false,
  error: undefined,
};

export const loginReducer = createReducer<UsuarioState>(
  initialState,
  on(login, (state) => ({ ...state, loading: true, error: undefined })),
  on(loginExito, (state, payload) => ({
    ...state,
    loading: false,
    usuario: payload.usuario,
  })),
  on(loginError, (state, payload) => ({
    ...state,
    usuario: undefined,
    loading: false,
    error: payload.err,
  }))
);
