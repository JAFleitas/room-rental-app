const { Router } = require("express")

const { getPropertyById } = require("../controllers/PropertyController")

const router = Router()

router.get("/getPropertyById/:id", getPropertyById)

module.exports = router
