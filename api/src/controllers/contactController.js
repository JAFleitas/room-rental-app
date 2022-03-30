const { User, Property, PropertyRental, Notification } = require("../db")
const { sendEmail } = require("../utilities/sendEmail")

const contactController = async (req, res) => {
  const { email, subject, message } = req.body
  try {
    let html = `<h1>Contacto de ayuda</h1>
                <div>
                  <h3>${email} dice:</h3>
                  <p>${message}</p>
                </div>
                `
    await sendEmail(subject, "", email, false, html)
    res.send("enviado")
  } catch (error) {
    next(error)
  }
}

const sendPromotionalEmails = async (req, res, next) => {
  const { message, title, subject, image = null, type = "NORMAL" } = req.body

  if (!message || !title || !subject)
    return next({
      status: 400,
      message: "Message and subject field are required",
    })

  const {
    host = false,
    guest = false,
    // inactive = false,
    blocked = false,
    disable = false,
  } = req.query
  const options = { where: {} }
  let segment = "all"

  try {
    if (host || guest || blocked || disable) {
      // Para los usuarios hospedadores
      if (host) {
        options.include = {
          model: Property,
          required: true,
        }
        segment = "hosts"
        // Para los usuarios que han alquilado alguna propiedad
      } else if (guest) {
        options.include = {
          model: PropertyRental,
          required: true,
        }
        segment = "guests"
        // Para los usuarios bloqueados
      } else if (blocked) {
        options.where.blocked = true
        // Para los usuarios deshabilitados
        segment = "blocked"
      } else if (disable) {
        options.where.status = "disabled"
        segment = "disabled"
      }
      // Para los usuarios inactivos (que no tienen nunca han alquilado ni han puesto en alquiler)
    }

    options.attributes = ["email"]
    // Les envio a los tipos que sean ADMIN, SUBADMIN, TODOS
    options.where.type = type

    if (!disable) options.where.status = "enabled"
    if (!blocked) options.where.blocked = false

    const html = `<h2 style="text-align: center; color: rgb(139, 37, 255);">${title}</h2>
  <div style="text-align: justify; padding: 7px;">
    <p style="width: 90%; margin: 1rem auto;">${message}</p>
  </div>
  ${
    image
      ? `<div>
    <img style="border-radius: 5%; width: 70%;display: block; margin: 0 auto;" src="${image}">
  </div>`
      : `<span></span>`
  }
  <div>
    <a href="https://room-rental-app.vercel.app" style="background: rgb(139, 37, 255); border-radius: 12px; padding: 10px; color: white;text-decoration: none; display: block; width: 70px; text-align: center; margin: 1rem auto;">Abrir app</a>
  </div> `

    let usersEmails = await User.findAll(options)
    usersEmails = usersEmails.map(user => user.dataValues.email)

    if (usersEmails.length > 0) {
      const notification = await Notification.create({
        message,
        title,
        subject,
        segment,
        count: usersEmails.length,
        image: image || null,
      })

      await sendEmail(subject, false, false, usersEmails, html)

      return res.json(notification)
    }

    next({ status: 400, message: "No user belongs to this segment" });
  } catch (error) {
    next(error)
  }
}


const getAllPromotionalEmails = async (req, res, next) => {
  try {
    const notifications = await Notification.findAll({});

    res.json(notifications);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  contactController,
  sendPromotionalEmails,
  getAllPromotionalEmails,
}
