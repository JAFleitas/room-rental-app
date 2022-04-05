const { Op } = require("sequelize")

module.exports = async (req, res, next) => {
  let {
    services,
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
  if (services || exclude) {
    options.services = services
      ? services.split(" ")
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
    options.where.typePropertyID = type
  }

  // Añado las opciones de filtrado a la request
  req.options = options

  next()
}
