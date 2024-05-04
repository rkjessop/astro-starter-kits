import { Component } from '@angular/core';
import { } from '@nasaworldwind/worldwind';

@Component({
  selector: 'app-worldwind-web',
  standalone: true,
  imports: [],
  templateUrl: './worldwind-web.component.html',
  styleUrl: './worldwind-web.component.css'
})
export class WorldwindWebComponent {

  const wwd = new WorldWindow("canvasOne");

  constructor() {
    wwd.addLayer(new WorldWind.BMNGOneImageLayer());
    wwd.addLayer(new WorldWind.BMNGLandsatLayer());
    
    wwd.addLayer(new WorldWind.CompassLayer());
    wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
    wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
  }
}
