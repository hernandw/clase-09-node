const nodemailer = require("nodemailer");
require("dotenv").config();

// Configuración de Gmail
let transporter = nodemailer.createTransport({
  service: "gmail", // Puedes usar cualquier otro servicio
  auth: {
    user: process.env.GMAIL_USER, // Tu dirección de correo
    pass: process.env.GMAIL_PASSWORD, // Tu contraseña de aplicaciones
  },
});
///un comentario
//otro comentario

/*
hihiooh
sdfsdfs
sdfsdf
sdfdsf
sdfsdf
sdf

*/
const enviarCorreo = (to, subject, html) => {
  // Opciones del correo electrónico
  let mailOptions = {
    from: process.env.GMAIL_USER, // De quién
    to, //Para quién
    subject, // Asunto del correo
    html, // Contenido del correo en HTML
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Mensaje enviado: %s", info.messageId);
  });
};

module.exports= enviarCorreo
