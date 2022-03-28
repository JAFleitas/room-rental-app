const { Router } = require("express")
const {contactController} = require("../controllers/contactController")

const router = Router()

router.post("/email", contactController)

module.exports = router