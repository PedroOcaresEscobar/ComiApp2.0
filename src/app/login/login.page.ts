import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Asegúrate de importar AlertController

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  oApp = initializeApp(environment.firebase);
  oAuth = getAuth(this.oApp);
  gEmail = "";
  gPassword = "";

  constructor(private router: Router, private alertCtrl: AlertController) {}

  // Función para login
  loginUser() {
    signInWithEmailAndPassword(this.oAuth, this.gEmail, this.gPassword)
      .then((userCredential) => {
        // Login exitoso
        const user = userCredential.user;
        console.log(user);
        
        // Redirigir al usuario a la página de inicio
        this.router.navigate(['/tabsM/home']);
      })
      .catch(async (error) => {
        // En caso de error en el login
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        // Mostrar alerta con el mensaje de error
        const alert = await this.alertCtrl.create({
          header: 'Error en el inicio de sesión',
          message: 'Credenciales incorrectas. Por favor, verifica tu correo y contraseña.',
          buttons: ['OK']
        });

        await alert.present();
      });
  }

  // Función para ir al registro
  RegistrarUsuario() {
    this.router.navigateByUrl('/registro');
  }
}
