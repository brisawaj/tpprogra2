const db = require('../db/index')

const productController = {
    
    index: function (req, res) {
        return res.render("index")
    },

    filterById: function (req, res) {
       
        return res.render('product', {
            index: resultado,
            mensaje:'Productos con ese id'                
        })
    },
    search: function (req, res) {
        return res.render("search-results")
    },
 }
    
    

module.exports = productController;

