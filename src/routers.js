const express = require('express');
const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationControllerPolicy = require('./policy/AuthenticationControllerPolicy')
const PantryController = require('./controller/PantryController')
const isAuthenticated = require('./policy/isAuthenticated');
const SavedRecipeController = require('./controller/SavedRecipeController');
const SearchController = require('./controller/SearchController')

const router = express.Router();

router.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
router.post('/login',
    AuthenticationController.login)
router.put('/editProfile',
    isAuthenticated,
    AuthenticationController.editProfile)

router.get('/getPantry',
    isAuthenticated,
    PantryController.getPantry)
router.post('/pantry/addItem',
    isAuthenticated,
    PantryController.addItem)
router.delete('/pantry/removeItem/:item_id',
    isAuthenticated,
    PantryController.removeItem)
router.put('/pantry/editItem/:item_id',
    isAuthenticated,
    PantryController.editItem)

router.get('/getRecipes',
    isAuthenticated,
    SavedRecipeController.getSavedRecipes)
router.post('/recipe/saveRecipe',
    isAuthenticated,
    SavedRecipeController.saveRecipe)
router.delete('/recipe/removeRecipe/:recipe_id',
    isAuthenticated,
    SavedRecipeController.removeRecipe)

router.get('/searchRecipes',
    SearchController.searchRecipes)
router.get('/searchRecipesByIngredients',
    SearchController.searchRecipesByIngredients)
router.get('/getRecipesById/:recipe_id',
    SearchController.getRecipesById)
router.get('/getInstructionsById/:recipe_id',
    SearchController.getInstructionById)

module.exports = router;