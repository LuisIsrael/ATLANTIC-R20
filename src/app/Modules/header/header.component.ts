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
  public lector = false;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    ) {
  }

  ngOnInit(): any {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  openMenu(): void {}

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

  activeSpeaker(): void {
    this.lector = !this.lector;
    if (this.lector) {
      window.addEventListener('mouseup', this.texToSpeach);
    } else {
    }
  }

  texToSpeach = () => {
    if (this.lector && window.speechSynthesis && window.getSelection()) {
      const availableVoices = window.speechSynthesis.getVoices();
      let spanishVoice: any;

      for (let i = 0; i < availableVoices.length; i++) {
        if (availableVoices[i].lang === 'es-MX') {
          spanishVoice = availableVoices[i];
          break;
        }
      }
      if (spanishVoice === null) {
        spanishVoice = availableVoices[0];
      }
      window.speechSynthesis.cancel();
      const boquita = new SpeechSynthesisUtterance();
      boquita.rate = 1;
      boquita.pitch = 0.9;
      boquita.voice = spanishVoice;
      boquita.text = window.getSelection().toString();
      window.speechSynthesis.speak(boquita);
    }
  }
}
