import { Component, ElementRef } from '@angular/core';
import { MyCounterComponent } from '../my-counter/my-counter.component';
import { ScheduledLaunchesComponent } from '../scheduled-launches/scheduled-launches.component';
import { WebSiteLauncherComponent } from '../web-site-launcher/web-site-launcher.component';
import { TabBarComponent } from '../tab-bar/tab-bar.component';

const selectorName = 'app-workbench-dashboard';

/**
 * is the home page.  The dashboard should show relevant system states and statuses.
 */
@Component({
  selector: selectorName,
  standalone: true,
  imports: [
    TabBarComponent
    , MyCounterComponent
    , ScheduledLaunchesComponent
    , WebSiteLauncherComponent
    , WorkbenchDashboardComponent
  ],
  templateUrl: './workbench-dashboard.component.html',
  styleUrl: './workbench-dashboard.component.scss'
})
export class WorkbenchDashboardComponent {

  static selectorName = selectorName;
}
