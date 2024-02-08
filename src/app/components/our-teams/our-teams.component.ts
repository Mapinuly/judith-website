import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { AppConfig } from 'src/config';

@Component({
  selector: 'app-our-teams',
  templateUrl: './our-teams.component.html',
  styleUrls: ['./our-teams.component.scss']
})

export class OurTeamsComponent implements OnInit {
  teamCards: any[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getOurTeamData().subscribe((response: any) => {
      if (response) {
        this.teamCards = response
      }
    })
  }
}
