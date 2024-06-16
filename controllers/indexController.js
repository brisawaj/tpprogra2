const db = require("../db/index");
const modelos= require("../database/models")

const indexController = {

    index: function (req, res) {
//obtemos la informacion de SQL 
modelos.Product.findAll()//adentro del parentisis va la configuracion.
.then((resultado)=>{
res.send(resultado)//nos permite ver la variable
    //return res.render("index", { productos: db.producto })
    //en resultado se almacen alo que te devuelve el find all de la base de datos.

})//arrow fuction: creamos una funcion
    
    },
    
};

module.exports = indexController;