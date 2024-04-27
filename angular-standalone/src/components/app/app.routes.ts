import { ActivatedRoute, ActivatedRouteSnapshot, GuardResult, RouterStateSnapshot, Routes } from '@angular/router';
import { LaunchDetailsComponent } from '../launch-details/launch-details.component';
import { WorkbenchDashboardComponent } from '../workbench-dashboard/workbench-dashboard.component';
import { IBreadcrumbRouteConfig } from '@ngserveio/navigation';

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
    , data: {
      crumb: {
        label: 'xxx'
      } as IBreadcrumbRouteConfig
    }
    , children: []
    , canActivate: [canActivate]
  }
  , {
    path: LaunchDetailsComponent.selectorName
    , component: LaunchDetailsComponent
    , data: {
      crumb: {
        label: 'yyy'
      } as IBreadcrumbRouteConfig
    }
    , children: []
    , canActivate: [canActivate]
  }
];
