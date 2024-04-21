var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')


/* GET home page. */
router.get("/", productController.index)
router.get("/products", productController.filterById);

module.exports = router;
