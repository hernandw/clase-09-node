const nodemailer = require('nodemailer');
require('dotenv').config()


// Configuración de Gmail
let transporter = nodemailer.createTransport({
  service: "gmail", // Puedes usar cualquier otro servicio
  auth: {
    user: process.env.GMAIL_USER, // Tu dirección de correo
    pass: process.env.GMAIL_PASSWORD, // Tu contraseña de correo
  },
});



// Opciones del correo electrónico
  let mailOptions = {
    from: process.env.GMAIL_USER, // De quién
    to:   process.env.GMAIL_USER,   //Para quién
    subject: "mensaje de prueba", // Asunto del correo
    html: "<h1>Mensaje de prueba desde nodemailer version 2</h1>", // Contenido del correo en HTML
  };


  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Mensaje enviado: %s", info.messageId);
  });

