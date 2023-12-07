import { Component, OnInit } from '@angular/core';
import { data } from 'src/environments/environment';

@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.page.html',
  styleUrls: ['./user-library.page.scss'],
})
export class UserLibraryPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getUser();
  }

  user:any

  getUser() {
    data.usuarios.forEach(usuario => {
      if (usuario.correo == data.activo)
        this.user = usuario;
    })

    console.log(this.user);
  }
}
