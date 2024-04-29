import { ActivatedRoute, ActivatedRouteSnapshot, GuardResult, RouterStateSnapshot, Routes } from '@angular/router';
import { LaunchDetailsComponent } from '../launch-details/launch-details.component';
import { WorkbenchDashboardComponent } from '../workbench-dashboard/workbench-dashboard.component';

export function canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): GuardResult {
  return true;
}

export const routes: Routes = [
  { 
    path: ''
    , redirectTo: WorkbenchDashboardComponent.selectorName
    , pathMatch: 'full'
  }
  , { 
    path: WorkbenchDashboardComponent.selectorName
    , component: WorkbenchDashboardComponent
    , children: []
    , canActivate: [canActivate]
  }
  , {
    path: LaunchDetailsComponent.selectorName
    , component: LaunchDetailsComponent
    , children: []
    , canActivate: [canActivate]
  }
];
