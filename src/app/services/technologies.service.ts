import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technology } from '../models/technology.model';

export enum TechnologyTypes {
  GoogleMaps = 1,
  GoogleCloud = 2,
  GoogleWorkspace = 3,
  HERE = 4,
  MapsIndoors = 5,
  // MapBox = 5,
}

let technologiesData: Technology[] = [
  {
    technologyID: 'GoogleMaps ',
    technologyName: 'Google Maps Platform12121',
    summary:
      'As a Premium Google Maps Platform Partner for over a decade, we are experts in integrating and optimizing',
    technologylogo: 'http://localhost:4000/gogis/api/assets/images?name=google-maps-platform.svg',
  },
  {
    technologyID: 'GoogleCloud',
    technologyName: 'Google Cloud',
    summary: '',
    technologylogo: 'http://localhost:4000/gogis/api/assets/images?name=google-cloud.png',
  },
  {
    technologyID: 'GoogleWorkspace',
    technologyName: 'Google Workspace',
    summary: '',
    technologylogo: 'http://localhost:4000/gogis/api/assets/images?name=G.svg',
  },
  {
    technologyID: 'HERE',
    technologyName: 'HERE',
    summary: '',
    technologylogo: 'http://localhost:4000/gogis/api/assets/images?name=here.svg',
  },
  // { technologyID: "MapBox", technologyName: "MapBox", summary: "" ,technologylogo:""},
  {
    technologyID: 'MapsIndoors',
    technologyName: 'MapsIndoors',
    summary: '',
    technologylogo: '',
  },
];

@Injectable({
  providedIn: 'root',
})
export class TechnologiesService {
  constructor() // private http: HttpClient
  {}
  

  getTechnology(technology: TechnologyTypes): Technology | undefined {
    // console.log(technology, TechnologyTypes[technology]);

    //Todo! get from database by http client
    return technologiesData.find(
      (tech) => tech.technologyID === TechnologyTypes[technology]
    );
  }
}
