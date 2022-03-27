const { Router } = require("express")

const auth = require("../middlewares/auth")

const { addRental } = require("../controllers/rentalControllers")

const router = Router()

router.post("/addRental", auth, addRental)

module.exports = router
