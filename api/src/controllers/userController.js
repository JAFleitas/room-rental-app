const { User } = require("../db/index.js")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = process.env

const createUser = async (req, res, next) => {
  const {
    name,
    lastname,
    country,
    email,
    city,
    password,
    credit_card_number,
  } = req.body;

  if (!name || !lastname || !country || !email || !city || !password){
    return next({status: 400, message: "All fields are required"});
  }
  try {
    let user = await User.findOne({ where: { email } })

    // Si el correo ya está registrado, devuelvo un error
    if (user) {
      return next({ status: 400, message: "User already exists" })
    }

    // Creamos el nuevo usuario y lo guardamos en la DB
    user = await User.create({
      name,
      lastname,
      country,
      email,
      city,
      password,
      credit_card_number,
      status: "enabled",
    })

    // generamos el payload/body para generar el token
    const payload = {
      usuario: {
        id: user.id,
      },
    }

    jwt.sign(
      payload,
      JWT_SECRET,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        if (err) throw err
        res.status(201).json({ token })
      },
    )
  } catch (err) {
    console.log(err)
    next({})
  }
}

module.exports = {
  createUser,
}
