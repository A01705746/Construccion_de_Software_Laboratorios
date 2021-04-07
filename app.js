console.log('hola, mundo!');
console.log('Ya no tuve que detener el servidor');
console.log('Genial!');

// ¿Qué es json?
// json: javascript object notation
// {nombre_atributo: valor}

const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);