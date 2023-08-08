import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

// using angular material diolog box
    constructor( @Inject(MAT_DIALOG_DATA) public userData: any,private dialogRef: MatDialog ){}
    
    closeBtn(){
      this.dialogRef.closeAll()
    }
}
