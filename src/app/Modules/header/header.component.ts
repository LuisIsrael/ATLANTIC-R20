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
  btnDepartamentos = document.getElementById('btn-departamentos');
  btnCerrarMenu = document.getElementById('btn-menu-cerrar');
  grid = document.getElementById('grid');
  contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav');
  contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias');
  esDispositivoMovil = () => window.innerWidth <= 800;

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

//   megaMenuActions(): any {
//     this.btnDepartamentos.addEventListener('mouseover', () => {
//       if (!this.esDispositivoMovil()){
//         this.grid.classList.add('activo');
//       }
//     });
//
//     this.grid.addEventListener('mouseleave', () => {
//       if (!this.esDispositivoMovil()){
//         this.grid.classList.remove('activo');
//       }
//     });
//
//     document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
//       elemento.addEventListener('mouseenter', (e) => {
//         if (!this.esDispositivoMovil()){
//           document.querySelectorAll('#menu .subcategoria').forEach((categoria: Element) => {
//             categoria.classList.remove('activo');
//             if (categoria.this.dataset.categoria === e.target.this.dataset.categoria){
//               categoria.classList.add('activo');
//             }
//           });
//         };
//       });
//     });
//
// // EventListeners para dispositivo movil.
//     document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
//       e.preventDefault();
//       if (this.contenedorEnlacesNav.classList.contains('activo')){
//         this.contenedorEnlacesNav.classList.remove('activo');
//         document.querySelector('body').style.overflow = 'visible';
//       } else {
//         this.contenedorEnlacesNav.classList.add('activo');
//         document.querySelector('body').style.overflow = 'hidden';
//       }
//     });
//
// // Click en boton de todos los departamentos (Para version movil).
//     this.btnDepartamentos.addEventListener('click', (e) => {
//       e.preventDefault();
//       this.grid.classList.add('activo');
//       this.btnCerrarMenu.classList.add('activo');
//     });
//
// // Boton de regresar en el menu de categorias
//     document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
//       e.preventDefault();
//       this.grid.classList.remove('activo');
//       this.btnCerrarMenu.classList.remove('activo');
//     });
//
//     document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
//       elemento.addEventListener('click', (e) => {
//         if (this.esDispositivoMovil()){
//           this.contenedorSubCategorias.classList.add('activo');
//           document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
//             categoria.classList.remove('activo');
//             if(categoria.this.dataset.categoria === e.target.this.dataset.categoria){
//               categoria.classList.add('activo');
//             }
//           });
//         }
//       });
//     });
//
// // Boton de regresar en el menu de categorias
//     document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
//       boton.addEventListener('click', (e) => {
//         e.preventDefault();
//         this.contenedorSubCategorias.classList.remove('activo');
//       });
//     });
//
//     this.btnCerrarMenu.addEventListener('click', (e) => {
//       e.preventDefault();
//       document.querySelectorAll('#menu .activo').forEach((elemento) => {
//         elemento.classList.remove('activo');
//       });
//       document.querySelector('body').style.overflow = 'visible';
//     });
//   }
}
