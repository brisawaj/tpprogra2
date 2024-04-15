var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/id/:id', productsController.filterById)
router.get('/register', productsController.filterByRegister)
router.get('/login', productsController.filterByLogin)



module.exports = router;
