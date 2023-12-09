import { Component, OnInit } from '@angular/core';
import { data } from '../app.component';

@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.page.html',
  styleUrls: ['./user-library.page.scss'],
})
export class UserLibraryPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getUsuario();
  }

  ionViewDidEnter() {
    this.ngOnInit();
  }
  
  usuarioActivo:any = {
    playlists:[]
  };
  
  getUsuario() {
    data.usuarios.forEach((usuario:any) => {
      if (usuario.correo == data.activo){
        this.usuarioActivo = usuario;
      }
    });
  }
}
