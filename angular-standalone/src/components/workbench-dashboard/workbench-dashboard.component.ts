import { Component, ElementRef } from '@angular/core';
import { MyCounterComponent } from '../my-counter/my-counter.component';
import { ScheduledLaunchesComponent } from '../scheduled-launches/scheduled-launches.component';

const selectorName = 'app-workbench-dashboard';

/**
 * is the home page.  The dashboard should show relevant system states and statuses.
 */
@Component({
  selector: selectorName,
  standalone: true,
  imports: [WorkbenchDashboardComponent, MyCounterComponent, ScheduledLaunchesComponent],
  templateUrl: './workbench-dashboard.component.html',
  styleUrl: './workbench-dashboard.component.scss'
})
export class WorkbenchDashboardComponent {

  static selectorName = selectorName;
}
