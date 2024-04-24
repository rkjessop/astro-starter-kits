import { Routes } from '@angular/router';
import { LaunchDetailsComponent } from '../launch-details/launch-details.component';

export const routes: Routes = [
  { path: 'app-launch-details', component: LaunchDetailsComponent}
  // { path: '', redirectTo:'app-launch-details', pathMatch: 'full'}
];
