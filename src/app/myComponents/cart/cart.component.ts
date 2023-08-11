import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Items } from 'src/app/interface/items.interface';
import { ApisService } from 'src/app/services/apis.service';
import { ToastrService } from "ngx-toastr"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // pass the items to iterate the fetch data in html
  items: Items[] = []
  public cartItemsLength?: number = 0;

  // fontawesome icons 
  faTrashAlt = faTrashAlt

  constructor(private apiService: ApisService, private cdr: ChangeDetectorRef, private toast: ToastrService) {}

  // get Items and add some functions like add the amount and display it
  ngOnInit():void{
    this.apiService.getItems().subscribe(response => this.items = response)
  }

  getAbsoluteValue(number: number | undefined): number {
    if (number === undefined) {
      return 0;
    }
    return Math.abs(number);
  }
  
  calculateAmount(){
    const totalAmount = this.items.map(data => data.amount).reduce((acc:any, item: any) => (acc += item), 0).toFixed(2);

    return totalAmount
  }

  // condition applied in it 
  isLoggedIn(){
    const token = localStorage.getItem('token');
    return !!token; 
  }

  // Delete the items and update the length of the items
  deleteBtn(id?:string){
    return this.apiService.deleteProducts(id).subscribe(response => {
        this.items = this.items.filter(data => data._id !== id)
        this.toast.success("Book Removed")
        this.updateCartItemsLength()
      })
  
  }
  updateCartItemsLength() {
    this.cartItemsLength = this.items && this.items.length;
    this.cdr.detectChanges()
  }

}
