import { Routes } from '@angular/router';
import { LaunchDetailsComponent } from '../launch-details/launch-details.component';
import { WorkbenchDashboardComponent } from '../workbench-dashboard/workbench-dashboard.component';

export const routes: Routes = [
  { path: 'app-workbench-dashboard', component: WorkbenchDashboardComponent}
  , { path: 'app-launch-details', component: LaunchDetailsComponent}
  // { path: '', redirectTo:'app-launch-details', pathMatch: 'full'}
];
