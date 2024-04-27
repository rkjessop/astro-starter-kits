// import 'zone.js'; // TODO: review zone.js.  Only needed for Stackblitz. Can remove.
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './components/app/app.config';
import { AppComponent } from './components/app/app.component';

bootstrapApplication(AppComponent, appConfig) // AppComponent is the home page
  .catch((err) => console.error(err));
