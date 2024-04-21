import { createReducer, on } from '@ngrx/store';
import { set, increment, decrement, reset } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(set, (state, props: { count: number }) => {
    console.error('##### >set:count = ', props.count);
    return props.count;
  }),
  on(increment, (state) => {
    console.error('##### >incr');
    return state + 1;
  }),
  on(decrement, (state) => {
    console.error('##### >decr');
    return state - 1;
  }),
  on(reset, (state) => {
    console.error('##### >reset');
    return 0;
  })
);
