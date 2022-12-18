import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioTestService {

  constructor() { }

  public llamadoHttp(): Observable<number>{
    return of(100*Math.random());
  }

}
