import { Routes } from '@angular/router';
import { LaunchDetailsComponent } from '../components/launch-details/launch-details.component';
import { WorkbenchDashboardComponent } from '../components/workbench-dashboard/workbench-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: WorkbenchDashboardComponent.selectorName, pathMatch: 'full'} // redirect to the home page
  , { path: WorkbenchDashboardComponent.selectorName, component: WorkbenchDashboardComponent}
  , { path: LaunchDetailsComponent.selectorName, component: LaunchDetailsComponent}
];
