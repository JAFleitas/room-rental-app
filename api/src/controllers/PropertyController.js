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
  console.log(id)
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

const getPropertyByUser = async (req, res, next) => {
  try {
    const userID = req.user.id
    console.log("aca")
    console.log(userID)

    const properties = await Property.findAll({
      where: {
        userID: userID,
      },
    })
    console.log(properties)
    if (properties) {
      return res.status(200).json(properties)
    } else {
      return res.status(404).json({ error: "User does not have properties" })
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const disabledProperty = async (req, res, next) => {
  try {
    const { id, userId } = req.body
    const propertyDB = await Property.findOne({
      where: {
        id: id,
      },
    })
    if (!propertyDB) {
      res.json({ message: "This Property doesnt exists" })
    }
    if (propertyDB.dataValues.status === "enabled") {
      const updateProperty = await Property.update(
        {
          ...propertyDB.dataValues,
          status: "disabled",
        },
        {
          where: {
            id: propertyDB.dataValues.id,
          },
        },
      )
      const properties = await Property.findAll({
        where: {
          userID: userId,
        },
      })
      if (updateProperty) {
        res.status(200).send("Property deleted succesfully" + properties)
      }
    } else if (propertyDB.dataValues.status === "disabled") {
      res.json({ status: 400, message: "This property is already Disabled " })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getPropertyById,
  addProperty,
  getAll,
  getPropertyByUser,
  disabledProperty,
}
