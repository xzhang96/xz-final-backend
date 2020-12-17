module.exports = (sequelize, DataTypes) => {
    const Pantry = sequelize.define('Pantry', {
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        unit: DataTypes.STRING,
    });

    Pantry.associate = function (model) {
        Pantry.belongsTo(model.User);
    };

    return Pantry;
};
