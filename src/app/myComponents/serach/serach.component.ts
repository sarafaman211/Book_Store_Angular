import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';
  filteredProducts: any[] = [];

  constructor(private apiService: ApisService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(res => {
      this.products = res;
      this.filterProducts();
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

