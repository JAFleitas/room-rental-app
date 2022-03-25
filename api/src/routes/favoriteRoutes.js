const { Router } = require("express");
const auth = require("../middlewares/auth");
const { removePropertyItem, getFavoriteList, createFavorite, addProperty } = require("../controllers/favoritesController")


const favoriteRouter = Router()

favoriteRouter.get("/user-favorites", auth, getFavoriteList)

favoriteRouter.post("/", auth, createFavorite);

favoriteRouter.put("/add/:favoriteId", auth, addProperty)

favoriteRouter.put("/remove/:favoriteId", auth, removePropertyItem)


module.exports = favoriteRouter
