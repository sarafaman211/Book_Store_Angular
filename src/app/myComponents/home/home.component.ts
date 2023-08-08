import { Component, OnInit } from '@angular/core';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { faHeadset, faLock, faRedoAlt, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { Products } from 'src/app/interface/products.interface';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Products[]=[]
  faShippingFast = faShippingFast
  faLock = faLock
  faRedoAlt = faRedoAlt
  faHeadset = faHeadset
  faReadme = faReadme

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

  constructor(private apiService: ApisService){}

  ngOnInit(){
    this.apiService.getProducts().subscribe(
     response => this.products = response
  )}

  getInfo(link: string): void {
    openLink(link);
  }
}

function openLink(link: string): void {
  window.open(link, '_blank');
}
