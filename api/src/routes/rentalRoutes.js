const { Router } = require("express")

const auth = require("../middlewares/auth")
const adminAuth = require("../middlewares/adminAuth")

const {
  addRental,
  getRental,
  getRentalsByUser,
  getAllRentals,
  cancelRental,
  getMonthlyIncome,
} = require("../controllers/rentalControllers")

const router = Router()

router.post("/addRental", auth, addRental)


router.post("/getRental", getRental)


router.get("/getAllRentals", auth, adminAuth, getAllRentals)

router.get("/getRentalsByUser", auth, getRentalsByUser)

router.put("/cancelRental", cancelRental)

router.get("/incomes", getMonthlyIncome)

module.exports = router
