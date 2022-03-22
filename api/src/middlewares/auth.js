const jwt = require("jsonwebtoken")
const { JWT_SECRET } = process.env

module.exports = async (req, res, next) => {
  // el token viene en el header de la petición, lo tomamos:
  const token = req.header("Authorization")

  // Si no nos han proporcionado un token lanzamos un error
  if (!token) {
    return next({ status: 403, message: "Token not found" })
  }

  if (
    typeof token !== "undefined" &&
    token.toLowerCase().startsWith("bearer")
  ) {
    const tokenValidate = token.split(" ")[1]
    req.token = tokenValidate
    try {
      const decoded = jwt.verify(tokenValidate, JWT_SECRET)
      req.user = decoded.user
      next()
    } catch (error) {
      res.sendStatus(403)
    }
  } else {
    res.sendStatus(403)
  }
}
