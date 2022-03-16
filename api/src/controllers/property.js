const { Property } = require("../db")

const getAll = async (req, res, next) => {
  try {
    const { attributes, sort, filters } = req.query

    let propiedades = await Property.findAll({
      attributes: { exclude: ["description", "numberOfReviews", "userID"] },
    })
    if (propiedades.length === 0) {
      return next({ message: "Properties not founded", status: 404 })
    }

    res.json(propiedades)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  // getById,
}
