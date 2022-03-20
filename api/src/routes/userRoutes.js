const { Router } = require("express")

const { createUser, login, getUserDetail } = require("../controllers/userController")

const userRouter = Router()

userRouter.post("/register", createUser)

userRouter.post("/login", login)

userRouter.get("/:id", getUserDetail)

module.exports = userRouter
