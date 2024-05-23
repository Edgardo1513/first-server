// Import express
const express = require('express');

const app = express();

// un cliente realiza una petición

// el servidor atiende esa peticion y responde al cliente

// metodo, url ...

// url https://pokeapi.co /v2/pokemon esa es la url api pokemon 
//            URL            ruta      

app.get('/', (request, response) => { 
    response.send('Hola mundo desde mi servidor de express')
});

app.get('/contacto', (request, response) => { 
    response.send('Aqui estarian los contactos')
});

// se termina el código
// Debemos dejar al servidor escuchando las peticiones entrantes

app.listen(3000, () => {
    console.log("servidor escuchando en el puerto 3000");
});


