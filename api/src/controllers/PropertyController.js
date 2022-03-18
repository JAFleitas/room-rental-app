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
      minprice = null,
      maxprice = null,
      type, // id_type_property
      location,
      minrooms = null,
      maxrooms = null,
      minpeople = null,
      maxpeople = null,
    } = req.query
    const options = { where: {} }

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

    // Definimos si filtrado por locacion
    if (location) {
      options.where = {
        location: {
          [Op.iLike]: `%${location}%`,
        },
      }
    }

    // Definimos si hay un termino de búsqueda
    if (search) {
      options.where = {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      }
    }

    // Defino si hay filtros por precio
    if (minprice !== null && maxprice !== null) {
      options.where.price = {
        [Op.and]: [{ [Op.gte]: minprice }, { [Op.lte]: maxprice }],
      }
    } else if (minprice !== null || maxprice !== null) {
      options.where.price =
        minprice !== null
          ? {
              [Op.gte]: minprice,
            }
          : {
              [Op.lte]: maxprice,
            }
    }

    // Defino si hay filtros por numero de cuartos
    if (minrooms !== null && maxrooms !== null) {
      options.where.numberOfRooms = {
        [Op.and]: [{ [Op.gte]: minrooms }, { [Op.lte]: maxrooms }],
      }
    } else if (minrooms !== null || maxrooms !== null) {
      options.where.numberOfRooms =
        minrooms !== null
          ? {
              [Op.gte]: minrooms,
            }
          : {
              [Op.lte]: maxrooms,
            }
    }

    // Defino si hay filtros por numero de personas permitido con rango
    if (minpeople !== null && maxpeople !== null) {
      options.where.maxNumberOfPeople = {
        [Op.and]: [{ [Op.gte]: minpeople }, { [Op.lte]: maxpeople }],
      }
    } else if (minpeople !== null || maxpeople !== null) {
      options.where.maxNumberOfPeople =
        minpeople !== null
          ? {
              [Op.gte]: minpeople,
            }
          : {
              [Op.lte]: maxpeople,
            }
    }

    // Defino si hay filtros por typo de propiedad
    if (type) {
      options.where.id_type_property = type
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
