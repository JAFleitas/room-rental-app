const { Router } = require("express")
const {contactController} = require("../controllers/rentalControllers")

const router = Router()

router.post("/email", contactController)
module.exports = router