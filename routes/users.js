var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
<<<<<<< HEAD

=======
>>>>>>> a6ca5855e0cce9be7f5a2fd9b0980c06dec48a27

//router.get('/id/:id', userController.filterById)
router.get('/register', userController.register)
//router.get('/login', userController.login)



module.exports = router;
