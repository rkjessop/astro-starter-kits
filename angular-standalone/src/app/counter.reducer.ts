import { createReducer, on } from '@ngrx/store';
import { set, increment, decrement, reset } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(set, (state, props: { count: number }) => {
    return props.count;
  }),
  on(increment, (state) => {
    return state + 1;
  }),
  on(decrement, (state) => {
    return state - 1;
  }),
  on(reset, (state) => {
    return 0;
  })
);
