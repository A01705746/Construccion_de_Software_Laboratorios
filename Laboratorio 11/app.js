console.log('hola, mundo!');
console.log('Ya no tuve que detener el servidor');
console.log('Genial!');

// ¿Qué es json?
// json: javascript object notation
// {nombre_atributo: valor}

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const rutasCampeones = require('./routes/campeones');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/campeones', rutasCampeones);

app.get('/', (request, response, next) => {
    console.log('Bienvenido');
    response.send('<h1>League of Legends</h1>'); 
});

app.use((request, response, next) => {
    response.statusCode = 404;
    response.send('<h1>Parece que un poro se ha comido la página.</h1>'); //Manda la respuesta
    // Otra alternativa
    // response.status(404).send('<h1>Parece que un poro se ha comido la página.</h1>');
});

app.listen(3000);