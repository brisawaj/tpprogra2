const db = require('../db/index')

const userController = {
    
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
    
    register: function(req, res) {
        return res.render('register')
    } 
 }
    
    

module.exports = userController;

