import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/interface/products.interface';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // create an instance to pass the fetch data and iterate it in html component
  products: any;

  constructor(private apiService: ApisService, private route: ActivatedRoute, private router: Router){}

  // get the product id and then pass the product id in the api to fetch the product
  ngOnInit():void{
    this.route.params.subscribe((params?:any) => {
      const productId = params
      return this.apiService.getProductDetails(productId.id).subscribe(response => this.products = response)
    })
  }

  // add products
  addItems(product: any){
    return this.apiService.addProducts(product).subscribe(response =>{
      if(response){
        this.router.navigate(["/cart"])
      }else{
        alert("Add to cart Fail")
      }
    })
   }

}
