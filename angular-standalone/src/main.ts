// import 'zone.js'; // Only needed for Stackblitz. Can remove.
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig) // AppComponent is the home page
  .catch((err) => console.error(err));
