import { Component } from '@angular/core';
import { MyCounterComponent } from '../my-counter/my-counter.component';
import { PlannedLaunchesComponent } from '../planned-launches/planned-launches.component';

/**
 * is the home page.  The dashboard should show relevant system states and statuses.
 */
@Component({
  selector: 'app-workbench-dashboard',
  standalone: true,
  imports: [WorkbenchDashboardComponent, MyCounterComponent, PlannedLaunchesComponent],
  templateUrl: './workbench-dashboard.component.html',
  styleUrl: './workbench-dashboard.component.scss'
})
export class WorkbenchDashboardComponent {

}
