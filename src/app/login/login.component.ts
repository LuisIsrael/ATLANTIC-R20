import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  register(): void {
    const loginVar = document.getElementById('login');
    const registerVar = document.getElementById('register');
    const buttonVar = document.getElementById('btn');
    loginVar.style.left = '-400px';
    registerVar.style.left = '50px';
    buttonVar.style.left = '110px';
  }

  login(): void {
    const loginVar = document.getElementById('login');
    const registerVar = document.getElementById('register');
    const buttonVar = document.getElementById('btn');
    loginVar.style.left = '50px';
    registerVar.style.left = '450px';
    buttonVar.style.left = '0px';
  }
  registerButton(): void {
    this.route.navigate(['/home']);
  }
  loginButton(): void {
    this.route.navigate(['/home']);
  }
}
