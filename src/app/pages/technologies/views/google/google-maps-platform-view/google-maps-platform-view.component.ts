import { Component, OnInit } from '@angular/core';

interface TechnolgyItem {
  title: string;
  desc: string;
  img: string;
}

@Component({
  selector: 'app-google-maps-platform-view',
  templateUrl: './google-maps-platform-view.component.html',
  styleUrls: ['./google-maps-platform-view.component.scss']
})
export class GoogleMapsPlatformViewComponent implements OnInit {

  mapsSectionTitle: string = "";
  mapsSectionDesc: string = "";

  routesSectionTitle: string = '';
  routesSectionDesc: string = '';

  placesSectionTitle: string = '';
  placesSectionDesc: string = '';

  mapsItems: TechnolgyItem[] = [
    {
      title: 'Maps',
      desc: 'Customize and style interactive maps using Cloud-based maps styling for real time updates across all devices and platforms.',
      img: "http://localhost:4000/gogis/api/assets/images?name=google-map-sample.jpg"
    },
    {
      title: 'Street view',
      desc: 'Embed real-world imagery with 360° panoramas.',
      img: "http://localhost:4000/gogis/api/assets/images?name=google-maps-street-view.jpg"
    },
    {
      title: 'Elevation',
      desc: 'Provide a simple interface to query locations on the earth for elevation data.',
      img: "http://localhost:4000/gogis/api/assets/images?name=google-maps-elevation.jpg"
    }
  ];

  routesItems: TechnolgyItem[] = [
    {
      title: 'Directions',
      desc: "Provide directions for transit, biking, driving, or walking between multiple locations.",
      img: "http://localhost:4000/gogis/api/assets/images?name=google-maps-directions.jpeg"
    },
    {
      title: 'Distance Matrix',
      desc: "Calculate travel times and distances for multiple destinations.",
      img: "http://localhost:4000/gogis/api/assets/images?name=google-maps-distance-matrix.jpeg"
    },
    {
      title: 'Routes',
      desc: "Plan routes with a performance-optimized version of Directions and Distance Matrix with advanced routing capabilities.",
      // img: "http://localhost:4000/gogis/api/assets/images?name=google-maps-routes.jpeg"
      img: "http://localhost:4000/gogis/api/assets/images?name=google-maps-routes2.jpeg"
    }
  ];

  placesItems: TechnolgyItem[] = [
    {
      title: 'Geocoding',
      desc: "Convert addresses to geographic coordinates or the reverse.",
      img: "http://localhost:4000/gogis/api/assets/images?name=google-maps-geacoding.jpg"
    },
    {
      title: 'Geolocation',
      desc: "Return the location of a device without relying on GPS, using geospatial data from cell towers and WiFi nodes.",
      img: "http://localhost:4000/gogis/api/assets/images?name=google-maps-geolocation.jpg"
    },
    {
      title: 'Place Photos',
      desc: "Access millions of place-related photos stored in Google's Places database.",
      img: "http://localhost:4000/gogis/api/assets/images?name=google-maps-place-photos.jpeg"
    }
    // ,
    // {
    //   title: 'Time Zone',
    //   desc: "Get the time zone for a specific latitude and longitude coordinate.",
    //   img: "http://localhost:4000/gogis/api/assets/images?name=google-maps-time-zone.jpg"
    // }
  ];

  constructor() { }

  ngOnInit() {
  }

  setMapsSection(item: TechnolgyItem) {
    this.mapsSectionTitle = item.title;
    this.mapsSectionDesc = item.desc;
  }
  resetMapsSection() {
    this.mapsSectionTitle = '';
    this.mapsSectionDesc = '';
  }

  setRoutesSection(item: TechnolgyItem) {
    this.routesSectionTitle = item.title;
    this.routesSectionDesc = item.desc;
  }
  resetRoutesSection() {
    this.routesSectionTitle = '';
    this.routesSectionDesc = '';
  }
  setPlacesSection(item: TechnolgyItem) {
    this.placesSectionTitle = item.title;
    this.placesSectionDesc = item.desc;
  }
  resetPlacesSection() {
    this.placesSectionTitle = '';
    this.placesSectionDesc = '';
  }

}
