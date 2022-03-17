const { Property } = require("../db/index.js")
const { Op } = require("sequelize")
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

const addProperty = async (req, res) => {
  const {
    name,
    location,
    price,
    stock,
    numberOfRooms,
    maxNumberOfPeople,
    description,
    rating,
    numberOfReviews,
    userID,
  } = req.body
  if (name) {
    try {
      const newProperty = await Property.create({
        name,
        location,
        price,
        stock,
        numberOfRooms,
        maxNumberOfPeople,
        description,
        rating,
        numberOfReviews,
        userID,
      })
      if (newProperty)
        res.status(201).json({ message: "Created Property", data: newProperty })
      else res.status(500).json({ message: "Property not Created" })
    } catch (e) {
      res.status(500).json(e)
    }
  } else {
    res.status(404).json({ message: "Error Required Field not Found" })
  }
}

const getAll = async (req, res, next) => {
  try {
    let {
      attributes,
      order = "ASC",
      orderBy = "name",
      search,
      exclude,
    } = req.query
    const options = {}

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
    const properties = await Property.findAll(options)

    if (properties.length === 0) {
      return next({ message: "Properties not founded", status: 404 })
    }

    res.json(properties)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getPropertyById,
  addProperty,
  getAll,
}
