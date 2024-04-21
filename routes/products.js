const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/id/:id', productController.filterById)
router.get('/search', productController.search)
router.get('/productAdd', productController.productAdd)

module.exports = router;
