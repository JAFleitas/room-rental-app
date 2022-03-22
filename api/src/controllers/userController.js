const { User } = require("../db/index.js")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = process.env
const bcrypt = require("bcrypt")
const createUser = async (req, res, next) => {
  const { name, lastname, country, email, password } = req.body

  if (!name || !lastname || !country || !email || !password) {
    return next({ status: 400, message: "All fields are required" })
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
      password,
    })

    // generamos el payload/body para generar el token
    const payload = {
      user: {
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

const login = async (req, res, next) => {
  // Si no hay errores, continúo
  const { email, password } = req.body

  if (!email || !password) {
    return next({
      status: 400,
      message: "All fields are required",
    })
  }

  try {
    let user = await User.findOne({ where: { email } })

    // ningún usuario contiene ese correo
    if (!user) return next({ status: 400, message: "Invalid credentials" })

    //Si la cuenta está desabilitada
    if (user.dataValues.status === "disabled") {
      return next({ status: 400, message: "Disabled Account" })
    }

    // Teniedo el usuario, determinamos si la contraseña enviada es correcta
    const isMatch = await bcrypt.compare(password, user.dataValues.password)

    // si la contraseña es incorreta
    if (!isMatch) return next({ status: 400, message: "Invalid credentials" })

    // si la contraseña y email son validos escribimos el payload/body
    const payload = {
      user: { id: user.id },
    }

    // GENERO EL TOKEN
    jwt.sign(
      payload,
      JWT_SECRET,
      {
        expiresIn: "3d",
      },
      (err, token) => {
        if (err) throw err
        return res.json({ token })
      },
    )
  } catch (err) {
    console.log(err)
    next({ err })
  }
}

const getUserDetail = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: {
        exclude: [
          "password",
          "provider",
          "providerId",
          "type",
          "createdAt",
          "updatedAt",
        ],
      },
    })

    if (!user) {
      return next({ status: 404, message: "User not found" })
    }

    //Si la cuenta está desabilitada
    if (user.dataValues.status === "disabled") {
      return next({ status: 400, message: "Disabled Account" })
    }

    res.json(user)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  createUser,
  login,
  getUserDetail,
}
