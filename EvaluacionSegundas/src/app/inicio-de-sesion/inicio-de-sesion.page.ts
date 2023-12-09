import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { data } from 'src/environments/environment';

@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.page.html',
  styleUrls: ['./inicio-de-sesion.page.scss'],
})
export class InicioDeSesionPage implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  form = this.formBuilder.group({
    correo: ['', [Validators.email, Validators.required]],
    contra: ['', [Validators.required]]
  })

  next(){
    let formValue = this.form.value;
    let bandera = true;

    data.usuarios.forEach((usuario:any) => {
      if (usuario.correo === formValue.correo && usuario.contra === formValue.contra && formValue.correo) {
        this.mensaje("Bienvenido");
        data.activo = formValue.correo
        this.router.navigate(['/tabs/user-library']);
        bandera = false;
      }
    });
    
    if (bandera)
      this.mensaje("Error: Usuario o contraseña incorrectos");
  }
  
  async mensaje(msg: any) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
