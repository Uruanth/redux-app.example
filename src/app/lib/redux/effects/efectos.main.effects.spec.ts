import {
  incrementExito,
  decrement,
  decrementExito,
} from './../actions/acciones.action';
import { EfectosMain } from './efectos.main.effects';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { increment } from '../actions/acciones.action';
import { ServicioTestService } from 'src/app/services/servicio-test.service';

const estadoInicial: { contadores: number; prueba: number } = {
  contadores: 0,
  prueba: 0,
};

describe('Effects', () => {
  const servicioPrueba = jasmine.createSpyObj('servicioPrueba', [
    'llamadoHttp',
  ]);

  let store: MockStore<{ contadores: number; prueba: number }>;
  let effects: EfectosMain;
  let actions: Observable<any>;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      declarations: [],
      providers: [
        EfectosMain,
        provideMockStore({ initialState: estadoInicial }),
        provideMockActions(() => actions),
        {
          provide: ServicioTestService,
          useValue: servicioPrueba,
        },
        //otros servicios que se necesiten
      ],
    });
    effects = TestBed.inject(EfectosMain);
    store = TestBed.inject(MockStore);
    store.setState(estadoInicial);

    testScheduler = new TestScheduler((actual, expected) => {
      console.log('acutal', actual);
      console.log('expect', expected);
      expect(actual).toEqual(expected);
    });
  });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });

  it('probando effects', () => {
    const action = increment();
    const outcome = incrementExito();
    testScheduler.run(({ hot, cold, expectObservable }) => {
      actions = hot('-a', { a: action });
      expectObservable(effects.incremetarEfecto$).toBe('-b', {
        b: outcome,
      });
    });
  });

  it('probando effects llamando a servicio', () => {
    //Arrange
    const action = decrement();
    const outcome = decrementExito();

    //Act
    testScheduler.run(({ hot, cold, expectObservable }) => {
      actions = hot('-a', { a: action });
      const response = cold('-b|', { b: 5 });
      servicioPrueba.llamadoHttp.and.returnValue(response);

      //Assert
      expectObservable(effects.decrementarEfecto$).toBe('--c', {
        c: outcome,
      });


    });
  });
});
