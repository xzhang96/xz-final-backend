const {User} = require('../model')
const jwt = require('jsonwebtoken')
const config = require('../config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.status(200).send({
        user: user.dataValues,
        token: jwtSignUser(user.dataValues)
      })
    } catch (error) {
      res.status(400).send({
        error: 'This email account already exists'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'The login information is incorrect'
        })
      }
      if (await user.checkPassword(password)) {
        return res.status(403).send({
          error: 'The login information is incorrect'
        })
      }

      res.status(200).send({
        user: user.dataValues,
        token: jwtSignUser(user.dataValues)
      })
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: 'An error has occured, failed to login'
      })
    }
  },
  async editProfile (req, res) {
    try {
      const {firstName, lastName, email, password} = req.body
      const user = req.user
      user.firstName = firstName
      user.lastName = lastName
      user.email = email
      user.password = password
      const updated = await user.save()
      res.status(200).send({
        user: updated.dataValues,
        token: jwtSignUser(updated.dataValues)
      })
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: 'An error has occured, failed to edit profile'
      })
    }
  }
}