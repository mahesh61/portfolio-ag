import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu() {
    const menu:any = document.querySelector(".menu-links");
    const icon:any = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}
