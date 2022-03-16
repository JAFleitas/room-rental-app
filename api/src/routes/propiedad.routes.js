const { Router } = require('express');
const { getAll  } = require('../controllers/property');

const propiedadRouter = Router();

//@route Public /propiedades
//@desc Get all propiedades
//@access Public
propiedadRouter.get('/', getAll);

module.exports = propiedadRouter;