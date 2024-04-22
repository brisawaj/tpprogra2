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
delatedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuario (id),
FOREIGN KEY (products_id) REFERENCES products (id)
);

# Insertamos 5 usuarios
INSERT INTO usuario (id ,email ,contra ,fecha ,dni, imagen, createdAt, updatedAt, deletedAt) VALUES (1, "brisa@gmail.com.ar", "briSA", "46026883", "../public/images/users/user_mujer.jpg", NULL,  NULL, NULL);
INSERT INTO usuario (id ,email ,contra ,fecha ,dni, imagen, createdAt, updatedAt, deletedAt) VALUES (2, "sol@gmail.com.ar", "Sol", "12345678", "../public/images/users/user_mujer.jpg", NULL,   NULL, NULL);
INSERT INTO usuario (id ,email ,contra ,fecha ,dni, imagen, createdAt, updatedAt, deletedAt) VALUES (3, "pedro@gmail.com.ar", "peDRO", "46037883", "../public/images/users/user_mujer.jpg", NULL,   NULL, NULL);
INSERT INTO usuario (id ,email ,contra ,fecha ,dni, imagen, createdAt, updatedAt, deletedAt) VALUES (4, "thomas@gmail.com.ar", "Thomas", "43026883", "../public/images/users/user_mujer.jpg", NULL,   NULL, NULL);
INSERT INTO usuario (id ,email ,contra ,fecha ,dni, imagen, createdAt, updatedAt, deletedAt) VALUES (5, "muna@gmail.com.ar", "munimu", "41026782", "../public/images/users/user_mujer.jpg", NULL,   NULL, NULL);
 
# Insertamos 10 productos
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (1, 1, "../public/images/products/id-1.jpg" ,"remera", "remera negra nueva, estampado en color rojo", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (2, 1, "../public/images/products/id-1.jpg" ,"remera", "remera negra nueva, estampado en color rojo", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (3, 1, "../public/images/products/id-1.jpg" ,"remera", "remera negra nueva, estampado en color rojo", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (4, 1, "../public/images/products/id-1.jpg" ,"remera", "remera negra nueva, estampado en color rojo", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (5, 1, "../public/images/products/id-1.jpg" ,"remera", "remera negra nueva, estampado en color rojo", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (6, 1, "../public/images/products/id-1.jpg" ,"remera", "remera negra nueva, estampado en color rojo", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (7, 1, "../public/images/products/id-1.jpg" ,"remera", "remera negra nueva, estampado en color rojo", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (8, 1, "../public/images/products/id-1.jpg" ,"remera", "remera negra nueva, estampado en color rojo", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (9, 1, "../public/images/products/id-1.jpg" ,"remera", "remera negra nueva, estampado en color rojo", NULL, NULL, NULL);
INSERT INTO products (id, usuario_id, imagen, nombre_producto, descripcion_producto, createdAt, updatedAt, deletedAt) VALUES (10, 1, "../public/images/products/id-1.jpg" ,"remera", "remera negra nueva, estampado en color rojo", NULL, NULL, NULL);

# Insertamos 3 comentarios
INSERT INTO comentarios (id, usuario_id, products_id, comentario, createdAt, updatedAt, deletedAt) VALUES (1, 1, 1 ,"me encanto el producto", NULL, NULL, NULL);
# Faltan 29 mas.
