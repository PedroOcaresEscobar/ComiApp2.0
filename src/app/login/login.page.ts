import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router) {}


  Registro() {
    this.router.navigateByUrl('/registro');
  }

  RecuperarPassword() {
    this.router.navigateByUrl('/recuperar-password');
  }
}
