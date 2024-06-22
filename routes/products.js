const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/id/:id', productController.filterById)
router.get('/search', productController.search)
router.get('/productAdd', productController.productAdd)
router.post('/productAdd',productController.create)
router.get('/productEdit/:id', productController.productEdit)
router.post('/productEdit/:id',productController.update)
router.get('/productDelete/:id',productController.destroy)
module.exports = router;
