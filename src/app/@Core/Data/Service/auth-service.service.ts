import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn(): any {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(
    private router: Router
  ) {
    this.loggedIn.next(window.sessionStorage.getItem('logged') ? true : false);
  }

  login(): any {
    this.loggedIn.next(true);
    window.sessionStorage.setItem('logged', 'chi');
    this.router.navigate(['home']);
  }

  logout(): any {                            // {4}
    this.loggedIn.next(false);
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
