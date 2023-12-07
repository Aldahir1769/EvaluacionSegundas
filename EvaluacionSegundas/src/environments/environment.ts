// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export var data = {
  usuarios: [
    {
      correo: "prueba@gmail.com",
      contra: "123456",
      nombre: "Pedro",
      playlists: [
        {
          nombre: "Shazam",
          canciones: 0
        },
        {
          nombre: "Roadtrip",
          canciones: 0
        },
        {
          nombre: "Study",
          canciones: 0
        }
      ]
    }
  ],
  activo: ''
}
