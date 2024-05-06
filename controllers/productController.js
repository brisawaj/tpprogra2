const db = require('../db/index')
const Product = require("../database/models/Product")

const productController = {
 

    filterById: function (req, res) {
        // Obtenemos la ID de los query parameters
        const productId = req.query.id;
        var producto  = db.producto[0] // Por defecto, renderizamos el primer producto
    
        for(var indiceProducto = 0; indiceProducto < db.producto.length; indiceProducto++)
        {
            if(productId === db.producto[indiceProducto].id)
            {
                var producto = db.producto[indiceProducto].id
                return res.render('product', {
                    producto: producto
                });
            }
        }
        return res.render('product', {
            producto: producto
        });  
    },
    search: function (req, res) {
        return res.render("search-results", { usuario: db.usuario, productos: db.producto })
    },
    productAdd: function (req, res) {
        return res.render("productAdd", { usuario: db.usuario, productos: db.producto })
    },
 }
    
    

module.exports = productController;

