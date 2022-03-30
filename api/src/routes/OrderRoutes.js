const { Router } = require ("express");

const { 
    getOrderById, 
    addOrder,
} = require ("../controllers/OrderController")

const router = Router ()

router.get("/orderById/:id", getOrderById)

router.post("/addOrder", addOrder)

module.exports = router