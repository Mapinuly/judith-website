import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { AppConfig } from 'src/config';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.scss']
})
export class PastEventsComponent implements OnInit {
  public BaseImg = AppConfig.baseImg;
  theApiRes:any
  constructor(private cardService:CardService) { }

  ngOnInit(): void {
    this.getEventCards()
  }
  getEventCards(){
    this.cardService.getPastEvents().subscribe((res:any)=>{
      console.log(res,"anyyy")
      this.theApiRes=res.data
      console.log(this.theApiRes,"apiiiii")
    })
  }

}
