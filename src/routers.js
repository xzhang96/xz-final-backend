const { response } = require('express');
const express = require('express');
const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationControllerPolicy = require('./policy/AuthenticationControllerPolicy')
const PantryController = require('./controller/PantryController')
const isAuthenticated = require('./policy/isAuthenticated');
const RecipeController = require('./controller/RecipeController');

const router = express.Router();

router.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
)
router.post('/login',
    AuthenticationController.login)

router.get('/getPantry',
    isAuthenticated,
    PantryController.getPantry)
router.post('/pantry/add_item',
    PantryController.addItem)
router.delete('/pantry/remove_item/:item_id',
    isAuthenticated,
    PantryController.removeItem)
router.put('/pantry/edit_item/:item_id',
    isAuthenticated,
    PantryController.editItem)

router.get('/getRecipes',
    isAuthenticated,
    RecipeController.getRecipes)
router.post('/recipe/add_recipe',
    RecipeController.addRecipe)
router.delete('/recipe/remove_recipe/:recipe_id',
    isAuthenticated,
    RecipeController.removeRecipe)

router.get('/searchRecipes', )

module.exports = router;