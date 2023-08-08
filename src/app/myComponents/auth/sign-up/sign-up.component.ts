import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  // pass the fields to hit
  name?: string
  email?: string
  password?: string

  constructor(private apiService: ApisService, private router: Router) { }

  // Submitting the form
  onSubmit() {

    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    }

    if (!this.name || !this.email || !this.password) {
      alert("Please fill the credentials")
      return;
    }
    if (this.password && this.password.length < 4) {
      alert("Password should be atleast of 5 character")
    } else {
      this.apiService.register(user).subscribe(authToken => {
        if (authToken) {
          // console.log('Authentication Token:', authToken);
          this.router.navigate(["/home"])
        } else {
          console.log('Login failed');
        }
      })
    }
  }
}
