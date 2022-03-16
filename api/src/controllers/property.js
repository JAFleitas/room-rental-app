const { Property } = require("../db")
const { Op } = require("sequelize")

const getAll = async (req, res, next) => {
  try {
    let {
      attributes,
      order = "ASC",
      orderBy = "name",
      search,
      exclude,
    } = req.query

    // Definimos que atributos quiere traer o excluir
    if (attributes || exclude) {
      attributes
        ? (attributes = attributes.split(" "))
        : (attributes = { exclude: exclude.split(" ") })
    }

    // Definiendo el ordenamiendo: default por nombre ascendentemente
    orderBy = orderBy.split(" ")
    orderBy.push(order)
    let ordenamiento = [orderBy]

    // Definimos si hay un termino de búsqueda
    if (search) {
      search = {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      }
    }

    let properties

    if (search) {
      properties = await Property.findAll({
        attributes: attributes || {
          exclude: ["description", "userID"],
        },
        order: ordenamiento,
        where: search,
      })
    } else {
      properties = await Property.findAll({
        attributes: attributes || {
          exclude: ["description", "userID"],
        },
        order: ordenamiento,
      })
    }

    if (properties.length === 0) {
      return next({ message: "Properties not founded", status: 404 })
    }

    res.json(properties)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  // getById,
}
