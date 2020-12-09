const bcrypt = require('bcrypt')

function hashPassword(user) {
  const SALT_ROUNDS = 10;
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(SALT_ROUNDS), null);
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
    }
  )

  User.prototype.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }

  User.associate = function (model) {
  }

  return User
}