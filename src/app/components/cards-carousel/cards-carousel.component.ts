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

  // slideConfig = {
  //   slidesToShow: 3,
  //   arrows: false,
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed:2000,
  //   slidesPerRow:2,
  // };

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // Small devices (landscape phones, 576px and up)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576, // Extra small devices (portrait phones, less than 576px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
    
    ngOnInit() {
    this.cardService.getCards().subscribe((data:any) => {
      console.log(data,"data")
      if (data) {
        this.cards = data;
      }
    });
  }
    }

