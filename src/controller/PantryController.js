const {Pantry} = require('../model')

module.exports = {
  async getPantry (req, res) {
    try {
      const user_id = req.user.id
      const pantry = await Pantry.findAll({
        where: {UserId: user_id}
      })
      res.send(pantry)
    } catch (error) {
      res.status(500)
    }
  },
  async addItem (req, res) {
    try {
      const item = await Pantry.create(req.body)
      res.send(item)
    } catch (error) {
      res.status(500).send({
        error: "An error has occured, failed to add item"
      })
    }
  },
  async removeItem (req, res) {
    try {
      const user_id = req.user.id
      const item_id = req.params.item_id;
      const item = await Pantry.findOne({
        where: {id: item_id, UserId: user_id}
      })
      if (!item) {
        return res.status(200).send("success")
      }
      await item.destroy()
      res.send(item)
    } catch (error) {
      res.status(500)
    }
  },
  async editItem (req, res) {
    try {
      const user_id = req.user.id
      const item_id = req.params.item_id;
      await Pantry.update(req.body, {
        where: {id: item_id, UserId: user_id}
      })
      res.send(req.body)
    } catch (error) {
      res.status(500).send({
        error: "An error has occured, failed to update this item"
      })
    }
  },
}