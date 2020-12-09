module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    spoon_id: DataTypes.INTEGER,
    calories: DataTypes.INTEGER,
    image: DataTypes.STRING,
  })

  Recipe.associate = function (model) {
    Recipe.belongsTo(model.User)
  }

  return Recipe
}