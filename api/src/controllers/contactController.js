const {sendEmail} = require("../utilities/email")


const contactController = async (req, res) => {
      const {email, subject, message} = req.body
      sendEmail(email, subject, message)
      res.send("enviado")
}


module.exports = {
      contactController,
}