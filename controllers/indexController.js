const db = require("../db/index");

const indexController = {

    index: function (req, res) {
        return res.render("index", { productos: db.productos })
    },
    
};

module.exports = indexController;