module.exports = (sequelize, DataTypes) => {
  const SavedRecipe = sequelize.define('SavedRecipe', {
    title: DataTypes.STRING,
    spoonId: DataTypes.INTEGER,
    image: DataTypes.STRING,
  })

  SavedRecipe.associate = function (model) {
    SavedRecipe.belongsTo(model.User)
  }

  return SavedRecipe
}