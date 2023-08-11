import { Component, OnInit } from '@angular/core';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { Products } from 'src/app/interface/products.interface';
import { ApisService } from 'src/app/services/apis.service';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr"

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  // create an instance to iterate the data in the html component
  products: Products[] = []
  filterProducts: Products[] =[]
  productDetails: any = [] 

  // fontawesome icons
  faReadme = faReadme

  // owl carousel custom options 
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


  constructor(private apiService: ApisService, private router: Router, private toast: ToastrService){}

  // Getting all the products
  ngOnInit(): void {
    this.apiService.getProducts().subscribe(data => this.products = data)
  }

  // filtering function for filter out the language and getting all the books
  filter(language:string){
   const product = this.apiService.getProducts().subscribe(response => {
    this.filterProducts = response.filter(response => response.language === language)
   })

   return product;
  }

  allBooks(){
    return this.apiService.getProducts().subscribe(data => this.filterProducts = data)
  }

  // AddProducts in the database and show in the html side to
  addItems(product: Products){
  // console.log("product", product)
  return this.apiService.addProducts(product).subscribe(response =>{
    if(response){
      this.router.navigate(["/cart"])
      this.toast.success("Book Added")
    }else{
     this.toast.warning("Book Add Fail, Try Again")
    }
  })
 }

//  getInfo about the books functions
  getInfo(link: string): void {
    openLink(link);
  }
}

function openLink(link: string): void {
  window.open(link, '_blank');
}
