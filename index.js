const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hola, soy una nueva ruta');
})

app.get('/enviar', (req, res) => {
    res.send('Hola, soy una nueva ruta');
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})









 

