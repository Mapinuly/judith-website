import { Component, OnInit } from '@angular/core';
import { IMAGE_CONSTANTS } from 'src/app/constants';
@Component({
  selector: 'app-represented-companies',
  templateUrl: './represented-companies.component.html',
  styleUrls: ['./represented-companies.component.scss']
})
export class RepresentedCompaniesComponent implements OnInit {
imagePaths=IMAGE_CONSTANTS
  constructor() { }

  ngOnInit() {
  }

}
