const { Property } = require("../db/index.js")

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
  } = req.body;
  if(name) {
    try{
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
      });
      if(newProperty) res.status(201).json({message:"Created Property", data:newProperty});
      else res.status(500).json({message:"Property not Created"});
    }catch (e) {
      res.status(500).json(e);
    }
  }else {
    res.status(404).json({message:"Error Required Field not Found"})
  }


}

module.exports = {
  getPropertyById,
  addProperty,
}
