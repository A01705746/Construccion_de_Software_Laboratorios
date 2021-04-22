console.log('hola, mundo!');
console.log('Ya no tuve que detener el servidor');
console.log('Genial!');

// ¿Qué es json?
// json: javascript object notation
// {nombre_atributo: valor}

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const cookieParser = require('cookie-parser');

const session = require('express-session');

const csrf = require('csurf');
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const rutasCampeones = require('./routes/campeones');
const rutasUsers = require('./routes/users');

//Middleware
//Para acceder facilmente a los datos de las formas
app.use(bodyParser.urlencoded({extended: false}));

const multer = require('multer');

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    },
});

//Idealmente registramos multer después de bodyParser
//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('imagen_campeon')); 

// Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Para acceder a los recursos de la carpeta uploads
app.use(express.static(path.join(__dirname, 'uploads')));

//Para acceder a los valores de las cookies
app.use(cookieParser());
//Para trabajar con sesiones
app.use(session({
    secret: 'sdgbioñdwefdxcb', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(csrfProtection);

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/campeones', rutasCampeones);

app.use('/users', rutasUsers);

app.get('/', (request, response, next) => {
    console.log('Bienvenido');
    console.log(request.session);
    response.send('<h1>League of Legends</h1>'); 
});

app.get('/git', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'git.html'));
});

app.get('/laboratorios', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'lab6.html'));
});

app.use((request, response, next) => {
    response.statusCode = 404;
    response.send('<h1>Parece que un poro se ha comido la página.</h1>'); //Manda la respuesta
    // Otra alternativa
    // response.status(404).send('<h1>Parece que un poro se ha comido la página.</h1>');
});

app.listen(3000);