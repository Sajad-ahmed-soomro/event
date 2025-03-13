
const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');


router.get('/user/login', UserController.loginUser);

router.post('/user/add',UserController.addUser);


module.exports = router;