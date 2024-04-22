

const db = {
    usuario:[
    {
        id: 1,
        email: "catalopez@gmail.com",
        usuario: "catalopez",
        contraseña: "cata123",
        fechaDeNacimiento: "2000-05-10",
        nroDeDocumento: 40196253,
        fotoDePerfil: "/images/users/userMujer.jpg"
    },
    {
        id: 2,
        email: "brisa@gmail.com.ar",
        usuario:"brisawaj",
        contraseña:"briSA",
        fechaDeNacimiento:"2000-05-10",
        nroDeDocumento: "46026883",
        fotoDePerfil: "/images/users/user_mujer.jpg"
    },
    {
        id: 3,
        email: "sol@gmail.com.ar",
        usuario: "solorsi",
        contraseña: "Sol",
        fechaDeNacimiento: "2000-05-10",
        nroDeDocumento: 40196253,
        fotoDePerfil: "/images/users/user_mujer.jpg"
    },
    {
        id: 4,
        email: "pedro@gmail.com.ar",
        usuario: "pedro123",
        contraseña: "peDRO",
        fechaDeNacimiento: "2000-05-10",
        nroDeDocumento: 40196253,
        fotoDePerfil: "/images/users/user_mujer.jpg"
    },
    {
        id: 5,
        email: "thomas@gmail.com.ar",
        usuario: "thomas12",
        contraseña: "thomas",
        fechaDeNacimiento: "2000-05-10",
        nroDeDocumento: 40196253,
        fotoDePerfil: "/images/users/user_mujer.jpg"
    }],

    producto:[
        {
            id: 1,
            producto: "REMERA",
            descripcion: "remera negra nueva, estampado en color rojo",
            imagen:  "/images/products/id-1.jpg",
            comentarios: [
                {
                    id: 1,
                    nombreDeUsuario: "sofiamartinez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/userMujer.jpg",
                },
                {
                    id: 2,
                    nombreDeUsuario: "catalopez",
                    textoDelComentario: "Hermosa remera, se adapta super bien.",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
                },
                {
                    id: 3,
                    nombreDeUsuario: "Martina1993",
                    textoDelComentario: "preciosa esta prenda, me tiene fascinada!",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
                }
            ]
        },
        {
            id: 2,
            producto: "SHORT",
            descripcion: "short azul nuevo",
            imagen:  "/images/products/id-2.jpg",
            comentarios: [
                {
                    id: 4,
                    nombreDeUsuario: "catalopez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "foto"
                },
                {
                    id: 5,
                    nombreDeUsuario: "catalopez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
                },
               { id: 6,
                    nombreDeUsuario: "catalopez",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
               },
              
        ]},
        {
            id: 3,
            producto: "BUZO",
            descripcion: "buzo talle 13",
            imagen:  "/images/products/id-3.jpeg",
            comentarios: [
                {
                    id: 8,
                    nombreDeUsuario: "brisawaj",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
                },
                {
                    id: 9,
                    nombreDeUsuario: "brisawaj",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
                },
                {
                    id: 10,
                    nombreDeUsuario: "brisawaj",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
                },
        ]},
        {
            id: 4,
            producto: "JEAN",
            descripcion: "jean en perfecto estado",
            imagen:  "/images/products/id-4.webp",
            comentarios: [
                {
                    id: 11,
                    nombreDeUsuario: "brisawaj",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
                },
                {
                    id: 12,
                    nombreDeUsuario: "brisawaj",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
                },
                {
                    id: 13,
                    nombreDeUsuario: "solorsi",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
                },
        ]},
        {
            id: 5,
            producto: "SWEATER",
            descripcion: "sweater talle s nuevo",
            imagen:  "/images/products/id-5.jpeg",
            comentarios: [
                {
                    id: 14,
                    nombreDeUsuario: "solorsi",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
                },
                {
                    id: 15,
                    nombreDeUsuario: "solorsi",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
                },
                {
                    id: 16,
                    nombreDeUsuario: "solorsi",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
                },
        ]},
        {
            id: 6,
            producto: "JEAN NEGRO",
            descripcion: "jean nuevo importado",
            imagen:  "/images/products/id-6.webp",
            comentarios: [
                {
                    id: 17,
                    nombreDeUsuario: "solorsi",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
                },
                {
                    id: 18,
                    nombreDeUsuario: "solorsi",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_mujer.jpg"
                },
                {
                    id: 19,
                    nombreDeUsuario: "pedro123",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_hombre.png"
                },
        ]},
        {
            id: 7,
            producto: "ZAPATILLAS",
            descripcion: "zapatillas nuevas talle 39",
            imagen:  "/images/products/id-7.jpg",
            comentarios: [
                {
                    id: 20,
                    nombreDeUsuario: "pedro123",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_hombre.png"
                },
                {
                    id: 21,
                    nombreDeUsuario: "pedro123",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_hombre.png"
                },
                {
                    id: 22,
                    nombreDeUsuario: "pedro123",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_hombre.png"
                },
        ]},
        {
            id: 8,
            producto: "TACOS",
            descripcion: "tacos altos importados",
            imagen:  "/images/products/id-8.jpg",
            comentarios: [
                {
                    id: 23,
                    nombreDeUsuario: "pedro123",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_hombre.png"
                },
                {
                    id: 24,
                    nombreDeUsuario: "pedro123",
                    textoDelComentario: "demasiado altos, pero son lindos",
                    imagenDePerfil: "/images/users/user_hombre.png"
                },
                {
                    id: 30,
                    nombreDeUsuario: "thomas12",
                    textoDelComentario: "bonitos tacos",
                    imagenDePerfil: "/images/users/user_hombre.png"
            }
        ]},
        {
            id: 9,
            producto: "CARTERA",
            descripcion: "cartera espaciosa nueva",
            imagen:  "/images/products/id-9.webp",
            comentarios: [
                {
                    id: 25,
                    nombreDeUsuario: "thomas12",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "/images/users/user_hombre.png"
                },
                {
                    id: 26,
                    nombreDeUsuario: "thomas12",
                    textoDelComentario: "tal cual la foto, una belleza",
                    imagenDePerfil: "/images/users/user_hombre.png"
                },
                {
                    id: 27,
                    nombreDeUsuario: "thomas12",
                    textoDelComentario: "cartera hermosa",
                    imagenDePerfil: "/images/users/user_hombre.png"
                },

        ]},
        {
            id: 10,
            producto: "COLLAR",
            descripcion: "collar de oro nuevo",
            imagen:  "/images/products/id-10.jpg",
            comentarios: [
               {
                    id: 28,
                    nombreDeUsuario: "thomas12",
                    textoDelComentario: "Me encantó el collar",
                    imagenDePerfil: "foto"
                },
                {
                    id: 29,
                    nombreDeUsuario: "thomas12",
                    textoDelComentario: "bonito collar",
                    imagenDePerfil: "foto"
                },
                {id: 7,
                    nombreDeUsuario: "brisawaj",
                    textoDelComentario: "Me encantó el producto",
                    imagenDePerfil: "foto"
               
               }
        ]},
    ]
}


module.exports = db ;