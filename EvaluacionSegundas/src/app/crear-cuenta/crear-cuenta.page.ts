import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { data } from 'src/environments/environment';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  form = this.formBuilder.group({
    correo: ['', [Validators.email, Validators.required]],
    contra: ['', [Validators.required]],
    nombre: ['', [Validators.required]]
  })

  next(){
    if (this.form.value.correo && this.form.value.contra && this.form.value.nombre){
      let bandera = true;

      let usuario = {
        correo: this.form.value.correo,
        contra: this.form.value.contra,
        nombre: this.form.value.nombre,
        playlists: [],
        cantidadPlaylists: 0
      };

      data.usuarios.forEach((usr:any) => {
        if(usuario.correo == usr.correo)
          bandera = false
      });

      if(bandera) {
        data.usuarios.push(usuario);
        data.activo = usuario.correo;
        this.mensaje("Usuario creado, bienvenido");
        this.router.navigate(['/tabs/user-library']);
      } else
        this.mensaje("Error ya existe un usuario con ese correo"); 

    } else 
      this.mensaje("Error no se ha creado el usuario");
  }
  
  async mensaje(msg: any) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
