import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  // Using Reactive Forms here 
  // pass the fields to hit
  public signUpForm: FormGroup;
  public errorMessage: string = ""

  // use form builder 
  constructor(private apiService: ApisService, private router: Router, private formbuilder: FormBuilder) {
    this.signUpForm = this.formbuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(`[a-zA-Z].*`)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    })

  }

  // pass the fields to the html component
  get name(): FormControl {
    return this.signUpForm.get('name') as FormControl
  }

  get email(): FormControl {
    return this.signUpForm.get('email') as FormControl
  }

  get password(): FormControl {
    return this.signUpForm.get('password') as FormControl
  }

  // Submitting the form
  onSubmit() {

    const user = this.signUpForm.value;

    if (this.signUpForm.valid) {
      this.apiService.register(user).subscribe(authToken => {
        if (authToken) {
          this.router.navigate(['/home']);
          this.errorMessage = ""
        } else {
          console.log('Login failed');
        }
      })
    } else {
      this.errorMessage = "Please fill out all required fields and correct any errors."
    }

  }

}