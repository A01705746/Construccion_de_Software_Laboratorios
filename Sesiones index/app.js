console.log("Hola desde Node");

// fs: filesystem
const filesystem = require('fs');
filesystem.writeFileSync('Hola.txt', 'Hola desde Node');

// imprimir el arreglo en orden con código asínccrono
const arreglo = [5000, 60, 90, 100, 10, 20, 0, 120, 2000, 340, 1000, 50];
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log("Hola desde el servidor");
    console.log(request.url);

    const personajes = ["Link", "Zelda", "Ganon"];

    if (request.url === "/personajes"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor Node</title></head>');
        response.write("<body><h1>Personajes</h1></body>");
        if (personajes.length == 0){
            response.write("<h2>Todos los personajes están perdidos en el tiempo</h2>");
        } else {
            response.write("<ul>");
            for (let personaje of personajes){
                response.write("<li>");
                response.write(personaje);
                response.write("</li>");
            }
            response.write("<ul>");
        }
        response.write("</html>");
        response.end();
    } else if(request.url == "/nuevo-personaje" && request.method === "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor Node</title></head>');
        response.write("<body><h1>Agrega un personaje</h1>");
        response.write('<form action="nuevo-personaje" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar personaje"></form>');
        response.write("</body>");
        response.write("</html>");
        response.end();
    } else if(request.url == "/nuevo-personaje" && request.method === "POST"){
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_personaje = datos_completos.split('=')[1];
            personajes.push(nuevo_personaje);
            console.log(nuevo_personaje);
            console.log(personajes);
            return response.end();
        });
    } else if(request.url === "/"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor Node</title></head>');
        response.write("<body><h1>Hola desde el servidor</h1></body>");
        response.write("</html>");
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Page not found</title></head>');
        response.write("<body><h1>Page not found, Link is lost in time.</h1></body>");
        response.write("</html>");
        response.end();
    }
});

server.listen(3000)