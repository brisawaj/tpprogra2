const db = {
    usuario:
    {
        email: "catalopez@gmail.com",
        usuario: "catalopez",
        contraseña: "cata123",
        fechaDeNacimiento: "2000-05-10",
        nroDeDocumento: 40196253,
        fotoDePerfil: "images/users/userMujer.jpg"
    },

    producto: [
        {
            id: 1,
            producto: "REMERA",
            descripcion: "remera negra nueva, estampado en color rojo",
            imagen: "images/products/id-1.jpg",
            comentarios: [
                {
                    id: 1,
                    nombreDeUsuario: "sofiamartinez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "images/users/userMujer.jpg"
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
            producto: "SHORT",
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
            producto: "BUZO",
            descripcion: "buzo talle 13",
            imagen: "images/products/id-3.jpeg",
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
            producto: "JEAN",
            descripcion: "jean en perfecto estado",
            imagen: "images/products/id-4.webp",
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
            producto: "SWEATER",
            descripcion: "sweater talle s nuevo",
            imagen: "images/products/id-5.jpeg",
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
            producto: "JEAN NEGRO",
            descripcion: "jean nuevo importado",
            imagen: "images/products/id-6.webp",
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
            producto: "ZAPATILLAS",
            descripcion: "zapatillas nuevas talle 39",
            imagen: "images/products/id-7.jpg",
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
            producto: "TACOS",
            descripcion: "tacos altos importados",
            imagen: "images/products/id-8.jpg",
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
            producto: "CARTERA",
            descripcion: "cartera espaciosa nueva",
            imagen: "images/products/id-9.webp",
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
            producto: "COLLAR",
            descripcion: "collar de oro nuevo",
            imagen: "images/products/id-10.jpg",
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