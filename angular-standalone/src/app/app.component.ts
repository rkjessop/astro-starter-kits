import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AstroComponentsModule } from '@astrouxds/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AstroComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  //schemas: [NO_ERRORS_SCHEMA /*CUSTOM_ELEMENTS_SCHEMA*/]
  // imports: [BrowserModule, FormsModule, AstroComponentsModule],  
})
export class AppComponent {
  title = 'angular-standalone'; // TODO: unnecessary?  It is in package.json and elsewhere.
  systemClassification = "UNCLASSIFIED";
  applicationAbbreviation = "NG OMW";
  applicationName = "NG Orbital Mechanics Workbench";
  version = "0.1";

  menuSelect(e: CustomEvent) {
    console.error('##### >menuSelect:e = ', e);
    const { detail } = e;
    if (detail.value === 'notImplemented') {
      console.error('##### b');
      // addToast('This feature has not been implemented', false, 3000);
      return;
    }
    if (detail.value === 'themeToggle') {
      console.error('##### a');
      // setLightTheme(!lightTheme);
      // document.body.classList.toggle('light-theme');
      return;
    }
  }  
}
