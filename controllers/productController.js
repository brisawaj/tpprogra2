const db = require('../db/index')

const productController = {
 

    filterById: function (req, res) {
       
        return res.render('product', {
            product: db.producto,
            mensaje:'Productos con ese id'                
        })
    },
    search: function (req, res) {
        return res.render("search-results")
    },
    productAdd: function (req, res) {
        return res.render("productAdd")
    },
 }
    
    

module.exports = productController;

