const { response } = require('express');
const express = require('express');
const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationControllerPolicy = require('./policy/AuthenticationControllerPolicy')

const router = express.Router();

router.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
)

module.exports = router;