import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrement,
  increment,
  reset,
} from './lib/redux/actions/acciones.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'redux-app';
  count$?: Observable<number>;

  constructor(private store: Store<{ contadores: number; prueba: number }>) {
  }
  
  ngOnInit(): void {
    this.count$ = this.store.select('contadores');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngOnDestroy(): void {
    console.log("destroy app");

  }
}
