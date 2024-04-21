
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { AstroComponentsModule } from '@astrouxds/angular';
import { RouterOutlet } from '@angular/router';
import { PlannedLaunchesComponent } from '../planned-launches/planned-launches.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , RouterOutlet
    , BrowserModule
    , AstroComponentsModule
    , PlannedLaunchesComponent
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
