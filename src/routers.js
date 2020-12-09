const { response } = require('express');
const express = require('express');
const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationControllerPolicy = require('./policy/AuthenticationControllerPolicy')
const PantryController = require('./controller/PantryController')

const router = express.Router();

router.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
)

router.post('/login', 
    AuthenticationController.login
)

router.get('/getPantry/:user_id', PantryController.getPantry)

router.post('/pantry/add_item', PantryController.addItem)

router.delete('/pantry/remove_item/:item_id', PantryController.removeItem)

router.put('/pantry/edit_item/:item_id', PantryController.editItem)

module.exports = router;