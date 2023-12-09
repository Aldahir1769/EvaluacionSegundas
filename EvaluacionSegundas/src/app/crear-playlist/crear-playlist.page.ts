import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { data } from '../app.component';

@Component({
  selector: 'app-crear-playlist',
  templateUrl: './crear-playlist.page.html',
  styleUrls: ['./crear-playlist.page.scss'],
})
export class CrearPlaylistPage implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsuario();
  }
  
  usuarioActivo:any = {
    playlists:[]
  };
  
  getUsuario() {
    data.usuarios.forEach((usuario:any) => {
      if (usuario.correo == data.activo)
        this.usuarioActivo = usuario;
    });
  }

  form = this.formBuilder.group({
    nombre: ['', [Validators.required]]
  })

  crear() {
    if (this.form.value.nombre){
      let bandera = true;

      let playlist = {
        nombre: this.form.value.nombre,
        canciones: 0,
        imagen: ''
      };

      this.usuarioActivo.playlists.forEach((pl:any) => {
        if(pl.nombre == playlist.nombre)
          bandera = false
      });

      if (bandera) {
        data.usuarios.forEach((usuario:any) => {
          if (usuario.correo == data.activo){
            usuario.cantidadPlaylists++;
            
            if (usuario.cantidadPlaylists < 4)
              playlist.imagen = 'album-' + usuario.cantidadPlaylists
          }
        });

        this.usuarioActivo.playlists.push(playlist);
        this.mensaje("Playlist creada");
        this.router.navigate(['/tabs/user-library']);
      } else 
        this.mensaje("Error ya existe una playlist con ese nombre");  
      
    } else 
      this.mensaje("Error no se ha creado la playlist");
  }
  
  async mensaje(msg: any) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
