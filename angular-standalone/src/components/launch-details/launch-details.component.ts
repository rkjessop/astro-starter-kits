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

  athlete: any;
  readonly = false;

  state: any;
  fields = [
    {field: 'athlete', label: 'Athlete', required: true, type: 'text'}
    , {field: 'age', label: 'Age', required: false, type: 'number'}
    , {field: 'country', label: 'Country', required: true, type: 'text'}
    , {field: 'year', label: 'Year', required: false, type: 'number'}
    , {field: 'date', label: 'Date', required: false, type: 'text'}
    , {field: 'sport', label: 'Sport', required: false, type: 'text'}
    , {field: 'gold', label: '# Gold', required: false, type: 'number'}
    , {field: 'silver', label: '# Silver', required: false, type: 'number'}
    , {field: 'bronze', label: '# Bronze', required: false, type: 'number'}
    , {field: 'total', label: '# Total', required: false, type: 'number'}
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
