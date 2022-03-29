const { Router } = require("express")

const auth = require("../middlewares/auth")

const {
  addRental,
  getRental,
  getRentalsByUser,
} = require("../controllers/rentalControllers")

const router = Router()

router.post("/addRental", auth, addRental)

router.post("/getRental", getRental)

router.get("/getRentalsByUser", auth, getRentalsByUser)

module.exports = router
