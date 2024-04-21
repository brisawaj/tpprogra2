const db = require("../db/index");

const indexController = {

    index: function (req, res) {
        return res.render("index", { product: db.producto })
    },
    
};

module.exports = indexController;