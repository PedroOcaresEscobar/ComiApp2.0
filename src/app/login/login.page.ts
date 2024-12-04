import { Component, OnInit } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {


  oApp = initializeApp(environment.firebase)
  oAuth= getAuth(this.oApp)
  gEmail = ""
  gPassword = ""
  constructor(private router: Router) {}


  loginUser(){
    signInWithEmailAndPassword(this.oAuth, this.gEmail, this.gPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      
      this.router.navigate(['/tabsM/home']); 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });
  }
  RegistrarUsuario(){
    this.router.navigateByUrl('/registro');
  }
}
