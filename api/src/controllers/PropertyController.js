const { Property, Service, PropertyRental } = require("../db/index.js")
// const { Property_rental } = require("../db/index.js")

const getPropertyById = async (req, res, next) => {
  try {
    const id = req.params.id
    const propertyDB = await Property.findAll({
      where: {
        id: id,
      },
      // include: {
      //   model: PropertyRental,
      // },
    })
    console.log(propertyDB)
    if (propertyDB) {
      return res.status(200).json(propertyDB)
    } else {
      return res.status(404).json({ error: "propiedad no encontrada" })
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
    numberOfRooms,
    maxNumberOfPeople,
    description,
    image,
    coordinates,
    floor,
    discount,
    services,
    typePropertyID,
    userID,
  } = req.body
  if (name) {
    try {
      const newProperty = await Property.create({
        name,
        location,
        price,
        numberOfRooms,
        maxNumberOfPeople,
        description,
        image,
        coordinates,
        floor,
        discount,
        services,
        typePropertyID,
        userID,
      })
      await Promise.all(
        services.map(async service => await newProperty.addService(service)),
      )

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
    const options = req.options || { where: {} }

    let { page } = req.query

    page = page ?? 1
    const PropertyXpage = 6

    // incluimos los servicios de la propiedad
    options.include = [
      {
        model: Service,
        attributes: ["name", "id"],
        through: {
          attributes: [], // que atributos de aquí quiero o si está vacío me elimina el atributo Country anidado
        },
      },
    ]

    // console.log(options)
    const properties = await Property.findAll(options)

    if (properties.length === 0) {
      return next({ message: "Properties not founded", status: 404 })
    }

    // Paginación
    const PropertyWithPagination = properties.slice(
      PropertyXpage * (page - 1),
      PropertyXpage * (page - 1) + PropertyXpage,
    )

    res.json({
      totalPages: Math.ceil(properties.length / PropertyXpage),
      properties: PropertyWithPagination,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getPropertyById,
  addProperty,
  getAll,
}
