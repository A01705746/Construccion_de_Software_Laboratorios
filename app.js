console.log('hola, mundo!');
console.log('Ya no tuve que detener el servidor');
console.log('Genial!');

// ¿Qué es json?
// json: javascript object notation
// {nombre_atributo: valor}

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const personajes = ["Ahri", "Akali", "Evelynn", "Sona"];

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
    console.log(request.body.nombre);
    personajes.push(request.body.nombre);
    response.redirect('/campeones');
});

app.use('/campeones', (request, response, next) => {
    let html = '<h1>Campeones</h1><ul>';
    for (let personaje of personajes){
        html = html + '<li>' + personaje + '</li>';
    }
    html = html + '</ul>';
    response.send(html);
});

app.get('/', (request, response, next) => {
    console.log('Bienvenido');
    response.send('<h1>¡Hola mundo!</h1>'); 
});

app.use((request, response, next) => {
    response.statusCode = 404;
    response.send('<h1>Parece que un poro se ha comido la página.</h1>'); //Manda la respuesta
    // Otra alternativa
    // response.status(404).send('<h1>Parece que un poro se ha comido la página.</h1>');
});

app.listen(3000);