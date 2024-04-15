const db = require('../db/index')
const productController = {
    index: function (req, res) {
        return res.send(db.lista)}
    },
    
    filterById: function (req, res) {
        let ropaId = req.params.marca;
        let resultado = [];
        for (let i = 0; i < db.lista.length; i++) {
            if (ropaId == db.lista[i].id) {
                resultado.push(db.lista[i])
            }
        }
        if (resultado.length == 0) {
            return res.send('no tenemos ningun producto con id ' + ropaId)
        }
        else {
            return res.render('products', {
                index: resultado;
                mensaje:'Productos con ese id'                
            })
        }
    },