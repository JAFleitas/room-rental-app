const { Router } = require("express")

const auth = require("../middlewares/auth")

const { addRental, getRental } = require("../controllers/rentalControllers")

const router = Router()

router.post("/addRental", auth, addRental)

router.post("/getRental", getRental)

module.exports = router
