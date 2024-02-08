import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { SynopsisService } from '../services/synopsis.service';
import { MatDialog } from '@angular/material/dialog';
import { ContactusDialogComponent } from '../contactus-dialog/contactus-dialog.component';
interface TechnolgyItem {
  title: string;
  desc: string;
  img: string;
}

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {
  apiData:any
  safeUrl:SafeResourceUrl
  
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
      img: "https://www.gogis.co.il/assets/img/google-map-sample.jpg"
    },
    {
      title: 'Street view',
      desc: 'Embed real-world imagery with 360° panoramas.',
      img: "https://www.gogis.co.il/assets/img/google-maps-street-view.jpg"
    },
    {
      title: 'Elevation',
      desc: 'Provide a simple interface to query locations on the earth for elevation data.',
      img: "https://www.gogis.co.il/assets/img/google-maps-elevation.jpg"
    }
  ];

  routesItems: TechnolgyItem[] = [
    {
      title: 'Directions',
      desc: "Provide directions for transit, biking, driving, or walking between multiple locations.",
      img: "https://www.gogis.co.il/assets/img/google-maps-directions.jpeg"
    },
    {
      title: 'Distance Matrix',
      desc: "Calculate travel times and distances for multiple destinations.",
      img: "https://www.gogis.co.il/assets/img/google-maps-distance-matrix.jpeg"
    },
    {
      title: 'Routes',
      desc: "Plan routes with a performance-optimized version of Directions and Distance Matrix with advanced routing capabilities.",
      // img: "http://localhost:4000/gogis/api/assets/images?name=google-maps-routes.jpeg"
      img: "https://www.gogis.co.il/assets/img/google-maps-routes2.jpeg"
    }
  ];
   openContactModal(){
    const dialogRef=this.matDialog.open(ContactusDialogComponent,{
      width:'1200px',
      height:'800px'
    });
  }

  placesItems: TechnolgyItem[] = [
    {
      title: 'Geocoding',
      desc: "Convert addresses to geographic coordinates or the reverse.",
      img: "https://www.gogis.co.il/assets/img/google-maps-geacoding.jpg"
    },
    {
      title: 'Geolocation',
      desc: "Return the location of a device without relying on GPS, using geospatial data from cell towers and WiFi nodes.",
      img: "https://www.gogis.co.il/assets/img/google-maps-geolocation.jpg"
    },
    {
      title: 'Place Photos',
      desc: "Access millions of place-related photos stored in Google's Places database.",
      img: "https://www.gogis.co.il/assets/img/google-maps-place-photos.jpeg"
    }
  ];

  constructor(public sanitizer:DomSanitizer, private synopsis:SynopsisService , private matDialog:MatDialog) { }

  ngOnInit(): void {
  this.synopsis.synopsisData().subscribe((result:any)=>{
    if(result){
      this.apiData=result[0];      
    }
})

    this.safeUrl=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/live/PUyK7_FIsyI?si=qhvAj8OeG4EglzS5')
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
