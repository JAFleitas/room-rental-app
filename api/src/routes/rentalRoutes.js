const { Router } = require("express")

const { addRental } = require("../controllers/rentalControllers")

const router = Router()

router.post("/addRental", addRental)

module.exports = router
