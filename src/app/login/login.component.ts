import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msjError= '';
  msjSuccess= '';
  registerForm: FormGroup;
  minLengthEmail = 6;
  model: any = {};

  constructor(private router: Router, private authService: AuthService) {
      this.model.email = '';
      this.model.pass = '';
  }

  ngOnInit() {
      this.registerForm = new FormGroup({
          'email': new FormControl(this.model.email, [
              Validators.required,
              Validators.email
          ]),
          'pass': new FormControl(this.model.pass, [
              Validators.required,
              Validators.minLength(this.minLengthEmail)
          ])
      });
  }

  login() {
    this.authService.login(this.model.email, this.model.pass)
        .then((response) => {
          console.log(response);
          setTimeout(() => {
            this.msjSuccess = '';
            this.router.navigateByUrl('/home');
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          if(error.code == 'auth/invalid-email'){
            this.msjError = 'Email invalido';
          }else if (error.code == 'auth/wrong-password'){
            this.msjError = 'Password incorrecta';
          }
          setTimeout(() => {
            this.msjError = '';
          }, 6000);
        });
  }
  loginWithFacebook() {
    this.authService.loginWithFacebook()
        .then((result) => {
          console.log(result);
            setTimeout(() => {
                this.msjSuccess = '';
                this.router.navigateByUrl('/home');
            }, 3000);
        })
        .catch((error) => {
            console.log(error);
            this.msjError = error.code;
            setTimeout(() => {
                this.msjError = '';
            }, 6000);
        });
  }
  get email() {
    return this.registerForm.get('email');
  }
  get pass() {
    return this.registerForm.get('pass');
  }
}
