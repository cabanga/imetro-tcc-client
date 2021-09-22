import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private form: FormBuilder) { }

  loginForm = this.form.group({
    email: ['', [Validators.email, Validators.required]],
    senha: ['', [Validators.required]],
  })

  onSubmit() {
    this.loginForm.valid
    console.log(this.loginForm.value)
    console.log(this.loginForm.get('email')?.errors)


  }



}
