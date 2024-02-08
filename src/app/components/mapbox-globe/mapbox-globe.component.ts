import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapbox-globe',
  templateUrl: './mapbox-globe.component.html',
  styleUrls: ['./mapbox-globe.component.scss']
})
export class MapboxGlobeComponent implements OnInit {
  map: mapboxgl.Map;
  // The following values can be changed to control rotation speed:

  // At low zooms, complete a revolution every two minutes.
  secondsPerRevolution = 120;
  // Above zoom level 5, do not rotate.
  maxSpinZoom = 5;
  // Rotate at intermediate speeds between zoom levels 3 and 5.
  slowSpinZoom = 3;

  userInteracting = false;
  spinEnabled = true;

  constructor() { }

  ngOnInit() {
    this.map = this.setupMapboxMap();
    this.map.scrollZoom.disable();

    // Pause spinning on interaction
    this.map.on('mousedown', () => {
      this.userInteracting = true;
    });

    // Restart spinning the globe when interaction is complete
    this.map.on('mouseup', () => {
      this.userInteracting = false;
      this.spinGlobe();
    });

    // These events account for cases where the mouse has moved
    // off the map, so 'mouseup' will not be fired.
    this.map.on('dragend', () => {
      this.userInteracting = false;
      this.spinGlobe();
    });
    this.map.on('pitchend', () => {
      this.userInteracting = false;
      this.spinGlobe();
    });
    this.map.on('rotateend', () => {
      this.userInteracting = false;
      this.spinGlobe();
    });

    // When animation is complete, start spinning if there is no ongoing interaction
    this.map.on('moveend', () => {
      this.spinGlobe();
    });

    // this.spinGlobe();

  }

  setupMapboxMap(location: mapboxgl.LngLat = environment.mapbox.defaultLocation): mapboxgl.Map {

    let mapOptions: mapboxgl.MapboxOptions = {
      accessToken: environment.mapbox.accessToken,
      container: 'globe',
      // style: environment.mapbox.mapStyle,
      style: 'mapbox://styles/mapbox/satellite-v9',
      zoom: 1.5,
      center: location,
      logoPosition: "bottom-right",
      attributionControl: false,
      projection: { name: 'globe' }
    };

    let mapboxMap = new mapboxgl.Map(mapOptions);



    // Add Controllers to map
    // this.addMapControlers(mapboxMap);

    return mapboxMap;
  }

  spinGlobe() {
    const zoom = this.map.getZoom();
    if (this.spinEnabled && !this.userInteracting && zoom < this.maxSpinZoom) {
      let distancePerSecond = 360 / this.secondsPerRevolution;
      if (zoom > this.slowSpinZoom) {
        // Slow spinning at higher zooms
        const zoomDif =
          (this.maxSpinZoom - zoom) / (this.maxSpinZoom - this.slowSpinZoom);
        distancePerSecond *= zoomDif;
      }
      const center = this.map.getCenter();
      center.lng -= distancePerSecond;
      // Smoothly animate the map over one second.
      // When this animation is complete, it calls a 'moveend' event.
      this.map.easeTo({ center, duration: 1000, easing: (n) => n });
    }
  }
}
