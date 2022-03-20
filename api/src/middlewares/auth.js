const jwt = require("jsonwebtoken")
const { User } = require("../db")
const { JWT_SECRET } = process.env

module.exports = async (req, res, next) => {
  // el token viene en el header de la petición, lo tomamos:
  const token = req.header("x-auth-token")

  // Si no nos han proporcionado un token lanzamos un error
  if (!token) {
    return next({ status: 404, message: "Token not found" })
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET)

    // Compruebo que efectivamente el usuario exista en la DDBB
    const user = await User.findByPk(decoded.user.id)
    !user && next({ status: 400, message: "Invalid user" })

    // Obtenemos el payload del token (usuario)
    req.user = decoded.user
    next()
  } catch (error) {
    console.log(error) 
    next({ status: 400, message: "Invalid token" })
  }
}
