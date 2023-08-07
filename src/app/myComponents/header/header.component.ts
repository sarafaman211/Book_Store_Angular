import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { Items } from 'src/app/interface/items.interface';
import { ApisService } from 'src/app/services/apis.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../auth/profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Book_Store"
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt
  faCartShopping = faCartPlus
  faUser = faUser
  items?: Items[] = []
  cartItemsLength?: number = 0;
  private isPopupOpen:boolean = false

  constructor(private apiService: ApisService, private dialogRef: MatDialog) { }

   ngOnInit(): void {
      this.apiService.getItems().subscribe(response => {
        this.items = response;
        this.updateCartItemsLength(); // Update the cart length here
      });
  }
  
  updateCartItemsLength(): void {
    this.cartItemsLength = this.items && this.items.length;
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  // to open the dialog Profile component
  openProfilePopup(): void {
    if (!this.isPopupOpen ){
     this.apiService.getDetails().subscribe(userData => {
       this.dialogRef.open(ProfileComponent, {
         data: userData
       })
     })
   }

   this.dialogRef.afterAllClosed.subscribe((result: any) => {
    this.isPopupOpen = false; 
  });


    }
}
