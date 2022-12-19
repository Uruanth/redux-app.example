import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Usuario } from '../lib/redux/reducer/user.reducer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public logearUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>('api/login');
  }
}
