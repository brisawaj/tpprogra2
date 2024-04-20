const db = require('../db/index')

const userController = {
    
    index: function (req, res) {
        return res.render("index")
    },

    filterById: function (req, res) {
       
        return res.render('product', {
            product: db.producto,
            mensaje:'Productos con ese id'                
        })
    },
    search: function (req, res) {
        return res.render("search-results")
    },
    
    register: function(req, res) {
        return res.render('register')
    },
    
    login: function(req, res) {
        return res.render('login')
    },
    profile: function(req, res) {
        return res.render('profile')
    },

 }
    
    

module.exports = userController;

