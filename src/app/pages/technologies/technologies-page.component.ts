import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Technology } from 'src/app/models/technology.model';
import {
  TechnologiesService,
  TechnologyTypes,
} from 'src/app/services/technologies.service';

@Component({
  selector: 'app-technologies-page',
  templateUrl: './technologies-page.component.html',
  styleUrls: ['./technologies-page.component.scss'],
})
export class TechnologiesPageComponent implements OnInit {
  technologyData: Technology;
  technologyType: TechnologyTypes;

  // backgroundImage = "http://localhost:4000/gogis/api/assets/images?name=background2.jpg";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private technologiesService: TechnologiesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let tech = params['technology'];
      console.log(tech);

      this.setTechnolgyType(tech);
      console.log(this.technologyType);

      // console.log("getTechnolgyType", this.getTechnolgyType);

      // if (this.technologyType) {

      this.technologyData = this.technologiesService.getTechnology(
        this.technologyType
      );

      // }
    });
  }

  setTechnolgyType(technology: string) {
    console.log(technology === 'google-maps');

    switch (technology) {
      case 'google-cloud':
        this.technologyType = TechnologyTypes.GoogleCloud;
        break;

      case 'google-maps':
        this.technologyType = TechnologyTypes.GoogleMaps;
        break;

      case 'google-workspace':
        this.technologyType = TechnologyTypes.GoogleWorkspace;
        break;

      case 'here':
        this.technologyType = TechnologyTypes.HERE;
        // this.backgroundImage = "http://localhost:4000/gogis/api/assets/images?name=here-banner-tecnolgy.jpg";
        break;

      // case 'mapbox':
      //   this.technologyType = TechnologyTypes.MapBox;
      //   break;

      case 'mapsindoors':
        this.technologyType = TechnologyTypes.MapsIndoors;
        break;

      // case 't-sciences':
      //   return TechnologyTypes
      //   break

      default:
        this.router.navigate(['/']);
        break;
    }
  }

  get Technologies() {
    return TechnologyTypes;
  }
}
