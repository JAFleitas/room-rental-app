const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const PropertyRoutes = require("./PropertyRoutes"); 

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/app", PropertyRoutes);

module.exports = router;