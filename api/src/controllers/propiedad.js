const { Propiedad } = require('../db');

const getAll = async() => {
  try{
    let propiedades = await Propiedad.findAll({ attributes: ["title", "price"] });
      if (propiedades.length === 0) {
         return {error: {message: "Propiedades not founded"}};
      }
      
      return { propiedades };
  }catch(error){
    return {error};
  }
}

module.exports = {
  getAll, 
  // getById,
}