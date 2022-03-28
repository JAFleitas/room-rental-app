const { Router } = require("express")
const auth = require("../middlewares/auth")
const {
  createUser,
  login,
  getUserDetail,
  disableUser,
  resetPassword,
  forgotPassword,
  updateUser,
  enableUser,
  loginWithGoogle,
} = require("../controllers/userController")

const userRouter = Router()

userRouter.post("/register", createUser)

// Facebook
userRouter.post("/login", login)

userRouter.post("/loginWithGoogle", loginWithGoogle)

userRouter.get("/", auth, getUserDetail)

userRouter.put("/", auth, updateUser)

userRouter.put("/reset-password", auth, resetPassword)

userRouter.post("/forgot-password", forgotPassword)

userRouter.post("/loginGoogle", login)

userRouter.put("/disableUser", auth, disableUser)

userRouter.put("/enableUser", auth, enableUser)

module.exports = userRouter
