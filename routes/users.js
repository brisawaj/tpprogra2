var express = require('express');
var router = express.Router();
const { body } = require('express-validator')
const userController = require('../controllers/userController')

const validateUserForm = [
    body('email').notEmpty().withMessage('Debes ingresar un email'),
    body('contra').notEmpty().withMessage('Debes ingresar una contrasena'),
    body('email').isEmail(),
]

// router.get('/id/:id', userController.profile)
router.get('/id/:id', userController.profile)
router.post('/profile', userController.profile)

router.get('/register', userController.register)
router.post('/register', userController.registerStore)

router.post('/login', validateUserForm, userController.loginProcess)
router.get('/login', userController.login)
router.get('/logout', userController.logOut)
router.get('/profileEdit', userController.profileEdit)

module.exports = router;