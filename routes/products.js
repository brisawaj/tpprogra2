HEAD
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get("/", productController.index)
router.get('/id/:id', productController.filterById)
router.get('/search', productController.Search)



module.exports = router;

