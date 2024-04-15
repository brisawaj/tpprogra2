create schema proyInt;

USE proyInt;

create table usuario( 
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email TEXT NOT NULL,
contra TEXT NOT NULL,
fecha DATE NOT NULL,
dni INT NOT NULL, 
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP

);

create table products (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT unsigned,
nombre_imagen TEXT NOT NULL,
nombre_producto TEXT NOT NULL,
descripcion_producto TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
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


 INSERT INTO usuario (id ,email ,contra ,fecha ,dni , createdAt ,deletedAt)
 VALUES (default, "brisa@gmail.com.ar", "briSA", "46026883", NULL, NULL);
 
 
INSERT INTO usuario (id ,email ,contra ,fecha ,dni , createdAt ,deletedAt)
 VALUES (default, "sol@gmail.com.ar", "Sol", "12345678", NULL, NULL);
 
 INSERT INTO usuario (id ,email ,contra ,fecha ,dni , createdAt ,deletedAt)
 VALUES (default, "pedro@gmail.com.ar", "peDRO", "46037883", NULL, NULL);
 
 INSERT INTO usuario (id ,email ,contra ,fecha ,dni , createdAt ,deletedAt)
 VALUES (default, "thomas@gmail.com.ar", "Thomas", "43026883", NULL, NULL);
 
 INSERT INTO usuario (id ,email ,contra ,fecha ,dni , createdAt ,deletedAt)
 VALUES (default, "muna@gmail.com.ar", "munimu", "41026782", NULL, NULL);
 

 

 
 
 

 
 

 
 




