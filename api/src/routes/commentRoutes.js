const { Router } = require("express")
const auth = require("../middlewares/auth")
const { createComment, updateComment, deleteComment, getAllCommentsByProperty, getAllCommentsByUser } = require("../controllers/commentController")

const commentRouter = Router()


commentRouter.get("/", getAllCommentsByProperty )

commentRouter.get("/byUserId", getAllCommentsByUser )

commentRouter.post("/", auth,createComment )

commentRouter.put("/", auth, updateComment )

commentRouter.delete("/", auth, deleteComment)

module.exports = commentRouter
