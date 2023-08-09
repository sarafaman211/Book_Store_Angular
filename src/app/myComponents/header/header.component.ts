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
  // values pass in the header component
  public title: string = "Book_Store"
  private isPopupOpen: boolean = false
  public items?: Items[] = []
  public cartItemsLength?: number = 0;

  // fontawesome icons used in header component
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt
  faCartShopping = faCartPlus
  faUser = faUser

  constructor(private apiService: ApisService, private dialogRef: MatDialog) {}

  // calling the functions
  ngOnInit(): void {
    this.getItems()
    this.apiService.getCartItemsLength().subscribe(length => {
      this.cartItemsLength = length;
    });
  }

  // get Items and update the length of the data in the cart section
  getItems() {
    return this.apiService.getItems().subscribe(response => {
      this.items = response
     this.cartItemsLength = response.length
    })
  }

  // login and Logout functionality
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  // to open the dialog Profile component
  openProfilePopup(): void {
    if (!this.isPopupOpen) {
      this.apiService.getDetails().subscribe(userData => {
        // To open the dialog box
        this.dialogRef.open(ProfileComponent, {
          // passing the data so we can use and iterate the data in profile box
          data: userData
        })
      })
    }

    this.dialogRef.afterAllClosed.subscribe((result: any) => {
      this.isPopupOpen = false;
    });


  }
}
