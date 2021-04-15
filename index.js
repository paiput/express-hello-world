// importa la librería express
const express = require('express');

// ponemos el puerto del server en una variable
const PORT = process.env.PORT || 3000;

// crea el objeto app
const app = express();

// la app responde con Hello World a todas las peticiones GET a /
app.get('/', (req, res) => {
    res.send('Hello World\n');
});

// el server escucha en el puerto 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});