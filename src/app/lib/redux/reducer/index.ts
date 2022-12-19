import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './reducers.reducer';
import { loginReducer, UsuarioState } from './user.reducer';

export interface AppState {
  contador: number,
  usuario: UsuarioState
}

export const appReducers: ActionReducerMap<AppState>  = {
  contador: counterReducer,
  usuario: loginReducer
}
