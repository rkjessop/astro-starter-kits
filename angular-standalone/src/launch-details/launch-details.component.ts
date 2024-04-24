import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AstroComponentsModule } from '@astrouxds/angular';
import { LaunchListComponent } from '../launch-list/launch-list.component';

@Component({
  selector: 'app-launch-details',
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

}
