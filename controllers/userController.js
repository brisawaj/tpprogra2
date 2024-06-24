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
        return res.render("register", { errorMessage: null })
    },

    registerStore: async function(req, res) {
        let passEncriptada = bcrypt.hashSync (req.body.password, 10);
        const userExists = await db.User.findOne({ where: { email:  req.body.email }})
        if (userExists) {
            return res.render('register', { errorMessage: 'Correo electrónico en uso' });
        } else {
            db.User.create({
                email: req.body.email,
                password: passEncriptada,
                fecha: req.body.birthdate,
                dni: req.body.dni,
                imagen: req.body.perfil,
            })
            .then (function(){
                return res.redirect ('/users/login')
            }).catch ((error) => {
                console.log(error);
                return res.render('register')
            })
        }
    },

    login: function(req, res) {
        return res.render('login', { errorMessage: null })
    },

    
    loginProcess: function (req, res) {
        const { email, password, rememberMe } = req.body;
        db.User.findOne({
            where: { email: email },
            include: [{ association: "productos" }],
            order: [["createdAt", "DESC"]]
        })
        .then((resultado) => {
            if (!resultado) {
                return res.render('login', { errorMessage: 'Correo electrónico no encontrado' });
            }
    
            if (!bcrypt.compareSync(password, resultado.contra)) {
                return res.render('login', { errorMessage: 'Contraseña incorrecta' });
            } else {
                if (rememberMe) {
                    req.session.userId = resultado.id;
                    res.cookie('userId', resultado.id, { maxAge: 30 * 24 * 60 * 60 * 1000 })
                }
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

    logOut: function(req, res) {
        console.log('herereeee')
        res.clearCookie('userId');
        req.session.destroy();
        res.redirect('/');
    }

 }
    
    

module.exports = userController;

