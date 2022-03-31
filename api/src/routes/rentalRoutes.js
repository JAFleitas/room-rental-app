const { Router } = require("express")

const auth = require("../middlewares/auth")
const adminAuth = require("../middlewares/adminAuth")

const {
  addRental,
  getRental,
  getRentalsByUser,
  getAllRentals,
} = require("../controllers/rentalControllers")

const router = Router()

router.post("/addRental", auth, addRental)

router.post("/getRental", getRental) /// DEJENLA POST

router.get("/getAllRentals", auth, adminAuth, getAllRentals)

router.get("/getRentalsByUser", auth, getRentalsByUser)

module.exports = router
