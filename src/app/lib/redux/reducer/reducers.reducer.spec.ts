import * as reducers from './reducers.reducer';

describe('reducer', () => {
  const { initialState } = reducers;

  it('debe regresar el estado inicial', () => {
    const action = {
      type: 'unknow',
    };
    const state = reducers.counterReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('debe regresar algo diferente', () => {
    const action = {
      type: '[Counter Component] Increment',
    };
    ('[Counter Component] Decrement');
    const state = reducers.counterReducer(initialState, action);
    expect(state).not.toEqual(initialState);
  });

  it('debe regresar algo diferente', () => {
    const action = {
      type: '[Counter Component] Decrement',
    };
    const state = reducers.counterReducer(initialState, action);
    expect(state).toEqual(initialState - 1);
  });

  it('debe regresar algo diferente', () => {
    const action = {
      type: '[Counter Component] Reset',
    };
    const state = reducers.counterReducer(initialState, action);
    expect(state).toEqual(0);
  });
});
