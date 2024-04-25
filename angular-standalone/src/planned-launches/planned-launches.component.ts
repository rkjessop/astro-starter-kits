import { Component } from '@angular/core';
import { AngularLibComponent, AstroComponentsModule, RuxContainer } from '@astrouxds/angular';
import { LaunchListComponent } from "../launch-list/launch-list.component";
import { partition } from 'lodash';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-planned-launches',
    standalone: true,
    templateUrl: './planned-launches.component.html',
    styleUrl: './planned-launches.component.scss',
    imports: [
      AstroComponentsModule
      , CommonModule
      , LaunchListComponent
      , RouterOutlet
    ]
})
export class PlannedLaunchesComponent {

  count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
  }
}
