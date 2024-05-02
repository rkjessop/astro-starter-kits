import { Component } from '@angular/core';
import { AstroComponentsModule } from '@astrouxds/angular';

enum Buttons {
  WEB_SITES
  , TBD
}

@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [
    AstroComponentsModule
  ],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss'
})
export class TabBarComponent {

  Buttons = Buttons;

  handleSelectedTab(selection: Buttons) {
    console.error('##### >onSelect:selection = ', selection);

    switch (selection) {
      case Buttons.WEB_SITES: {
        console.error('##### WS');
      } break;

      case Buttons.TBD: {
        console.error('##### TBD');
      }
    }
  }
}
