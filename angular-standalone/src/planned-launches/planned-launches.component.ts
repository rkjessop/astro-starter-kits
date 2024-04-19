import { Component } from '@angular/core';
import { AngularLibComponent, AstroComponentsModule, RuxContainer } from '@astrouxds/angular';
import { LaunchListComponent } from "../launch-list/launch-list.component";
import { partition } from 'lodash';

@Component({
    selector: 'app-planned-launches',
    standalone: true,
    templateUrl: './planned-launches.component.html',
    styleUrl: './planned-launches.component.scss',
    imports: [AstroComponentsModule, LaunchListComponent]
})
export class PlannedLaunchesComponent {

  plannedLaunches = [1,2,3];

  constructor() {
    console.error('##### sort = ', partition(this.plannedLaunches.sort(), (n: number) => { return n % 2; }));
  }
}
