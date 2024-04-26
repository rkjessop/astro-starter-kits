import { Component, ElementRef } from '@angular/core';
import { MyCounterComponent } from '../my-counter/my-counter.component';
import { PlannedLaunchesComponent } from '../planned-launches/planned-launches.component';

const selectorName = 'app-workbench-dashboard';

/**
 * is the home page.  The dashboard should show relevant system states and statuses.
 */
@Component({
  selector: selectorName,
  standalone: true,
  imports: [WorkbenchDashboardComponent, MyCounterComponent, PlannedLaunchesComponent],
  templateUrl: './workbench-dashboard.component.html',
  styleUrl: './workbench-dashboard.component.scss'
})
export class WorkbenchDashboardComponent {

  static selectorName = selectorName;
}
