const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    })

    const {error} = schema.validate(req.body)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please input a valid email address'
          })  
          break
        case 'password':
          res.status(400).send({
            error: 'Passwords ONLY contains lowercase, uppercase and number, and MUST be at least 8 characters.'
          })
          break;
        default:
          res.status(400).send({
            error: "invalid registration information"
          })
      }
    } else {
      next()
    }
  }
}