import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  msjError = '';
  msjSuccess = '';
  model: any = {};
  registerForm: FormGroup;
  minLengthEmail = 6;

  constructor(private authService: AuthService, private router: Router) {
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

  registro() {
      this.authService.registro(this.model.email, this.model.pass)
                .then(response => {
                    console.log(response);
                    this.msjSuccess = 'Usuario registrado con exito';
                    setTimeout(() => {
                        this.msjSuccess = '';
                        this.router.navigateByUrl('/home');
                    }, 3000);
                })
                .catch(error => {
                    console.log(error);
                    if(error.code == 'auth/invalid-email'){
                        this.msjError = 'Email invalido';
                    }else if (error.code == 'auth/email-already-in-use') {
                        this.msjError = 'Email ya registrado';
                    }
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
