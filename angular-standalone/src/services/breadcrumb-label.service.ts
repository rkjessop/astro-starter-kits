import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { getBreadcrumbPath, IBreadcrumb, IBreadCrumbLabelService } from '@ngserveio/navigation';
import { LaunchDetailsComponent } from '../components/launch-details/launch-details.component';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbLabelService implements IBreadCrumbLabelService {

  constructor() { }

  public getLaunchDetails(id: string): LaunchDetailsComponent | null {
    return null;
  }

  getCrumb(route: ActivatedRouteSnapshot): IBreadcrumb {
    console.error('!!! ##### route.params = ', route.params); // https://youtu.be/iPDJJpkZodA?si=o3sUFQrpJjW3PGE9
    console.error('##### path = ', getBreadcrumbPath(route));
    throw new Error('Method not implemented.');
  }
}
