const {Pantry} = require('../model')

module.exports = {
  async getPantry (req, res) {
    let user_id = req.params.user_id
    try {
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
    const item_id = req.params.item_id;
    try {
      const item = await Pantry.findOne({
        where: {id: item_id}
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
      await Pantry.update(req.body, {
        where: {id: req.params.item_id}
      })
      res.send(req.body)
    } catch (error) {
      res.status(500).send({
        error: "An error has occured, failed to update this item"
      })
    }
  },
}