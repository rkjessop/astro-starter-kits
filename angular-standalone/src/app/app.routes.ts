import { Routes } from '@angular/router';
import { LaunchDetailsComponent } from '../launch-details/launch-details.component';
import { WorkbenchDashboardComponent } from '../workbench-dashboard/workbench-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo:'app-workbench-dashboard', pathMatch: 'full'} // redirect to the home page
  , { path: 'app-workbench-dashboard', component: WorkbenchDashboardComponent}
  , { path: 'app-launch-details', component: LaunchDetailsComponent}
];
