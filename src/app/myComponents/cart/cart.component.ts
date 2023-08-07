import { Component, OnInit } from '@angular/core';
import { faMoneyBill, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Items } from 'src/app/interface/items.interface';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Items[] = []
  faTrashAlt = faTrashAlt
  faMoneyBill = faMoneyBill

  constructor(private apiService: ApisService) {}

  ngOnInit():void{
    this.apiService.getItems().subscribe(response => this.items = response)
  }

  getAbsoluteValue(number: number | undefined): number {
    if (number === undefined) {
      return 0;
    }
    return Math.abs(number);
  }

  isLoggedIn(){
    const token = localStorage.getItem('token');
    return !!token; 
  }

  deleteBtn(id?:string){
    return this.apiService.deleteProducts(id).subscribe(response => {
      if(response._id === id){
        this.items = this.items.filter(data => {
          return data._id !== id
        })
      }
    })
  }

  calculateAmount(){
    const totalAmount = this.items.map(data => data.amount).reduce((acc:any, item: any) => (acc += item), 0).toFixed(2);

    return totalAmount
  }
}
