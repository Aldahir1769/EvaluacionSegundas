import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Forzar el modo oscuro
      document.body.classList.toggle('dark', true);
    });
  }
}

export var data = {
  usuarios: [
    {
      correo: "prueba@gmail.com",
      contra: "123456",
      nombre: "Pedro",
      playlists: [
        {
          nombre: "Shazam",
          canciones: 0,
          imagen: 'album-1'
        },
        {
          nombre: "Roadtrip",
          canciones: 0,
          imagen: 'album-2'
        },
        {
          nombre: "Study",
          canciones: 0,
          imagen: 'album-3'
        }
      ],
      cantidadPlaylists: 3
    }
  ],
  activo: ''
}

