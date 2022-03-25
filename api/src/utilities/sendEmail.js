require("dotenv").config()

const nodemailer = require("nodemailer")

const sendEmail = async (
  subject,
  message,
  emailFrom,
  emailTo,
  html = false,
) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_KEY, // generated ethereal user
      pass: process.env.PASSWORD_KEY, // generated ethereal password
    },
  })

  let mailOptions = {
    from: emailFrom || "room.rental.app@gmail.com", // dirección del remitente
    to: emailTo || "room.rental.app@gmail.com", // receptor
    subject: subject, // asunto
  };

  html ? (mailOptions.html = html) : (mailOptions.text = message);
  // send mail with defined transport object
  const info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId)

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
}

module.exports = { sendEmail }
