import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';




@Component({
  selector: '.app-card-slide',
  templateUrl: './card-slide.component.html',
  styleUrls: ['./card-slide.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CardSlideComponent implements OnInit {

  @Input() cardTag: string;
  @Input() cardTitle: string;
  
  constructor() { }

  ngOnInit() {
  }

}
