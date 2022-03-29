const { Router } = require("express")

const auth = require("../middlewares/auth")
const adminAuth = require("../middlewares/adminAuth")

const {
  addRental,
  getRental,
  getAllRentals,
} = require("../controllers/rentalControllers")

const router = Router()

router.post("/addRental", auth, addRental)

router.get("/getRental", getRental)

router.get("/getAllRentals", auth, adminAuth, getAllRentals)

module.exports = router
