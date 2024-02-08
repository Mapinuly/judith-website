import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-cards-carousel',
  templateUrl: './cards-carousel.component.html',
  styleUrls: ['./cards-carousel.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CardsCarouselComponent implements OnInit {

  constructor(private cardService:CardService) { }
  cards:any[]=[];


    slideConfig = {
      autoplay: true, 
      autoplaySpeed: 3000, 
    };
    
    ngOnInit() {
    this.cardService.getCards().subscribe((data:any) => {
      if (data) {
        this.cards = data;
      }
    });
  }
    }

