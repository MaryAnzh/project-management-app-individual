import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUseLoginData } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../form.scss']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
  ) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required
      ]),
    });
  }

  get email(): AbstractControl {
    return <AbstractControl>this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return <AbstractControl>this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {

      const userData: IUseLoginData = {
        login: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      console.log('userData');
      console.log(userData);

      //this.authService.login(userData);
    }
  }

}
