import { Component, OnInit } from '@angular/core';
import { WehereService } from 'src/app/services/wehere.service';
import { AppConfig } from 'src/config';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  apiData:any

  constructor(private wehere:WehereService) { }

  ngOnInit() {
    this.getWeAreHeredata()
  }
  getWeAreHeredata(){
    this.wehere.whereData().subscribe((response:any)=>{
      this.apiData = response[0];
    })
  }

}
