import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AstroComponentsModule } from '@astrouxds/angular';
import { RuxBreadcrumbItem } from '@astrouxds/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subject } from 'rxjs';

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

  items$ = new Subject<any[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute
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

          if (event instanceof NavigationEnd) {
            const specificEvent: NavigationEnd = event;
            // console.info('### specificEvent = ', specificEvent);
            // console.error('##### router = ', this.router);

            switch (specificEvent.url) {
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
        console.info('### routeData = ', routeData);
      });
    }
  }

  onClick(mouseEvent: MouseEvent) {
    console.info('!!! ### >onClick:event.target = ', mouseEvent);
    mouseEvent.preventDefault(); // prevent page reload

    const item = mouseEvent.target;// as unknown as RuxBreadcrumbItem;
    console.error('##### item = ', item);
    // console.info('### item.type = ', typeof item);
    // console.info('### item.keys = ', Object.keys(item));
    console.error('##### router = ', this.router);
    console.error('##### router.config = ', this.router.config);
    // console.error('##### router.isActive = ', this.router.isActive);
    // console.error('##### router.routerState = ', this.router.routerState);
    console.error('##### route = ', this.route);


    // switch (specificEvent.url) {
    //   case '/app-workbench-dashboard': this.items$.next(['Dashboard']); break;
    //   case '/app-launch-details': this.items$.next(['Dashboard', 'Launch Details']); break;
    // }

    // this.router.navigate([(event.target as unknown as RuxBreadcrumbItem).href]);
  }
}
