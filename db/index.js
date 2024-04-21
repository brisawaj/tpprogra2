const db = {
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
            imagen: "images/products/id-1.jpg",
            comentarios: [
                {
                    id: 1,
                    nombreDeUsuario: "sofiamartinez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "foto"
                },
                {
                    id: 2,
                    nombreDeUsuario: "sofiamartinez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "foto"
                },
                // Add more comments here if needed
            ]
        },
        {
            id: 2,
            producto: "short",
            descripcion: "short azul nuevo",
            imagen: "images/products/id-2.jpg",
            comentarios: [
                {
                    id: 1,
                    nombreDeUsuario: "sofiamartinez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "foto"
                },
        ]},
        {
            id: 3,
            producto: "buzo",
            descripcion: "buzo talle 13",
            imagen: "foto",
            comentarios: [
                {
                    id: 1,
                    nombreDeUsuario: "sofiamartinez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "foto"
                },
        ]},
        {
            id: 4,
            producto: "jean",
            descripcion: "jean en perfecto estado",
            imagen: "foto",
            comentarios: [
                {
                    id: 1,
                    nombreDeUsuario: "sofiamartinez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "foto"
                },
        ]},
        {
            id: 5,
            producto: "sweater",
            descripcion: "sweater talle s nuevo",
            imagen: "foto",
            comentarios: [
                {
                    id: 1,
                    nombreDeUsuario: "sofiamartinez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "foto"
                },
        ]},
        {
            id: 6,
            producto: "jean negro",
            descripcion: "jean nuevo importado",
            imagen: "foto",
            comentarios: [
                {
                    id: 1,
                    nombreDeUsuario: "sofiamartinez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "foto"
                },
        ]},
        {
            id: 7,
            producto: "zapatillas",
            descripcion: "zapatillas nuevas talle 39",
            imagen: "foto",
            comentarios: [
                {
                    id: 1,
                    nombreDeUsuario: "sofiamartinez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "foto"
                },
        ]},
        {
            id: 8,
            producto: "tacos",
            descripcion: "tacos altos importados",
            imagen: "foto",
            comentarios: [
                {
                    id: 1,
                    nombreDeUsuario: "sofiamartinez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "foto"
                },
        ]},
        {
            id: 9,
            producto: "cartera",
            descripcion: "cartera espaciosa nueva",
            imagen: "foto",
            comentarios: [
                {
                    id: 1,
                    nombreDeUsuario: "sofiamartinez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "foto"
                },
        ]},
        {
            id: 10,
            producto: "collar",
            descripcion: "collar de oro nuevo",
            imagen: "foto",
            comentarios: [
                {
                    id: 1,
                    nombreDeUsuario: "sofiamartinez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "foto"
                },
        ]},
    ]
}


module.exports = db ;