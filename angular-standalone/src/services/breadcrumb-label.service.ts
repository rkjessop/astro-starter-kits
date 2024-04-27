import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { getBreadcrumbPath, IBreadcrumb, IBreadCrumbLabelService } from '@ngserveio/navigation';
import { LaunchDetailsComponent } from '../components/launch-details/launch-details.component';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { cloneDeep } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbLabelService implements IBreadCrumbLabelService {

  constructor(
    private router: Router
  ) {
    // console.info('### router = ', router);
  }

  public getLaunchDetails(id: string): LaunchDetailsComponent | null {
    return null;
  }

  getCrumb(route: ActivatedRouteSnapshot): IBreadcrumb {
    const r: ActivatedRouteSnapshot = cloneDeep(route);
    console.error('!!! ##### r = ', r);
    console.error('!!! ##### r.params = ', r.params);
    console.error('!!! ##### r.pathFromRoot = ', r.pathFromRoot.toString());
    // console.error('!!! ##### route = ', route);
    console.error('!!! ##### route.params = ', route.params); // https://youtu.be/iPDJJpkZodA?si=o3sUFQrpJjW3PGE9
    console.error('!!! ##### path = ', getBreadcrumbPath(route));
    const sub = new BehaviorSubject<string>('asdf');
    return {
      path: getBreadcrumbPath(route),
      label: sub.asObservable()
    };
  }
}
