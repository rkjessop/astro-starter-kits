// NOT CURRENTLY USED

import { Injector } from '@angular/core';
import { Store, StoreModule, ActionReducerMap } from '@ngrx/store';

export class CustomInjector {
  private static injector: Injector;

  static setInjector(injector: Injector): void {
    CustomInjector.injector = injector;
  }

  static getInjector(): Injector {
    return CustomInjector.injector;
  }

  static initStore(reducers: ActionReducerMap<any>): void {
    const store = StoreModule.forRoot(reducers);
    const initializedInjector = Injector.create({
      providers: [{ provide: Store, useValue: store }],
      parent: CustomInjector.getInjector()
    });
    CustomInjector.setInjector(initializedInjector);
  }
}
