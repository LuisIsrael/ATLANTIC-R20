import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {AuthServiceService} from '../@Core/Data/Service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuariosFormGroup: FormGroup;
  emailRegExp = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  empleado = {};
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceService,
  ) {}

  ngOnInit(): void {
    this.usuariosFormGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegExp)]],
      password: [null, [Validators.required]],
    });
  }

  submit(): void {
    if (!this.usuariosFormGroup.valid) {
      return;
    }
  }

  imprimirEmpleado(): void {
    this.empleado = this.usuariosFormGroup.value;
    if (this.usuariosFormGroup.valid) {
      // this.servicio.pEmployees(this.empleado).subscribe( (data: any) => {});
    } else {
    }
  }

  loginFunction(): any {
    this.authService.login();
  }
}
