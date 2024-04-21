const db = require('../db/index')

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
        return res.render("search-results")
    },
    productAdd: function (req, res) {
        return res.render("productAdd")
    },
 }
    
    

module.exports = productController;

