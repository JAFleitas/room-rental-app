/* eslint-disable camelcase */
const { Op } = require("sequelize")
const { compareDates } = require("../utilities/compareDates")
const {
  Property,
  Service,
  Comment,
  User,
  PropertyRental,
} = require("../db/index.js")
const { includeServices } = require("../utilities/includeServices")

const getPropertyById = async (req, res, next) => {
  try {
    const id = req.params.id
    const propertyDB = await Property.findOne({
      where: {
        id,
      },

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
    typePropertyID,
    coordinates,
  } = req.body.data
  // console.log(idProperty)
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
    const { final_date, start_date } = req.body

    const options = req.options || { where: {} }
    console.log(options.services)
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
      {
        model: PropertyRental,
        attributes: ["start_date", "final_date"],
      },
    ]

    // console.log(options)
    let properties = await Property.findAll(options)

    if (properties.length === 0) {
      return next({ message: "Properties not founded", status: 404 })
    }
    if (final_date?.length || start_date?.length) {
      properties = properties.filter(e => {
        if (
          !e.PropertyRentals.every(rental =>
            compareDates(
              rental.start_date,
              rental.final_date,
              start_date,
              final_date,
            ),
          )
        ) {
          return false
        }
        return e
      })
    }
    if (options?.services?.length > 0) {
      properties = properties.filter(property =>
        includeServices(property.services, options.services) ? property : null,
      )
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

    const properties = await Property.findAll({
      where: {
        userID: userID,
        status: "enabled",
      },
    })

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
    const { ID } = req.body
    const propertyDB = await Property.findOne({
      where: {
        id: ID,
      },
      include: {
        model: PropertyRental,
      },
    })

    if (!propertyDB) {
      res.json({ message: "This Property doesnt exists" })
    }
    if (
      propertyDB.status === "enabled" &&
      propertyDB.PropertyRentals.length === 0
    ) {
      // const updateProperty =
      await Property.update(
        {
          status: "disabled",
        },
        {
          where: {
            id: propertyDB.id,
          },
        },
      )
      // const properties = await Property.findAll({
      //   where: {
      //     userID: userID,
      //   },
      // })
      // if (updateProperty) {
      //   res.status(200).send("Property deleted succesfully")
      // }
      // } else
    } else if (propertyDB.status === "disabled") {
      res.json({ status: 400, message: "This property is already Disabled " })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getPropertyById,
  addProperty,
  editProperty,
  getAll,
  getPropertyByUser,
  disabledProperty,
}
