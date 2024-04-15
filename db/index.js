const ropa = {
    usuario:
    {
        email: "catalopez@gmail.com",
        usuario: "catalopez",
        contraseña: "cata123",
        fechaDeNacimiento: "2000-05-10",
        nroDeDocumento: 40196253,
        fotoDePerfil: "foto"
    },

    producto: [
        {
            id: 1,
            producto: "remera",
            descripcion: "remera negra nueva, estampado en color rojo",
            imagen: "foto",
            comentario: [
                {
                nombreDeUsuario:"sofiamartinez",
                textoDelComentario:"me encanto el producto" ,
                imagenDePerfil: "foto"
            }
        ]},
        {
            id: 2,
            producto: "short",
            descripcion: "short azul nuevo",
            imagen: "foto",
            comentario: [
                {
                nombreDeUsuario:"lola526",
                textoDelComentario:"volveria a comprar" ,
                imagenDePerfil: "foto"
            }
        ]},
        {
            id: 3,
            producto: "buzo",
            descripcion: "buzo talle 13",
            imagen: "foto",
            comentario: [
                {
                nombreDeUsuario:"pedrolopez",
                textoDelComentario:"no cumple con el talle" ,
                imagenDePerfil: "foto"
            }
        ]},
    ]
}


module.exports = ropa