const { Router } = require("express")
const getFiltersProperty = require("../middlewares/getFiltersProperty")
const auth = require("../middlewares/auth")

const {
  getPropertyById,
  addProperty,
  getAll,
} = require("../controllers/PropertyController")

const router = Router()

router.get("/getPropertyById/:id", getPropertyById)

router.post("/addProperty", auth, addProperty)

router.get("/getProperties", getFiltersProperty, getAll)

module.exports = router
