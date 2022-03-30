const { Op } = require("sequelize")

const { Property, Service, Comment, User } = require("../db/index.js")

const getPropertyById = async (req, res, next) => {
  try {
    const id = req.params.id
    const propertyDB = await Property.findOne({
      where: {
        id,
      },
      attributes: { exclude: ["userID"] },
      include: [
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["name", "lastname"],
          },
          attributes: { exclude: ["userId", "propertyId"] },
        },
        {
          model: User,
          attributes: ["name", "lastname"],
        },
        {
          model: Service,
          through: {
            attributes: [],
          },
        },
      ],
    })

    if (propertyDB) {
      return res.status(200).json(propertyDB)
    } else {
      return res.status(404).json({ error: "Property not found" })
    }
  } catch (e) {
    console.log(e)
    next(e)
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
    discount,
    services,
    typePropertyID,
  } = req.body.data
  const { id } = req.user
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
        discount,
        services,
        typePropertyID,
        userID: id,
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

const editProperty = async (req, res) => {
  const {
    idProperty,
    name,
    location,
    price,
    numberOfRooms,
    maxNumberOfPeople,
    image,
    services,
    description,
    discount,
    typePropertyID,
    coordinates,
  } = req.body.data
  console.log(idProperty)
  const { id } = req.user
  if (id) {
    await Property.update(
      {
        name,
        location,
        price,
        numberOfRooms,
        maxNumberOfPeople,
        image,
        services,
        description,
        discount,
        typePropertyID,
        coordinates,
      },
      { where: { [Op.and]: [{ id: idProperty }, { userID: id }] } },
    )
  }
  res.send("Datos recibidos con éxito")
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
  editProperty,
  getAll,
}
