import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './lib/redux/actions/acciones.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'redux-app';
  count$: Observable<number>

  constructor(private store: Store<{ contadores: number, prueba: number }>) {
    this.count$
      = store.select('contadores');
    store.select('prueba').subscribe(console.log)
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }

  ngOnDestroy(): void {
  }

}
