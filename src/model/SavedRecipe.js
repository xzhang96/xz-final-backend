module.exports = (sequelize, DataTypes) => {
  const SavedRecipe = sequelize.define('SavedRecipe', {
    title: DataTypes.STRING,
    spoon_id: DataTypes.INTEGER,
    calories: DataTypes.INTEGER,
    image: DataTypes.STRING,
  })

  SavedRecipe.associate = function (model) {
    SavedRecipe.belongsTo(model.User)
  }

  return SavedRecipe
}