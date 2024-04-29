import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AstroComponentsModule } from '@astrouxds/angular';
import { PlannedLaunchesComponent } from "../planned-launches/planned-launches.component";
import { MyCounterComponent } from '../my-counter/my-counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { BreadcrumbNavComponent } from '../breadcrumb-nav/breadcrumb-nav.component';
import { RuxBreadcrumbItem } from '@astrouxds/angular';
import { BreadcrumbFactoryService, NgServeNavigationModule } from '@ngserveio/navigation';
import { BreadcrumbLabelService } from '../../services/breadcrumb-label.service';
import { routes } from './app.routes';

export const NG_SERVE_DEFAULT_LABEL_SERVICE = 'NG_SERVE_DEFAULT_LABEL_SERVICE';
export const BREADCRUMB_LABEL_SERVICE = 'BREADCRUMB_LABEL_SERVICE';

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
      , NgServeNavigationModule
    ]
    , schemas: [NO_ERRORS_SCHEMA]
    , providers: [
    ]
})
export class AppComponent {
  title = 'angular-standalone'; // TODO: unnecessary?  It is in package.json and elsewhere.
  systemClassification = "UNCLASSIFIED";
  applicationAbbreviation = "NG SOW";
  applicationName = "NG Space Operations Workbench";
  version = "0.1";

  constructor(
    private router: Router
  ) {
    RouterModule.forRoot(routes);
  }

  /**
   * is the event handler for the popup menu attached to the applications icon on
   * the left-hand side of the global status bar.
   * @param e
   * @returns 
   */
  menuSelect(e: CustomEvent) {
    console.error('##### >menuSelect:e = ', e);
    const { detail } = e;
    if (detail.value === 'notImplemented') {
      console.error('##### not yet implemented');
      // TODO: addToast('This feature has not been implemented', false, 3000);
      return;
    }
    if (detail.value === 'themeToggle') {
      console.error('##### detail.value = ', detail.value);
      // setLightTheme(!lightTheme);
      // document.body.classList.toggle('light-theme');
      return;
    }
  }
}
