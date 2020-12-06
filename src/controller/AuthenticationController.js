const {User} = require('../model')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.status(200).send(user)
    } catch (error) {
      res.status(400).send({
        error: 'This email account already exists'
      })
    }
  }
}