import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  msjALert;
  model: any = {};
  submitted = false;
  registerForm: FormGroup;

  constructor(private authService: AuthService) {
      this.model.email = '';
      this.model.pass = '';
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
        'email': new FormControl(this.model.email, Validators.required),
        'pass': new FormControl(this.model.pass, Validators.required)
    });
  }

  public registro() {
      this.authService.registro(this.model.email, this.model.pass)
                .then(response => {
                    console.log(response);
                    this.msjALert = 'Usuario registrado con exito';
                })
                .catch(error => {
                    console.log(error);
                    this.msjALert = 'Ocurrio un error';
                });
  }
  onSubmit() { this.submitted = true; }

  get email() {
      return this.registerForm.get('email');
  }
  get pass() {
      return this.registerForm.get('pass');
  }
}
