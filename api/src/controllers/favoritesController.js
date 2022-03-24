const { Favorite, FavoriteProperty, Op } = require("../db/index.js")


const getFavoriteList = async (req, res, next) => {

  try {
    // Si no existe lo creo
    await Favorite.findOrCreate({
      where: { userId: req.user.id },
    })

    const list = await Favorite.findOne({
      where: {
        userId: req.user.id,
      },
      include: [
        {
          model: FavoriteProperty,
          attributes: ["propertyId"],
          // through: {
          //   attributes: [],
          // },
        },
      ],
    })

    res.json(list)
  } catch (error) {
    // console.log(error);
    next(error);
  }
}

const createFavorite = async (req, res, next) => {
  try {
    const {properties} = req.body;
    
    const [ row ] = await Favorite.findOrCreate({
      where: { userId: req.user.id },
    })
    
    if(properties?.length){
      await Promise.all(
        properties.map(
          async propertyId =>
            await FavoriteProperty.findOrCreate({
              where: {
                [Op.and]: [{ propertyId }, { favoriteId: row.dataValues.id }],
              },
            }),
        ),
      )
    }

    res.json(row)
  } catch (error) {
    // console.log(error)
    next({status: 400, message: error.message})
  }
}

const addProperty = async (req, res, next) => {
  const { property: propertyId } = req.body
  const {favoriteId} = req.params;

  if(propertyId){
    try {
      const [row] = await FavoriteProperty.findOrCreate({where: {favoriteId, propertyId}})

      res.status(201).json(row)
    }catch(err){
      // console.log(err);
      next(err);
    }
  }else{
    next({status: 400, message: "property field is required"});    
  }
}

const removePropertyItem = async (req, res, next) => {
  const { favoriteId } = req.params;
  const { property: propertyId} = req.body

  try {
    await FavoriteProperty.destroy({
      where: { favoriteId, propertyId },
    })

    res.status(204).end()
  }catch(err){
    // console.log(err);
    next(err);
  }
}

module.exports = {
  createFavorite,
  getFavoriteList,
  removePropertyItem,
  addProperty,
}
