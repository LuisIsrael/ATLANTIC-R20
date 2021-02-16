import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from '../@Core/Data/Service/auth-service.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {
  usuariosFormGroup: FormGroup;
  emailRegExp = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  empleado = {};
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceService,
  ) {}

  ngOnInit(): void {
    this.usuariosFormGroup = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      apellidos: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(this.emailRegExp)]],
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
