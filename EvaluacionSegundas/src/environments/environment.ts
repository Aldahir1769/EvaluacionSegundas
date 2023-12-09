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
