console.log('hola, mundo!');
console.log('Ya no tuve que detener el servidor');
console.log('Genial!');

// ¿Qué es json?
// json: javascript object notation
// {nombre_atributo: valor}

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/campeones/nuevo-campeon', (request, response, next) => {
    response.send('<h1>Nuevo Campeon</h1><body><h1>Agrega un campeón</h1><form action="nuevo-campeon" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar campeón"></form></body>'); 
});

app.post('/campeones/nuevo-campeon', (request, response, next) => {
    console.log(request.body.nombre)
    response.send('<h1>Campeon guardado</h1>');
});

app.use('/campeones', (request, response, next) => {
    response.send('<h1>Campeones</h1>');
});

app.use('/', (request, response, next) => {
    response.send('<h1>¡Hola mundo!</h1>'); 
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);