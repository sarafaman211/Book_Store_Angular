import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Hitting Forms with ngModel (template driven Form)
  // pass the fields to hit
  public email?: string
  public password?: string

  constructor(private apiService: ApisService, private router: Router, private toast: ToastrService ) { }

  // submitting the form
  onSubmit() {

    const user = {
      email: this.email,
      password: this.password
    }

    if (!this.email || !this.password) {
      this.toast.warning("Please fill in the credentials")
      return;
    }
    if (this.password && this.password?.length < 4) {
      alert("Password should be atlest of 5 character")
    } else {
      this.apiService.login(user).subscribe(authToken => {
        if (authToken) {
          // console.log('Authentication Token:', authToken);
          this.router.navigate(["/home"])
          this.toast.success("Login Success")
        } else {
          this.toast.warning("Please Fill the correct credentials")
        }
      })
    }

  }

}
