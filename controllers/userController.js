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
        }
        if (req.body.password.length < 4) {
            return res.render('register', { errorMessage: 'Minimo 4 caracteres la contrasena' });
        } else {
            db.User.create({
                email: req.body.email,
                password: passEncriptada,
                fecha: req.body.birthdate,
                dni: req.body.dni,
                imagen: req.body.perfil,
            })
            .then(() => {
                return res.render('login', { exitoMessage: 'Registro exitoso, ingrese sesion', errorMessage: null })
            }).catch ((error) => {
                return res.render('register', {errorMessage: null})
            })
        }
    },
    login: function(req, res) {
        return res.render('login', {errorMessage: null, exitoMessage: null })
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
                return res.render('login', { errorMessage: 'Correo electrónico no encontrado', exitoMessage: null, usuario: resultado });
            }
    
            if (!bcrypt.compareSync(password, resultado.contra)) {
                return res.render('login', { errorMessage: 'Contraseña incorrecta', exitoMessage: null });
            } else {
                if (rememberMe) {
                    res.cookie('cookieEmail', resultado.email, { maxAge: 30 * 24 * 60 * 60 * 1000 })
                }else{
                    req.session.userSession = resultado.email;
                }
                return res.render('profile', {holaMessage: 'Hola nuevamente!', usuario: resultado, productos: resultado.productos });
            }
        })
        .catch((error) => {
            return res.render('login', { errorMessage: 'Error interno del servidor', exitoMessage: null });
        })
    },
    id: function(req, res) {
        db.Product.findAll({
            order:[["createdAt", "DESC"]],
            include:[{association: "vendedor"},{association: "comentarios"}]
        })
    },
    profile: function(req, res) {
        return res.render('profile', {holaMessage: 'Hola nuevamente!'});
    },
    profileEdit: function(req, res) {
        return res.render('profileEdit', { usuario: usuario, productos: producto })
    },

    logOut: function(req, res) {
        res.clearCookie('cookieEmail');
        req.session.destroy();
        res.redirect('/');
    }

 }
    
    

module.exports = userController;

