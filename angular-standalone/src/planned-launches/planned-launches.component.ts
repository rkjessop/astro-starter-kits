import { Component } from '@angular/core';
import { AngularLibComponent, AstroComponentsModule, RuxContainer } from '@astrouxds/angular';
import { LaunchListComponent } from "../launch-list/launch-list.component";

@Component({
    selector: 'app-planned-launches',
    standalone: true,
    templateUrl: './planned-launches.component.html',
    styleUrl: './planned-launches.component.scss',
    imports: [AstroComponentsModule, LaunchListComponent]
})
export class PlannedLaunchesComponent {

  plannedLaunches = [1,2,3];
}
