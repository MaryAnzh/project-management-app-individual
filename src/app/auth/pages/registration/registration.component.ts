import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/utils/CustomValidators';

import { AuthService } from '../../service/auth-service/auth.service';

import { IUserRegistrationData } from 'src/app/core/model/user.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [
    './registration.component.scss',
    '../form.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)'})),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(500),
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateX(100%)' })),
      ])
    ]),
    trigger('openClose', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('.3s ease-out', style({ height: 84, opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: 84, opacity: 1 }),
        animate('.3s ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})

export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        Validators.maxLength(30)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        CustomValidators.passwordValidator(),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
      ]),
    },
      {
        validators: (control) => {
          if (control.value.password !== control.value.confirmPassword) {
            (<AbstractControl>control.get('confirmPassword')).setErrors({ notSame: true });
          }
          return null
        }
      }
    );
  }

  get userName(): AbstractControl {
    return <AbstractControl>this.registrationForm.get('userName');
  }

  get email(): AbstractControl {
    return <AbstractControl>this.registrationForm.get('email');
  }

  get password(): AbstractControl {
    return <AbstractControl>this.registrationForm.get('password');
  }

  get confirmPassword(): AbstractControl {
    return <AbstractControl>this.registrationForm.get('confirmPassword');
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {

      const userData: IUserRegistrationData = {
        name: this.registrationForm.value.userName,
        login: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
      };
      this.authService.registration(userData);
    }
  }
}
