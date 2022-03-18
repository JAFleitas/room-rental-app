const properties = require("../data/properties.json");
const users = require("../data/users.json");
const services = require("../data/Services.json");
const typesProperty = require("../data/type_property.json")
const { Property, User, Service, Type_property: TypeProperty } = require("../db");
const usersIds = [
  "b49a5948-21a0-44c3-92fc-20b626d94dc2",
  "3ae3b92c-af90-40b4-a5de-8d8f1bb4096e",
  "b2119946-a958-4744-ad61-f05ce92f7024",
  "79864a10-2446-42e5-ab6d-6867f08eca69",
];

module.exports = async () => {
  console.log("Inicializando DDBB...") // eslint-disable-line no-console
  try {
    await Service.bulkCreate(services, { validate: true })
    console.log("- Servicios cargados en la DDBB") // eslint-disable-line no-console
  } catch (err) {
    console.log(`Tipo de error: ${err}`) // eslint-disable-line no-console
    console.log("No se han podido cargar los servicios") // eslint-disable-line no-console
  }

  try {
    await TypeProperty.bulkCreate(typesProperty, { validate: true })
    console.log("- Tipos de propiedad cargados en la DDBB") // eslint-disable-line no-console
  } catch (err) {
    console.log(`Tipo de error: ${err}`) // eslint-disable-line no-console
    console.log("No se han podido cargar los tipos de propiedades") // eslint-disable-line no-console
  }

  try {
    await User.bulkCreate(users, { validate: true })
    console.log("- Usuarios cargados en la DDBB") // eslint-disable-line no-console
  } catch (err) {
    console.log(`Tipo de error: ${err}`) // eslint-disable-line no-console
    console.log("No se han podido cargar los usuarios") // eslint-disable-line no-console
  }

  try {
    function randomNumber(min, max) {
      const r = Math.random() * (max - min) + min
      return Math.floor(r)
    }
    await Promise.all(
      properties.map(async property => {
        const {
          id,
          name,
          location,
          price,
          numberOfRooms,
          maxNumberOfPeople,
          description,
          rating,
          image,
          // flat,
          services,
          typePropertyID,
        } = property
        const userID = usersIds[randomNumber(0, 3)]
        const createdProperty = await Property.create({
          id,
          name,
          location,
          price,
          numberOfRooms,
          maxNumberOfPeople,
          description,
          rating,
          image,
          // flat,
          typePropertyID,
          userID,
        })

        await Promise.all(
          services.map(
            async service => await createdProperty.addService(service),
          ),
        )
      }),
    )
    console.log("- Propiedades cargadas en la DDBB") // eslint-disable-line no-console
  } catch (err) {
    console.log(`Tipo de error: ${err}`) // eslint-disable-line no-console
    console.log("No se han podido cargar las propiedades") // eslint-disable-line no-console
  }
}