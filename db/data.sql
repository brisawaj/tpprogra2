create schema proyInt;

USE proyInt;

create table usuario( 
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email TEXT NOT NULL,
contra TEXT NOT NULL,
fecha DATE NOT NULL,
dni INT NOT NULL,
imagen TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

create table products (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT unsigned,
imagen TEXT NOT NULL,
nombre_producto TEXT NOT NULL,
descripcion_producto TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuario (id)

);

create table comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT unsigned ,
products_id INT unsigned ,
comentario TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuario (id),
FOREIGN KEY (products_id) REFERENCES products (id)
);

# Insertamos 5 usuarios
INSERT INTO usuario (id ,email ,contra ,fecha ,dni, imagen, createdAt, updatedAt, deletedAt)
VALUES (1, "catalopez@gmail.com", "cata123","2010-04-11", "40196253", "../public/images/users/user_mujer.jpg", NULL,  NULL, NULL), 
(2, "brisa@gmail.com.ar", "briSA","2010-04-11", "46026883", "../public/images/users/user_mujer.jpg", NULL,  NULL, NULL),
(3, "sol@gmail.com.ar", "Sol","2010-04-11", "12345678", "../public/images/users/user_mujer.jpg", NULL,   NULL, NULL),
(4, "pedro@gmail.com.ar", "peDRO","2010-04-11", "46037883", "../public/images/users/user_mujer.jpg", NULL,   NULL, NULL),
(5, "thomas@gmail.com.ar", "Thomas","2010-04-11", "43026883", "../public/images/users/user_mujer.jpg", NULL,   NULL, NULL);

 
# Insertamos 10 productos
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (1, 1, "../public/images/products/id-1.jpg" ,"remera", "remera negra nueva, estampado en color rojo", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (2, 1, "../public/images/products/id-2.jpg" ,"short", "short azul nuevo", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (3, 2, "../public/images/products/id-3.jpg" ,"BUZO", "buzo talle 13", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (4, 2, "../public/images/products/id-4.webp" ,"JEAN", "jean en perfecto estado", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (5, 3, "../public/images/products/id-5.jpg" ,"SWEATER", "sweater talle s nuevo", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (6, 3, "../public/images/products/id-6.webp" ,"JEAN NEGRO", "jean nuevo importado", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (7, 4, "../public/images/products/id-7.jpg" ,"ZAPATILLAS", "zapatillas nuevas talle 39", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (8, 4, "../public/images/products/id-8.jpg" ,"TACOS", "tacos altos importados", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (9, 5, "../public/images/products/id-9.webp" ,"CARTERA", "cartera espaciosa nueva", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (10,5, "../public/images/products/id-10.jpg" ,"COLLAR", "collar de oro nuevo", NULL, NULL, NULL);

# Insertamos 3 comentarios
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (1, 1, 1 ,"Me encanto la remera!", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (2, 1, 1 ,"Hermosa remera, se adapta super bien.", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (3, 1, 1 ,"preciosa esta prenda, me tiene fascinada!", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (4, 1, 2 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (5, 1, 2 ,"Tal cual lo que queria.", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (6, 1, 2 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (7, 2, 10 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (8, 2, 3 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (9, 2, 3 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (10, 2, 3 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (11, 2, 4 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (12, 2, 4 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (13, 3, 4 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (14, 3, 5 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (15, 3, 5 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (16, 3, 5 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (17, 3, 6 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (18, 3, 6 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (19, 4, 6 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (20, 4, 7 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (21, 4, 7 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (22, 4, 7 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (23, 4, 8 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (24, 4, 8 ,"demasiado altos, pero son lindos ", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (30, 5, 8 ,"bonitos tacos ", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (25, 5, 9 ,"me encanto el producto", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (26, 5, 9 ,"tal cual la foto, una belleza", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (27, 5, 9 ,"cartera hermosa", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (28, 5, 10 ,"me encanto el collar", NULL, NULL, NULL);
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (29, 5, 10 ,"bonito collar", NULL, NULL, NULL);
# Faltan 29 mas.
