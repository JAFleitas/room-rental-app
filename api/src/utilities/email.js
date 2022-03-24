require("dotenv").config()

const nodemailer = require("nodemailer");

const sendEmail =  async (email, subject, message ) => {


      // create reusable transporter object using the default SMTP transport   
      const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                  user: process.env.MAIL_KEY, // generated ethereal user       
                  pass: process.env.PASSWORD_KEY, // generated ethereal password     
            },
      });

      // send mail with defined transport object   
      const info = await transporter.sendMail({
            from: email, // dirección del remitente   
            to: process.env.CONTACT_EMAIL, // receptor     
            subject: subject, // asunto    
            text: message, // cuerpo del texto     
      })

      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};


module.exports = {sendEmail}