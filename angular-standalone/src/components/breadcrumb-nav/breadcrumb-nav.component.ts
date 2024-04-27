import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AstroComponentsModule } from '@astrouxds/angular';
import { RuxBreadcrumbItem } from '@astrouxds/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BreadcrumbFactoryService, IBreadcrumb, IBreadCrumbLabelService, NgServeNavigationModule } from '@ngserveio/navigation';
import { Subject } from 'rxjs';
import { BreadcrumbLabelService } from '../../services/breadcrumb-label.service';
import { BREADCRUMB_LABEL_SERVICE } from '../app/app.component';

@UntilDestroy()
@Component({
  selector: 'app-breadcrumb-nav',
  standalone: true,
  imports: [
   AstroComponentsModule
   , BreadcrumbNavComponent
   , CommonModule
   , ReactiveFormsModule
   , NgServeNavigationModule
  ],
  templateUrl: './breadcrumb-nav.component.html',
  styleUrl: './breadcrumb-nav.component.scss'
})
export class BreadcrumbNavComponent {

  items$ = new Subject<any[]>;
  breadcrumbLabelService: IBreadCrumbLabelService;

  constructor(
    private factory: BreadcrumbFactoryService
    , private router: Router
    , private route: ActivatedRoute
  ) {

    // initialize state
    {
      this.breadcrumbLabelService = factory.getBreadcrumbLabelService(BREADCRUMB_LABEL_SERVICE);
    }

    // initialize router
    {
      this.router.setUpLocationChangeListener();
      this.router.events
        .pipe(untilDestroyed(this))
        .subscribe((event) => {
          // console.info('### event = ', event);

          if (event instanceof NavigationEnd) {
            const specificEvent: NavigationEnd = event;
            // console.info('### specificEvent = ', specificEvent);
            // console.error('##### router = ', this.router);
            const url = specificEvent.urlAfterRedirects ?? specificEvent.url;

            switch (url) {
              case '/app-workbench-dashboard': this.items$.next(['Dashboard']); break;
              case '/app-launch-details': this.items$.next(['Dashboard', 'Launch Details']); break;
            }
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

  onClick(mouseEvent: MouseEvent) {
    // console.info('!!! ### >onClick:event.target = ', mouseEvent);
    mouseEvent.preventDefault(); // prevent page reload

    const item = mouseEvent.target;// as unknown as RuxBreadcrumbItem;
    // console.error('##### item = ', item);
    // console.info('### item.type = ', typeof item);
    // console.info('### item.keys = ', Object.keys(item));
    // console.error('##### router = ', this.router);
    // console.error('##### router.config = ', this.router.config);
    // console.error('##### router.isActive = ', this.router.isActive);
    // console.error('##### router.routerState = ', this.router.routerState);
    // console.error('##### route = ', this.route);

    try {
      const bc: IBreadcrumb = this.breadcrumbLabelService.getCrumb(this.route.snapshot);
      console.info('############## bc = ', bc);
      bc.label.subscribe((x) => console.error('!!! X ###### x = ', x));

      // switch (specificEvent.url) {
      //   case '/app-workbench-dashboard': this.items$.next(['Dashboard']); break;
      //   case '/app-launch-details': this.items$.next(['Dashboard', 'Launch Details']); break;
      // }

      // this.router.navigate([(event.target as unknown as RuxBreadcrumbItem).href]);
    } catch (err) {
      console.error('##################################### err = ', err);
    }
  }
}
