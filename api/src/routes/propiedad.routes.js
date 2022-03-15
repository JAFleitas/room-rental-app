const { router } = require('express');
const { getAll  } = require('../controllers/propiedad');

const propiedadRouter = router();

//@route Public /propiedades
//@desc Get all propiedades
//@access Public
propiedadRouter.get('/', (req, res, next) => {
  try{
    const {error, propiedades} = getAll();
    error ? next(error) : res.json(propiedades);
  }catch(err){
    next(err);
  }
});

module.exports = propiedadRouter;