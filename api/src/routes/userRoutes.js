const { Router } = require("express")

const { createUser, login, getUserDetail } = require("../controllers/userController")

const userRouter = Router()

userRouter.post("/register", createUser)

// Facebook
userRouter.post("/login", login)

// Google
userRouter.post("/loginGoogle", login)

userRouter.get("/:id", getUserDetail)

module.exports = userRouter
