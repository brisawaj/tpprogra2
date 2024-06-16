 const anterior = require('../db/index')
const db = require("../database/models")


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
        db.User.create({
            email: req.body.email,
            contra: req.body.password,
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
        return res.render('login')
    },

    loginProcess: function (req, res) {
        let email= req.body.email
        let contra= req.body.password
        db.User.findOne({ where: { email: email } })
    },
    //         .then(function(){

    //         })
    //         .catch(function(){

    //         })




    //         const {email} = req.body;
          
    //         try {
    //           const existingUser = await User.findOne({ where: { emailUsuario: email } });
          
    //           if (existingUser) {
    //             return res.redirect('profile');
    //           } else {
    //             return res.render ('login')}
    //         }.catch  ((error) => {
    //             console.log(error);
    //             return res.render('login')
    //         })
    //       },

    profile: function(req, res) {
        console.log(db.producto)
        db.User.findOne({
            where: [{id: req.params.id}],
            include:[{association: "productos"}],
            order:[["createdAt", "DESC"]]  
        })
        .then((resultado)=>{
        //return res.send(resultado)
         return res.render('profile' , { usuario: resultado, productos: resultado.productos })
            
            
            })

        
    },
    profileEdit: function(req, res) {
        return res.render('profileEdit', { usuario: db.usuario, productos: db.producto })
    },

 }
    
    

module.exports = userController;

