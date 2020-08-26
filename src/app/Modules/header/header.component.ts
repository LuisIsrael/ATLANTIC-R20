import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.menuAction();
  }
  menuAction(): void {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
      // ANIMATED LINKS
      navLinks.classList.toggle('open');
      links.forEach(link => {
        link.classList.toggle('fade');
      });
      // ANIMATION MENU
      hamburger.classList.toggle('toggle');
    });
  }
}
