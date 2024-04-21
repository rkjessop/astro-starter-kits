// import 'zone.js'; // Only needed for Stackblitz. Can remove.
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Injector } from '@angular/core';
import { AppModule } from './app/app.module';
import { CustomInjector } from './app/custom-injector';
import { counterReducer } from './app/counter.reducer';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// const injector = Injector.create({
//   providers: [],
//   // parent: null
// });
// const injector = Injector.create()

// CustomInjector.setInjector(injector);
// CustomInjector.initStore(counterReducer);
// CustomInjector.initStore();

// platformBrowserDynamic([{ provide: Injector, useValue: CustomInjector.getInjector() }])
//   .bootstrapModule(AppModule)
//   .catch(err => console.error(err));
  
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
