import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { set, decrement, increment, reset } from '../app/counter.actions';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css'
})
export class MyCounterComponent {

  count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
    this.count$.subscribe((x) => {console.error('>>>>> x = ', x)});
  }

  increment() {
    console.error('##### >increment');
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
