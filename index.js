const express = require('express');
const enviarCorreo = require('./mail/config');
const app = express();
const PORT = process.env.PORT || 3001;



const html = `

<!DOCTYPE PUBLIC “-//W3C//DTD XHTML 1.0 Transitional//EN” “https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title></title>
    <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f2f2
    }

    .title {
      font-size: 48px;
      color: red;
      text-align: center;
    }
    </style>
  </head>
  <body>
  <h1 class="title">Hola esta es una prueba desde la plantilla</h1>
  <img src="https://placedog.net/500/500" alt="dog" />
  </body>
</html>

`;


app.get('/', (req, res) => {
    res.send('Hola, soy una nueva ruta');
})

app.get('/enviar', (req, res) => {
    const { to, subject, html } = req.query;
    enviarCorreo(to, subject, html);
    res.send('correo enviado');
})

app.get('/formulario', (req, res) => {
    res.sendFile(__dirname + '/views/formulario.html');
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})









 

