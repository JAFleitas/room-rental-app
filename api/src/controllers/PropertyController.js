const { Property } = require("../db/index.js")

const getPropertyById = async (req, res, next) => {
  try {
    const id = req.params.id
    const propertyDB = await Property.findAll({
      where: {
        id: id,
      },
    })
    if (propertyDB) {
      return res.status(200).send(propertyDB)
    } else {
      return res.status(404).send({ error: "propiedad no encontrada" })
    }
  } catch (e) {
    res.status(500).send(e)
  }
}

module.exports = {
  getPropertyById,
}
