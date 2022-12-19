import { AppState } from './lib/redux/reducer/index';
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
  cargando$?: Observable<boolean>;
  count$?: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.count$ = this.store.select('contador');
    this.cargando$ = this.store.select('usuario', 'loading');
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
    console.log('destroy app');
  }
}
