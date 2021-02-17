import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import Swal from 'sweetalert2';
import {AuthServiceService} from '../../@Core/Data/Service/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: Observable<boolean>;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    ) {
  }

  ngOnInit(): any {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logOut(): any {
    Swal.fire({
      title: '¿Desea cerrar sesión?',
      text: '',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonColor: '#C33764',
      cancelButtonText: 'No',
      confirmButtonColor: '#1D2671',
      confirmButtonText: 'Si',
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then(tkn => {
      if (tkn.value) {
        Swal.fire({
          title: 'Sesión cerrada',
          text: '',
          icon: 'success',
          confirmButtonColor: '#1D2671',
          confirmButtonText: 'Ok',
          allowOutsideClick: false,
          allowEscapeKey: false,
        }).then(resp => {
          if (resp.value) {
            this.authService.logout();
            this.router.navigate(['login']);
          }
        });
      } else {
        Swal.fire({
          title: 'Sigues en línea',
          text: '',
          icon: 'info',
          confirmButtonColor: '#1D2671',
          confirmButtonText: 'Ok',
          allowOutsideClick: false,
          allowEscapeKey: false,
        });
      }
    });
  }
}
