const express = require (‘express’);
const router = express.Router();


router.get(‘/’, function (req, res){
	return res.send(‘hola!’)
})


router.get (‘/remera/:1', function(req,res){
    let resultado = [];
    let autoModel = req.params.model;

    for (let i = 0; i < db.lista.length; i++) {
    if(autoModel == db.lista[i].modelo){
        resultado.push(db.lista[i])
    }        
    }
    if(resultado.length == 0){
        return res.send('no tenemos modelo ' + autoModel)
    }else{
        return res.send(resultado)
    }
module.exports = router
