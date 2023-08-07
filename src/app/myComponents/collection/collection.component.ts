import { Component, OnInit } from '@angular/core';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { Products } from 'src/app/interface/products.interface';
import { ApisService } from 'src/app/services/apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  products: Products[] = []
  filterProducts: Products[] =[]
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


  constructor(private apiService: ApisService, private router: Router){}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(data => this.products = data)
  }

  filter(language:string){
   const product = this.apiService.getProducts().subscribe(response => {
    this.filterProducts = response.filter(response => response.language === language)
   })

   return product
  }

  allBooks(){
    return this.apiService.getProducts().subscribe(data => this.filterProducts = data)
  }

  addItems(product: Products){
  // console.log("product", product)
  return this.apiService.addProducts(product).subscribe(response =>{
    if(response){
      this.router.navigate(["/cart"])
    }else{
      alert("Add to cart Fail")
    }
  })
 }

  getInfo(link: string): void {
    openLink(link);
  }

}

function openLink(link: string): void {
  window.open(link, '_blank');
}
