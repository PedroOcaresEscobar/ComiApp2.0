import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  account = {}  as any
  oAuth = getAuth();

  constructor(private router: Router) {}
  Resgistrarse(){
    console.log(this.account)
    createUserWithEmailAndPassword(this.oAuth, this.account.email, this.account.password)
    .then((userCredential) => {

     

      this.router.navigate(['/home']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode);
      console.log(errorMessage);
      this.router.navigate(['/home']);
    });

    }

}

