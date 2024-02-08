import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IMAGE_CONSTANTS } from 'src/app/constants';

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
imagePaths= IMAGE_CONSTANTS

  constructor() { }

  ngOnInit() {
  }

}
