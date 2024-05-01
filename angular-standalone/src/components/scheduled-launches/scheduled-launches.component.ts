import { Component } from '@angular/core';
import { AngularLibComponent, AstroComponentsModule, RuxContainer } from '@astrouxds/angular';
import { LaunchListComponent } from "../launch-list/launch-list.component";
import { partition } from 'lodash';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-scheduled-launches',
    standalone: true,
    templateUrl: './scheduled-launches.component.html',
    styleUrl: './scheduled-launches.component.scss',
    imports: [
      AstroComponentsModule
      , CommonModule
      , LaunchListComponent
      , RouterOutlet
    ]
})
export class ScheduledLaunchesComponent {

  count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
  }
}
