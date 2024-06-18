const {validationResult} = require('express-validator');
const anterior = require('../db/index');
const db = require("../database/models");
const bcrypt = require ('bcryptjs')

const userController = {
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
        return res.render("register")
    },

    registerStore: function(req, res) {
        let passEncriptada = bcrypt.hashSync (req.body.password, 10);
        db.User.create({
            email: req.body.email,
            contra: passEncriptada,
            fecha: req.body.birthdate,
            dni: req.body.dni,
            imagen: req.body.perfil
        })
        .then (function(result){
            return res.redirect ('/profile')
        }).catch ((error) => {
            console.log(error);
            return res.render('register')
        })
    },

    login: function(req, res) {
        return res.render('login', { errorMessage: null })
    },

    
    loginProcess: function (req, res) {
        let errors = validationResult (req);
        let email= req.body.email;
        let password = req.body.password;
        db.User.findOne({
            where: { email: email },
            include: [{ association: "productos" }],
            order: [["createdAt", "DESC"]]
        })
        .then((resultado) => {
            if (!resultado) {
                return res.render('login', { errorMessage: 'Correo electrónico no encontrado' });
            }
    
            // Comparar la contraseña proporcionada con el hash almacenado en la base de datos
            if (!bcrypt.compareSync(password, resultado.password)) {
                return res.render('login', { errorMessage: 'Contraseña incorrecta' });
            } else {
                return res.render('profile', { usuario: resultado, productos: resultado.productos });
            }
        })
        .catch((error) => {
            console.log(error);
            return res.render('login', { errorMessage: 'Error interno del servidor' });
        })
    },
    
    profile: function(req, res) {
        db.User.findOne({
            where: [{id: req.params.id}],
            include:[{association: "productos"}],
            order:[["createdAt", "DESC"]]  
        })
        .then((resultado)=>{
        return res.render('profile' , { usuario: resultado, productos: resultado.productos })
        })

        
    },
    profileEdit: function(req, res) {
        return res.render('profileEdit', { usuario: db.usuario, productos: db.producto })
    },

 }
    
    

module.exports = userController;

