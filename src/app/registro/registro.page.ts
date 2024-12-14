import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  account = {} as any; // Datos del formulario
  isEmailValid = true; // Control de validez del correo
  doPasswordsMatch = true; // Control de validez de contraseñas
  isFormValid = false; // Control de validez del formulario completo
  oAuth = getAuth();

  constructor(private router: Router, private alertCtrl: AlertController) {}

  // Validar el correo
  validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isEmailValid = emailRegex.test(this.account.email || '');
    this.updateFormValidity();
  }

  // Validar que las contraseñas coincidan
  validatePasswords() {
    this.doPasswordsMatch = this.account.password === this.account.repassword;
    this.updateFormValidity();
  }

  // Actualizar el estado general del formulario
  updateFormValidity() {
    this.isFormValid =
      this.isEmailValid &&
      this.doPasswordsMatch &&
      this.account.nombre &&
      this.account.password &&
      this.account.email;
  }

 // Función para registrarse
 async Resgistrarse() {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      this.oAuth,
      this.account.email,
      this.account.password
    );

    // Mostrar alerta de éxito con redirección al login
    const alert = await this.alertCtrl.create({
      header: '¡Registro exitoso!',
      message: `Bienvenido, ${this.account.nombre}`,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Redirigir al login
            this.router.navigate(['']);
          },
        },
      ],
    });
    await alert.present();

    // Limpiar los campos del formulario
    this.account = {} as any;
    this.isEmailValid = true;
    this.doPasswordsMatch = true;
    this.isFormValid = false;
  } catch (error) {
    const alert = await this.alertCtrl.create({
      header: 'Error en el registro',
      message: 'Ocurrió un problema al intentar registrarte. Intenta nuevamente.',
      buttons: ['OK'],
    });
    await alert.present();

    console.error('Error al registrarse:', error);
  }
}

}
