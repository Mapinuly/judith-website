import { Component, Input, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/technology.model';

@Component({
  selector: 'app-technology-header',
  templateUrl: './technology-header.component.html',
  styleUrls: ['./technology-header.component.scss']
})
export class TechnologyHeaderComponent implements OnInit {

  @Input() technologyData: Technology;
  constructor() { }

  ngOnInit() {
  }

}
