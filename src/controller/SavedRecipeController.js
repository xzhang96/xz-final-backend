const {Recipe} = require('../model')

module.exports = {
  async getSavedRecipes (req, res) {
    try {
      const user_id = req.user.id
      const recipes = await Recipe.findAll({
        where: {UserId: user_id}
      })
      res.send(recipes)
    } catch (error) {
      res.status(500)
    }
  },
  async saveRecipe (req, res) {
    try {
      const recipe = await Recipe.create(req.body)
      res.send(recipe)
    } catch (error) {
      res.status(500).send({
        error: "An error has occured, failed to add recipe"
      })
    }
  },
  async removeRecipe (req, res) {
    try {
      const user_id = req.user.id
      const recipe_id = req.params.recipe_id;
      const recipe = await Pantry.findOne({
        where: {id: recipe_id, UserId: user_id}
      })
      if (!recipe) {
        return res.status(200).send("success")
      }
      await recipe.destroy()
      res.send(recipe)
    } catch (error) {
      res.status(500).send({
        error: "An error has occured, failed to remove recipe"
      })
    }
  }
}