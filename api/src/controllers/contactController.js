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

module.exports = {
  contactController,
}
