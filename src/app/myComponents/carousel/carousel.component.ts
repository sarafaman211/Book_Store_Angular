import { Component } from '@angular/core';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Client } from 'src/app/interface/client.interface';
import clients from 'src/assets/client';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides: Client[] = clients
  faStar = faStar
  faStarHalfAlt = faStarHalfAlt
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    // nav: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 2000, // Set the interval (in milliseconds)
  };
}
