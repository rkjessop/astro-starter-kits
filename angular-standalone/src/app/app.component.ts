import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AstroComponentsModule } from '@astrouxds/angular';
import { PlannedLaunchesComponent } from "../planned-launches/planned-launches.component";
import { MyCounterComponent } from '../my-counter/my-counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { BreadcrumbNavComponent } from '../breadcrumb-nav/breadcrumb-nav.component';
import { RuxBreadcrumbItem } from '@astrouxds/angular';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterLink
      , RouterLinkActive
      , RouterOutlet
      , RouterModule
      , AstroComponentsModule
      , PlannedLaunchesComponent
      , MyCounterComponent
      , BreadcrumbNavComponent
    ]
})
export class AppComponent {
  title = 'angular-standalone'; // TODO: unnecessary?  It is in package.json and elsewhere.
  systemClassification = "UNCLASSIFIED";
  applicationAbbreviation = "NG OMW";
  applicationName = "NG Orbital Mechanics Workbench";
  version = "0.1";

  constructor() {
  }

  menuSelect(e: CustomEvent) {
    console.error('##### >menuSelect:e = ', e);
    const { detail } = e;
    if (detail.value === 'notImplemented') {
      console.error('##### not yet implemented');
      // TODO:addToast('This feature has not been implemented', false, 3000);
      return;
    }
    if (detail.value === 'themeToggle') {
      console.error('##### a');
      // setLightTheme(!lightTheme);
      // document.body.classList.toggle('light-theme');
      return;
    }
  }
}
