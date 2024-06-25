const db = require('../db/index')
const models = require("../database/models")
const { Association } = require('sequelize')
const Users= models.User
const Product= models.Product

const productController = {
    
    filterById: function (req, res) {
        // Obtenemos la ID de los query parameters 
        const filtro= {include: [{association: "vendedor"},{association: "comentarios"}]}
        Product.findByPk(req.params.id, filtro)
        .then(function(producto){
            //return res.send(producto)
            return res.render('product', {
                producto: producto
            });  
         })
    },
    search: function(req, res) {
        const query = req.query.q;
        if (!query) {
            return res.render('searchResults', { productos: [], mensaje: "No hay resultados para su búsqueda" });
        }
        db.Product.findAll({ 
            where: {
                [db.Sequelize.Op.or]: [
                    { nombreProducto: { [db.Sequelize.Op.like]: `%${query}%` } },
                    { descripcionProducto: { [db.Sequelize.Op.like]: `%${query}%` } }
                ] 
            },
            include: [{ model: db.User, as: 'usuario' }], 
            order: [['created_at', 'DESC']]
        }).then(function (productos){
            if (productos.length === 0) {
                return res.render('searchResults', { 
                    productos: [], 
                    mensaje: "No hay resultados para su búsqueda" });
            }
            res.render('searchResults', { 
                productos, 
                mensaje: null }); 
        }).catch(function(error){
            console.error(error);
            res.status(500).send('Error interno del servidor');
        });
    },
    productAdd: function (req, res) {
        return res.render("productAdd", { usuario: db.usuario, productos: db.producto })
    },
    productEdit: function (req, res) {
        Product.findByPk(req.params.id)
        .then(function(producto){
            //return res.send (producto)
            return res.render("productEdit", { usuario: db.usuario, producto: producto })    
        })    
    },
    update: function(req, res){
        let producto= {
            imagen: req.body.image,
            nombre_producto: req.body.name,
            descripcion_producto: req.body.description,
            updatedAt: new Date ()
        }
        Product.update(producto, { where:{id:req.params.id}})
        .then (function(){
            return res.redirect("/products/id/"+req.params.id)
        })
     },
     destroy: function(req, res){
        Product.destroy({ where:{id:req.params.id}})
        .then (function(){
            return res.redirect("/")
        })
     },
    create: function(req, res){
        let producto= {
            usuario_id: 2, // cambiar por dato de la session una vez terminado
            imagen: req.body.image,
            nombre_producto: req.body.name,
            descripcion_producto: req.body.description,
            createdAt: new Date(),
            updatedAt: new Date ()
        }
        Product.create(producto)
        .then (function(){
            return res.redirect("/")
        })
     }
 }
    
    

module.exports = productController;

