import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AstroComponentsModule } from '@astrouxds/angular';
import { LaunchListComponent } from '../launch-list/launch-list.component';

const selectorName = 'app-launch-details';

@Component({
  selector: selectorName,
  standalone: true,
  imports: [
    AstroComponentsModule
    , CommonModule
    , LaunchListComponent
    , RouterOutlet    
  ],
  templateUrl: './launch-details.component.html',
  styleUrl: './launch-details.component.scss'
})
export class LaunchDetailsComponent {

  static selectorName = selectorName;

  state: any;

  constructor(
    private router: Router
  ) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
  }
}
