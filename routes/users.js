var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

router.get('/id/:id', userController.filterById)
router.get('/register', userController.newUser)
router.post('/register', userController.register)
router.get('/login', userController.login)
router.get('/profile', userController.profile)
router.get('/profileEdit', userController.profileEdit)

module.exports = router;
