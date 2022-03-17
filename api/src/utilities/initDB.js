const properties = require("../data/properties.json");
const users = require("../data/users.json");
const { Property, User } = require("../db")

module.exports = async () => {
  try{
    await User.bulkCreate(users)
    console.log("Usuarios cargados en la DDBB"); // eslint-disable-line no-console
  }catch(err){
    console.log(`Tipo de error: ${err}`); // eslint-disable-line no-console
    console.log("No se han podido cargar los usuarios"); // eslint-disable-line no-console
  }

  try {
    await Property.bulkCreate(properties)
    console.log("Propiedades cargados en la DDBB") // eslint-disable-line no-console
  } catch (err) {
    console.log(`Tipo de error: ${err}`) // eslint-disable-line no-console
    console.log("No se han podido cargar las propiedades") // eslint-disable-line no-console
  }
}