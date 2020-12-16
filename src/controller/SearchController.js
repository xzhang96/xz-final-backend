const axios = require('axios').default
const API_KEY = "63e19c90d65447fba63e8799d6112d7c"

module.exports = {
  async searchRecipes (req, res) {
    try {
      const search_string = req.query
      search_string.apiKey = API_KEY
      const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {params: search_string})
      if (response.data.totalResults === 0) {
        return res.status(404).send({
          error: "Recipes Not Found"
        })
      }
      return res.status(200).send(response.data)
    } catch (error) {
      return res.status(400).send({
        error: "An error occured, failed to search recipes"
      })
    }
  },
  async searchRecipesByIngredients (req, res) {
    try {
      const search_string = req.query
      search_string.apiKey = API_KEY
      const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {params: search_string})
      if (response.data.length === 0) {
        return res.status(404).send({
          error: "Recipes Not Found"
        })
      }
      return res.status(200).send(response.data)
    } catch (error) {
      return res.status(400).send({
        error: "An error occured, failed to search recipes"
      })
    }
  },
  async getRecipesById (req, res) {
    try {
      const id = req.params.recipe_id
      const response = await axios.get('https://api.spoonacular.com/recipes/' + id + '/information',
        {params: {apiKey: API_KEY}}
      )
      if (!response.data) {
        return res.status(404).send({
          error: "Recipes Not Found"
        })
      }
      return res.status(200).send(response.data)
    } catch (error) {
      return res.status(400).send({
        error: "An error occured, failed to search recipes"
      })
    }
  },
  async getInstructionById (req, res) {
    try {
      const id = req.params.recipe_id
      const response = await axios.get('https://api.spoonacular.com/recipes/' + id + '/analyzedInstructions',
        {params: {apiKey: API_KEY}}
      )
      if (response.data.length === 0) {
        return res.status(404).send({
          error: "Recipes Not Found"
        })
      }
      return res.status(200).send(response.data)
    } catch (error) {
      return res.status(400).send({
        error: "An error occured, failed to search recipes"
      })
    }
  }
}