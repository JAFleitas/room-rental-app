const { Router } = require("express")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const PropertyRoutes = require("./PropertyRoutes")
const rentalRoutes = require("./rentalRoutes")
const userRouter = require("./userRoutes")
const servicesRoutes = require("./servicesRoutes")
const categoriesRoutes = require("./categoriesRoutes")
const favoriteRouter = require("./favoriteRoutes")
const emailRouter = require("./emailRouter")
const paymenthMethodRouter = require("./paymentMethodRoutes")
const commentRouter = require("./commentRoutes")

const router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/properties", PropertyRoutes)
router.use("/rentals", rentalRoutes)
router.use("/users", userRouter)
router.use("/services", servicesRoutes)
router.use("/categories", categoriesRoutes)
router.use("/favorites", favoriteRouter)
router.use("/comments", commentRouter)
router.use("/email", emailRouter)
router.use("/payment-method", paymenthMethodRouter)

module.exports = router
