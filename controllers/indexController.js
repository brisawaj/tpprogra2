const db= require("../database/models");

const indexController = {

    index: async function (req, res) {
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
        })
        .then((resultado)=>{
        if (req.cookies.userId) {
            return res.render("index", { productos: resultado, usuario: loggedUser })
        }
        return res.render("index", { productos: resultado, usuario: loggedUser })
})
},  
};

module.exports = indexController;