const { Router } = require("express")
const getFiltersProperty = require("../middlewares/getFiltersProperty")
const auth = require("../middlewares/auth")

const {
  getPropertyById,
  addProperty,
  editProperty,
  getAll,
  getPropertyByUser,
  disabledProperty,
} = require("../controllers/PropertyController")

const router = Router()

router.get("/getPropertyById/:id", getPropertyById)

router.post("/addProperty", auth, addProperty)

router.put("/editProperty", auth, editProperty)

router.post("/getProperties", getFiltersProperty, getAll)

router.get("/getPropertiesByUserId", auth, getPropertyByUser)

router.put("/deleteProperty", auth, disabledProperty)

module.exports = router
