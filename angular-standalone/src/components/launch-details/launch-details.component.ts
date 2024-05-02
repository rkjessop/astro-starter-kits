import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AstroComponentsModule } from '@astrouxds/angular';
import { LaunchListComponent } from '../launch-list/launch-list.component';
import { FormsModule, NgForm } from '@angular/forms';

const selectorName = 'app-launch-details';

interface Field {
  label: string;
  required?: boolean;
}

@Component({
  selector: selectorName,
  standalone: true,
  imports: [
    AstroComponentsModule
    , CommonModule
    , LaunchListComponent
    , RouterOutlet
    , FormsModule
  ],
  templateUrl: './launch-details.component.html',
  styleUrl: './launch-details.component.scss'
})
export class LaunchDetailsComponent {

  @ViewChild('f') formChild!: NgForm;
  
  static selectorName = selectorName;

  readonly = false;

  state: any;
  fields = [
    {field: 'name', label: 'Name', required: true, type: 'text'}
    , {field: 'date', label: 'Date', required: true, type: 'text'}
    , {field: 'time', label: 'Time', required: true, type: 'text'}
    , {field: 'time zone', label: 'Time Zone', required: true, type: 'text'}
    , {field: 'site', label: 'Site', required: true, type: 'text'}
    , {field: 'description', label: 'Description', required: false, type: 'text'}
    , {field: 'last update', label: 'Last Update', required: false, type: 'text'}
  ];

  constructor(
    private router: Router
  ) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
    // console.error('##### this.state = ', this.state);
    // console.error('##### this.state.keys = ', Object.keys(this.state));
  }

  getField(field: string) {
    // console.error('##### field = ', field);
    const result = this.state[field];
    // console.error('##### result = ', result);
    return result;
  }

  onSubmit(form: NgForm) {
    console.error('##### >onSubmit');
    console.error('##### form = ', form);
    console.error('##### formChild = ', this.formChild);
  }
}
