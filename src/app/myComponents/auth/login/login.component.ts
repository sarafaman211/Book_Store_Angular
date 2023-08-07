import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email?: string
  password?: string

  constructor(private apiService: ApisService, private router: Router) { }

  onSubmit() {
    const user = {
      email: this.email,
      password: this.password
    }

    if (!this.email || !this.password) {
      alert("Please fill in the credentials");
      return;
    }
    if (this.password && this.password?.length < 4) {
      alert("Password should be atlest of 5 character")
    } else {
      this.apiService.login(user).subscribe(authToken => {
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
