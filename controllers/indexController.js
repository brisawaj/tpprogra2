const db= require("../database/models");

const indexController = {

    index: async function (req, res) {
        //obtemos la informacion de SQL    
        let loggedUser = null; 
        if (req.cookies.userId) {
            loggedUser = await db.User.findOne({
                where: { id: req.cookies.userId },
                include: [{ association: "productos" }],
                order: [["createdAt", "DESC"]]
            })
        }

        db.Product.findAll({
            order:[["createdAt", "DESC"]],
            include:[{association: "vendedor"},{association: "comentarios"}]
        })//adentro del parentisis va la configuracion.
        .then((resultado)=>{
        //res.send(resultado)//nos permite ver la variable
        if (req.cookies.userId) {
            return res.render("index", { productos: resultado, usuario: loggedUser })
        }
        return res.render("index", { productos: resultado, usuario: loggedUser })
    //en resultado se almacen alo que te devuelve el find all de la base de datos.

})//arrow fuction: creamos una funcion
},  
};

module.exports = indexController;