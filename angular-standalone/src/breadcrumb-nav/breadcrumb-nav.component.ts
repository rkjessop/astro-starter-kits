import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AstroComponentsModule } from '@astrouxds/angular';
import { RuxBreadcrumbItem } from '@astrouxds/angular';

@Component({
  selector: 'app-breadcrumb-nav',
  standalone: true,
  imports: [
   AstroComponentsModule
   , BreadcrumbNavComponent
  ],
  templateUrl: './breadcrumb-nav.component.html',
  styleUrl: './breadcrumb-nav.component.scss'
})
export class BreadcrumbNavComponent {

  constructor(
    private router: Router
  ) {

  }

  onClick(event: MouseEvent) {
    console.error('##### >onClick:event.target = ', );
    event.preventDefault(); // prevent page reload

    const item = event.target as unknown as RuxBreadcrumbItem;
    console.error('##### item = ', item);
    console.error('##### router = ', this.router);

    // this.router.navigate([(event.target as unknown as RuxBreadcrumbItem).href]);
  }
}
