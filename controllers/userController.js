const db = require('../db/index')
const User = require("../database/models/User")

const userController = {
    
    index: function (req, res) {
        return res.render("index")
    },

    filterById: function (req, res) {
       
        return res.render('product', {
            productos: db.producto,
            mensaje:'Productos con ese id'                
        })
    },
    search: function (req, res) {
        return res.render("search-results")
    },
    
    register: function(req, res) {
        return res.render('register')
    },

    newUser: function(req, res) {
        return res.render('register')
    },

    login: function(req, res) {
        return res.render('login')
    },
    profile: function(req, res) {
        console.log(db.producto)
        return res.render('profile' , { usuario: db.usuario, productos: db.producto })
    },
    profileEdit: function(req, res) {
        return res.render('profileEdit', { usuario: db.usuario, productos: db.producto })
    },

 }
    
    

module.exports = userController;

