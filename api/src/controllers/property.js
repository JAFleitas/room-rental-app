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
    let options = {}

    // Definimos que atributos quiere traer o excluir
    if (attributes || exclude) {
      options.attributes = attributes
        ? attributes.split(" ")
        : { exclude: exclude.split(" ") }
    }

    // Definiendo el ordenamiendo: default por nombre ascendentemente
    orderBy = orderBy.split(" ")
    orderBy.push(order)
    options.order = [orderBy]

    // Definimos si hay un termino de búsqueda
    if (search) {
      options.where = {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      }
    }

    // console.log(options)
    let properties = await Property.findAll(options)

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
