import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, EventType, NavigationEnd, Router } from '@angular/router';
import { AstroComponentsModule, RuxIcon } from '@astrouxds/angular';
import { RuxBreadcrumbItem } from '@astrouxds/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subject } from 'rxjs';
import { BREADCRUMB_LABEL_SERVICE } from '../app/app.component';

interface IBreadcrumb {
  path: string; //URL;
  label: string;
  icon?: RuxIcon;
}

@UntilDestroy()
@Component({
  selector: 'app-breadcrumb-nav',
  standalone: true,
  imports: [
   AstroComponentsModule
   , BreadcrumbNavComponent
   , CommonModule
   , ReactiveFormsModule
  ],
  templateUrl: './breadcrumb-nav.component.html',
  styleUrl: './breadcrumb-nav.component.scss'
})
export class BreadcrumbNavComponent {

  items$ = new Subject<IBreadcrumb[]>;

  constructor(
    private router: Router
    , private route: ActivatedRoute
  ) {

    // initialize state
    {
    }

    // initialize router
    {
      this.router.setUpLocationChangeListener();
      this.router.events
        .pipe(untilDestroyed(this))
        .subscribe((event) => {
          // console.info('### event = ', event);

          switch (event.type) {

            case EventType.NavigationEnd: {
              const specificEvent: NavigationEnd = event;
              // console.info('### specificEvent = ', specificEvent);
              // console.error('##### router = ', this.router);
              const url = specificEvent.urlAfterRedirects ?? specificEvent.url;

              switch (url) {
                case '/app-workbench-dashboard': this.items$.next([{path: '/', label: 'Dashboard'}]); break;
                case '/app-launch-details': this.items$.next([
                  {path: '/app-workbench-dashboard', label: 'Dashboard'}
                  , {path: '/app-launch-details', label: 'Launch Details'}
                ]); break;
              }
            } break;
          }
        });
    }

    // initialize route
    {
      this.route.data
      .pipe(untilDestroyed(this))
      .subscribe((routeData) => {
        // console.info('### routeData = ', routeData);
      });
    }
  }
}
